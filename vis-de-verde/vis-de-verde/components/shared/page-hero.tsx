type PageHeroProps = {
  title: string;
  eyebrow?: string;
};

export function PageHero({ title, eyebrow }: PageHeroProps) {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {eyebrow ? <p className="mb-2 text-sm text-slate-500">{eyebrow}</p> : null}
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
    </section>
  );
}
