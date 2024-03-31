'use client';
import Image from "next/image";
import Input from "../components/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24 pt-16">
      <div className="flex flex-col w-8/12 justify-between h-full ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">MultiLang 1.0</h2>
          <select id="small" className="block w-min p-2 mb-6 text-sm border bg-main border-gray-300 rounded-lg  ">
            <option selected>🇺🇸 ENG</option>
            <option value="US">🇸🇦 AR</option>
            <option value="CA">🇫🇷 FR</option>

          </select>
        </div>
        <div className="flex flex-col py-32 items-center justify-center">
          <Image
            src="/assets/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <h3>How Can i help you today?</h3>
        </div>
        <div className="flex gap-4 items-center justify-center">
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
          <Input />
          <Image
            src="/assets/send.svg"
            className="text-white"
            width={30}
            height={30}
            alt="logo"
          />
        </div>
        <h5 className="text-blue-900 text-xs w-full text-center p-4">MultiLang can ake mistakes.Consider checking your vocal.</h5>
      </div>
    </main>
  );
}
