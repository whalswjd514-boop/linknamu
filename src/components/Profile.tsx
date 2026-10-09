import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <Image
        src="/profile.jpg"
        alt={`${name} 프로필 사진`}
        width={150}
        height={150}
        priority
        className="h-32 w-32 rounded-full object-cover ring-4 ring-white/80 shadow-[0_16px_32px_-8px_rgba(180,100,50,0.4)]"
      />
      <h1 className="text-2xl font-bold tracking-tight text-[#3b2f2a]">
        {name}
      </h1>
      <p className="max-w-xs text-sm leading-relaxed text-[#7a6358] break-keep">
        {bio}
      </p>
    </section>
  );
}
