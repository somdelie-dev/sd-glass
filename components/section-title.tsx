export function SectionTitle({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div
        className={`inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium ${
          dark
            ? "border-sky-400/30 bg-sky-500/10 text-sky-300"
            : "border-sky-200 bg-sky-50 text-sky-700"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-8 sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}
      >
        {description}
      </p>
    </div>
  );
}
