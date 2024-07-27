import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between w-full py-4 px-6 ">
        <div className="">Ioannis Chrysostomakis</div>
        <Link href="/">About Me</Link>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span>
          Hello! My name is Ioannis Chrysostomakis, but I&apos;m also called
          Giannis or John in English 🙂
        </span>
      </main>
    </>
  );
}
