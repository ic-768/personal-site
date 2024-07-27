import Link from "next/link";

import GithubIcon from "@/components/ui/icons/github";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 w-full">
        <Link href="https://github.com/ic-768">
          <GithubIcon />
        </Link>
      </header>

      <main className="flex flex-col items-center p-24 min-h-screen">
        <span>
          Hello! My name is{" "}
          <span className="font-bold">Ioannis Chrysostomakis,</span>
        </span>
        <span>
          but I&apos;m also called <span className="font-bold">Giannis</span> or{" "}
          <span className="font-bold">John</span> in English 🙂
        </span>

        <span>
          I&apos;m a front-end developer with more than{" "}
          <span className="font-bold">3 years</span> of professional experience,
          mainly working on building <span className="font-bold">React</span>{" "}
          applications.
        </span>
      </main>
    </>
  );
}
