import type { Lane } from "@/lib/content";

export const laneText: Record<Lane, string> = { navy: "text-navy dark:text-[#d8c4b2]", teal: "text-teal-ink", amber: "text-amber-ink" };
export const laneBg: Record<Lane, string> = { navy: "bg-navy", teal: "bg-teal", amber: "bg-amber" };
export const laneBorder: Record<Lane, string> = {
  navy: "border-t-navy",
  teal: "border-t-teal",
  amber: "border-t-amber",
};

export function Container({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`eyebrow block ${className}`}>{children}</span>;
}

export function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <div className={`accent-rule mt-4 ${center ? "mx-auto" : ""}`} />
      <h2 className="h2 mt-5 text-ink">{title}</h2>
      {lead && <p className="lead mt-4">{lead}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-line bg-mist">
      <Container className="py-16 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <div className="accent-rule mt-4" />
        <h1 className="h1 mt-5 max-w-3xl text-ink">{title}</h1>
        {lead && <p className="lead mt-5 max-w-2xl">{lead}</p>}
      </Container>
    </section>
  );
}
