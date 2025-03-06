import { CopyInput } from "@/components/copy-input";
import { Button } from "@midday/ui/button";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See your full finance portfolio",
};

export default function Page() {
  return (
    <div className="container flex flex-col items-center mb-12 md:mb-48 text-center">
      <h1 className="mt-20 font-medium text-center text-5xl mb-24">
        Portfolio
      </h1>

      
    </div>
  );
}
