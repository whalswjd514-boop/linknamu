type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-6 py-4 text-base font-medium text-[#3b2f2a] shadow-[0_8px_24px_-12px_rgba(180,100,50,0.25)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(180,100,50,0.35)]"
    >
      {title}
      <span className="absolute right-5 text-xs font-normal tabular-nums text-[#7a6358]">
        {count}회
      </span>
    </a>
  );
}
