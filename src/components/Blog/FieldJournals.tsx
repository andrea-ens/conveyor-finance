import { fieldJournals } from "@/app/api/blog";

const FieldJournals = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {fieldJournals.map((journal) => (
        <a
          key={journal.href}
          href={journal.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-primary/50 transition-colors h-full"
        >
          <p className="text-primary text-xs uppercase tracking-[0.16em]">
            {journal.kicker}
          </p>
          <h3 className="text-white text-xl font-medium mt-3">{journal.name}</h3>
          <p className="text-white/55 mt-3 leading-relaxed text-sm">
            {journal.blurb}
          </p>
          <p className="text-primary font-medium mt-5 text-sm">Open →</p>
        </a>
      ))}
    </div>
  );
};

export default FieldJournals;
