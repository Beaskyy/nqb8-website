import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="size-8 rounded-[10px] bg-[#0A84FF]" />
      <span className="text-[22px] font-bold tracking-[-0.02em] text-white">
        NQB8
      </span>
    </div>
  );
}
