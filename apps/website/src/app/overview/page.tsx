import { Assistant } from "@/components/assistant";
import { CtaButton } from "@/components/cta-button";
import { DynamicImage } from "@/components/dynamic-image";
import type { Metadata } from "next";
import OverviewLight from "public/product-overview-light.jpg";
import OverviewDark from "public/product-overview.jpg";
import SpendingLight from "public/product-spending-light.png";
import SpendingDark from "public/product-spending.png";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Get real-time insight into your business's financial state. Keep track of your spending, income and overall financial health.",
};

export default function Page() {
  return (
    <div className="container mb-52">
      <div className="mb-40">
        <h1 className="mt-10 font-medium text-center text-[40px] md:text-[60px] mb-2 leading-none text-stroke">
          Dashboard
        </h1>

        

        
      </div>

      <DynamicImage
        darkSrc={OverviewDark}
        lightSrc={OverviewLight}
        alt="Dashboard"
        className="mt-28"
      />

      <div className="flex items-center flex-col text-center relative mt-28">
        <div className="max-w-[600px]">
          <h4 className="font-medium text-xl md:text-2xl mb-4">
            From revenue to spending
          </h4>
          <p className="text-[#878787] text-sm">
            Connect your business with over 20,000 banks across 33 countries,
            including the US, Canada, the UK, and Europe. Gain seamless insights
            into your income and expenses by integrating your existing bank
            accounts. With a unified view of all your finances, you’ll have a
            clearer picture of your financial health and the tools to make
            informed decisions about your business.
          </p>
        </div>

        <DynamicImage
          darkSrc={SpendingDark}
          lightSrc={SpendingLight}
          alt="Spending"
          className="mt-10 max-w-[834px] w-full"
        />

        <div className="mt-32 max-w-[550px]">
          <h4 className="font-medium text-xl md:text-2xl mb-4">Dive deeper</h4>
          <p className="text-[#878787] text-sm md:mb-10">
            Our assistant is here to help you navigate your financial data with
            ease. Ask questions about your key financial metrics and get
            instant, insightful answers. With access to real-time data across
            your connected bank accounts, the assistant helps you make informed
            decisions and stay on top of your business finances.
          </p>
        </div>

        <div className="text-left scale-[0.45] md:scale-100 -mt-20 md:mt-0">
          <Assistant />
        </div>
      </div>
    </div>
  );
}
