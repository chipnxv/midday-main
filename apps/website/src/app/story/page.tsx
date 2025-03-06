import { DynamicImage } from "@/components/dynamic-image";
import type { Metadata } from "next";
import Image from "next/image";
import signatureDark from "public/email/signature-dark.png";
import signatureLight from "public/email/signature.png";
import founders from "public/founders.png";

export const metadata: Metadata = {
  title: "Story",
  description: "This is why we’re building Midday.",
};

export default function Page() {
  return (
    <div className="container max-w-[750px]">
      <h1 className="mt-8 font-medium text-center text-5xl mb-16 leading-snug">
        Market Overview
      </h1>

      <h3 className="font-medium text-xl mb-2"> </h3>
      <p className="text-[#878787] mb-8">
        
      </p>

      <h3 className="font-medium text-xl mb-2"></h3>
      <p className="text-[#878787] mb-8">
        
      </p>

      <h3 className="font-medium text-xl mb-2">  </h3>
      <p className="text-[#878787] mb-12">
        
      </p>

      

      <div className="mt-6 mb-8">
        <p className="text-sm text-[#878787] mb-2"></p>

        <DynamicImage
          darkSrc={signatureDark}
          lightSrc={signatureLight}
          alt="Signature"
          className="w-[143px] h-[20px]"
        />
      </div>
    </div>
  );
}
