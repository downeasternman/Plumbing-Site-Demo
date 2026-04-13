import {
  convertToModelMessages,
  safeValidateUIMessages,
  streamText,
} from "ai";

import { getSystemPrompt } from "@/lib/chatVertical";

export const maxDuration = 60;

const MAX_MESSAGES = 24;

function hasGatewayAuth(): boolean {
  return Boolean(
    process.env.AI_GATEWAY_API_KEY?.trim() ||
      process.env.VERCEL ||
      process.env.VERCEL_ENV,
  );
}

export async function POST(req: Request) {
  if (!hasGatewayAuth()) {
    return Response.json(
      {
        error:
          "AI chat is not configured. For local dev, set AI_GATEWAY_API_KEY (see .env.example). On Vercel, enable AI Gateway or set the key in Project Settings → Environment Variables.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return new Response("Invalid body", { status: 400 });
  }

  const { messages, pathname } = body as {
    messages?: unknown;
    pathname?: unknown;
  };

  const path =
    typeof pathname === "string" && pathname.startsWith("/") ? pathname : "/";

  const validation = await safeValidateUIMessages({ messages });
  if (!validation.success) {
    return new Response(validation.error.message, { status: 400 });
  }

  if (validation.data.length > MAX_MESSAGES) {
    return new Response("Too many messages in one thread", { status: 400 });
  }

  const modelMessages = await convertToModelMessages(validation.data);

  const model =
    process.env.AI_MODEL?.trim() || "openai/gpt-4.1-mini";

  const result = streamText({
    model,
    system: getSystemPrompt(path),
    messages: modelMessages,
    maxOutputTokens: 900,
  });

  return result.toUIMessageStreamResponse();
}
