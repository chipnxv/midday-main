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
import { Keyboard } from "@/components/keyboard";
import { Assistant } from "@/components/assistant"; // Import the Assistant component

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Automatically match incoming invoices or receipts to the correct transaction.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Main Bar (Assuming it's already styled and positioned) */}
      <div className="bg-black text-white p-4">
        {/* Main Bar Content */}
      </div>

      {/* Learn Section */}
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold">Learn</h1>
      </div>

      {/* AI Chatbox Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl w-full p-4">
          <Assistant/> {/* Add the Assistant component here */}
        </div>
      </div>
    </div>
  );
}