import { CopyInput } from "@/components/copy-input";
import { Keyboard } from "@/components/keyboard";
import { Button } from "@midday/ui/button";
import type { Metadata } from "next";
import Image from "next/image";
import appIcon from "public/app-icon.png";

export const metadata: Metadata = {
  title: "Download",
  description:
    "With Vestern on Mac you have everything accessible just one click away.",
};

export default function Page() {
  return (
    <div className="container flex flex-col items-center mb-12 md:mb-48 text-center">
      <h1 className="mt-24 font-medium text-center text-5xl mb-24">
        Portfolio.
      </h1>

      <Keyboard />

      <Image
        src={appIcon}
        alt="Vestern App"
        width={120}
        height={120}
        quality={90}
        className="w-[80px] h-[80px] mt-12 md:mt-0 md:h-auto md:w-auto"
      />
      <p className="mb-4 text-2xl	font-medium mt-8">Vestern for Mac</p>
      <p className="text-[#878787] font-sm max-w-[500px]">
        With Vestern on Mac you have everything <br />
        accessible just one click away.
      </p>

      <a href="" download>
        <Button
          variant="outline"
          className="border border-primary h-12 px-6 mt-8"
        >
          Download
        </Button>
      </a>

      <p className="text-xs text-[#878787] mt-4">
        Supports apple silicon & intel
      </p>

      
    </div>
  );
}
