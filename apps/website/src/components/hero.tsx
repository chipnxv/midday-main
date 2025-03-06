import { Button } from "@midday/ui/button";
import Link from "next/link";
import { HeroImage } from "./hero-image";
import { Metrics } from "./metrics";
import { WordAnimation } from "./word-animation";

export function Hero() {
  return (
    <section className="mt-[60px] lg:mt-[180px] min-h-[530px] relative lg:h-[calc(100vh-300px)]">
      <div className="flex flex-col">
        

        <h2 className="mt-6 md:mt-10 max-w-[580px] text-gray-800 dark:text-gray-200 leading-tight text-[24px] md:text-[36px] font-sans font-semibold tracking-tight">
  <span className="text-[32px] md:text-[48px] font-extrabold">VESTERN</span><br />
  <span className="text-[28px] md:text-[40px] uppercase font-bold">The All-In-One Finance App</span><br />
  <span className="text-[20px] md:text-[32px] font-medium">
    Your Future, Engineered with AI and Human Expertise for Smarter Investing.<br />
    Made for <WordAnimation/>.
  </span>
</h2>


        <div className="mt-8 md:mt-10">
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </Link>

            <a href="#">
              <Button className="h-11 px-5">Sign Up</Button>
            </a>
          </div>
        </div>

        <p className="text-xs text-[#707070] mt-4 font-mono">
          Join our services while it's free
        </p>
      </div>

      <HeroImage />
      <Metrics />
    </section>
  );
}
