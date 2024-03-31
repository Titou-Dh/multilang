'use client';
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-16">
      <div className="flex flex-col w-8/12  ">
        <h2>MultiLang</h2>
        <div className="">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="logo"
            />
          <h3></h3>
        </div>
      </div>
    </main>
  );
}
