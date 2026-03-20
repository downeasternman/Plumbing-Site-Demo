import { DEMO_OWNER_CTA_LABEL, DEMO_OWNER_MAILTO } from "@/lib/demoOwner";

/**
 * Persistent sales CTA for the demo suite builder.
 */
export default function DemoOwnerStrip() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 text-center shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur sm:py-2.5">
      <p className="text-xs text-slate-700 sm:text-sm">
        <span className="font-semibold text-slate-900">Demo website</span>
        {" — "}
        <a
          href={DEMO_OWNER_MAILTO}
          className="font-semibold text-accent underline decoration-2 underline-offset-2 hover:text-accent-strong"
        >
          {DEMO_OWNER_CTA_LABEL}
        </a>
      </p>
    </div>
  );
}
