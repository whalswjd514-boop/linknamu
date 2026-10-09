import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";

// TODO: 실제 데이터로 교체 (지금은 보여 주기용 더미 값)
const profile = {
  name: "조민정",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많은 개발자",
};

export default function Home() {
  return (
    <main className="relative flex flex-1 justify-center overflow-hidden bg-gradient-to-b from-[#fffaf2] via-[#ffeedd] to-[#ffd9bf] px-6 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#ffc9a3]/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#ffe0b8]/60 blur-3xl"
      />
      <div className="relative flex w-full max-w-md flex-col gap-12">
        <Profile name={profile.name} bio={profile.bio} />
        <LinkList />
      </div>
    </main>
  );
}
