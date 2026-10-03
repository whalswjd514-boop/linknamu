import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// TODO: 실제 데이터로 교체 (지금은 보여 주기용 더미 값)
const profile = {
  name: "조민정",
  bio: "AI를 잘 활용하는 개발자",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "Naver", url: "https://www.naver.com" },
  { title: "Instagram", url: "https://www.instagram.com" },
];

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="flex w-full max-w-md flex-col gap-8">
        <Profile name={profile.name} bio={profile.bio} />
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.title}>
              <LinkCard title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
