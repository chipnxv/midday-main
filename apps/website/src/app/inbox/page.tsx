import { CopyInput } from "@/components/copy-input";
import { CtaButton } from "@/components/cta-button";
import { DynamicImage } from "@/components/dynamic-image";
import type { Metadata } from "next";
import BulkLight from "public/product-bulk-light.png";
import BulkDark from "public/product-bulk.png";
import InboxLight from "public/product-inbox-light.jpg";
import InboxDark from "public/product-inbox.jpg";
import MatchLight from "public/product-match-light.png";
import MatchDark from "public/product-match.png";

export const metadata: Metadata = {
  title: "Inbox",
  description:
    "Automatically match incoming invoices or receipts to the correct transaction.",
};

export default function Page() {
  return (
    <div className="container mb-52">
      <div className="mb-40">
        <h1 className="mt-20 font-medium text-center text-[40px] md:text-[60px] mb-2 leading-none text-stroke">
          Learn
        </h1>

        

        <div className="flex items-center flex-col text-center relative">
          <p className="text-lg mt-4 max-w-[600px]">
            
          </p>

          
        </div>
      </div>

      

      <div className="flex items-center flex-col text-center relative mt-28">
        <div>
          <h4 className="font-medium text-xl md:text-2xl mb-4">
            
          </h4>
          <p className="text-[#878787] text-sm">
            
          </p>
        </div>

        

        

        <div className="mt-32 max-w-[600px]">
          <h4 className="font-medium text-xl md:text-2xl mb-4">
            
          </h4>
          <p className="text-[#878787] text-sm mb-10">
            
          </p>
        </div>

        
      </div>
    </div>
  );
}
