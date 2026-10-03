type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-3 text-center">
      {/* TODO: 실제 프로필 사진으로 교체 (지금은 더미 자리표시자) */}
      <div
        role="img"
        aria-label={`${name} 프로필 사진`}
        className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-teal-600 text-5xl font-semibold text-white shadow-md"
      >
        {name.charAt(0)}
      </div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="text-base text-zinc-600 dark:text-zinc-400">{bio}</p>
    </section>
  );
}
