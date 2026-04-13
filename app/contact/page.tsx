import { redirect } from "next/navigation";

function searchParamsToSuffix(
  searchParams: Record<string, string | string[] | undefined>,
) {
  const q = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      value.forEach((v) => q.append(key, v));
    } else {
      q.set(key, value);
    }
  }
  const s = q.toString();
  return s ? `?${s}` : "";
}

export default async function LegacyContactRedirect({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  redirect(`/plumbing/contact${searchParamsToSuffix(sp)}`);
}
