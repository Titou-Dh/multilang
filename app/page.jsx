'use client';
import Image from "next/image";
import Input from "../components/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-16">
      <div className="flex flex-col w-8/12  ">
        <h2 className="text-2xl">MultiLang</h2>
        <div className="flex flex-col py-32 items-center justify-center">
          <Image
            src="/assets/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <h3>How Can i help you today?</h3>
        </div>
        <div className="absolute bottom-10 flex gap-4 items-center justify-center">
          <Image
            src="/assets/upload.svg"
            className="text-white"
            width={30}
            height={30}
            alt="logo"
          />
          <Image
            src="/assets/voice.svg"
            width={30}
            height={30}
            alt="logo"
          />
          <Input/>
        </div>
      </div>
    </main>
  );
}
