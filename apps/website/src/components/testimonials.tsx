import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

const testimonials = [
  {
    name: "VFinance",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1843079229073981440/pQqZJX5G_400x400.jpg",
    handle: "@ImLucasGrey",
    verified: true,
    quote: "Bitcoin Surges Past $35,000 as ETF Approval Hopes Rise",
  },
  {
    name: "VFinance",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1821352126406127616/We8itUSn_400x400.jpg",
    handle: "@Padierfind",
    verified: true,
    quote: "Global Oil Prices Spike Amid Middle East Tensions",
  },
  {
    name: "VFinance",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1595060668897677314/pHMUc1Zb_400x400.jpg",
    handle: "@bentossell",
    verified: true,
    quote:
      "China's Economy Shows Signs of Recovery as Exports Grow",
  },
  {
    name: "VFinance",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1194368464946974728/1D2biimN_400x400.jpg",
    handle: "@c_alares",
    verified: true,
    quote: "EU Proposes New Regulations for Cryptocurrency Markets",
  },
  {
    name: "VFinance",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1792735373887696896/Nys5Q2b3_400x400.jpg",
    handle: "@zenorocha",
    verified: true,
    quote: "this is absolutely amazing",
  },
  {
    name: "VFinance",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1488962358609330178/tdTC7o6M_400x400.jpg",
    handle: "@baileysimrell",
    verified: true,
    quote: "Tesla Shares Drop After Q3 Earnings Miss Estimates",
  },
  {
    name: "VFinance",
    handle: "@WeirdoWizard",
    verified: false,
    quote: "Global Debt Hits Record High, Raising Concerns for Emerging Markets",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1117472858836434944/FbWce7CZ_400x400.jpg",
  },
  {
    name: "VFinance",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1839412200760610816/Lce29ADc_400x400.jpg",
    handle: "@calcom",
    verified: true,
    quote: "Amazon Announces Major AI Investment to Boost Cloud Business",
  },
  {
    name: "EconomicTimes",
    avatarUrl:
      "",
    handle: "@EconomicTimes",
    verified: true,
    quote: "Apple Stocks fell by 12%",
  },
  {
    name: "YahooFinance",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1816814706000080897/uSIidPHz_400x400.png",
    handle: "@YahooFinance",
    verified: true,
    quote:
      "SENSEX hits all time high, 17%!!",
  },
];

export function Testimonials() {
  return (
    <div className="relative pb-22">
      <h3 className="text-4xl mb-8 font-medium  text-center">Latest Finance News</h3>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}
