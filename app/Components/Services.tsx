import {
  IconChartLine,
  IconCast,
  IconBooks,
  IconUserQuestion,
  IconHelp,
  IconBusinessplan,
  IconBuildingBroadcastTowerFilled,
} from "@tabler/icons-react";

import { Kanit } from 'next/font/google'

const kanit = Kanit({
  subsets: ['latin'],
  weight: '500'
  
})

export default function Services() {
  const services = [
    {
      description:
        "Free Signals.",
      icon: <IconBuildingBroadcastTowerFilled />,
    },
    {
      description:
        "Fundamentals to Advance your trading career, Learning resources, Trading Tips And Indicators.",
      icon: <IconBooks />,
    },
    {
      description: "Live Trading Sessions.",
      icon: <IconCast />,
    },
    {
      description: "Long Term Trades and Investment Ideas",
      icon: <IconBusinessplan />,
    },
    {
      description:
        "1-To-1 Support",
      icon: <IconHelp />,
    },
    {
      description:
        "Market Analysis And insights.",
      icon: <IconChartLine />,
    },
    {
      description: "Q&A Sessions to Sharpen your Skills.",
      icon: <IconUserQuestion />,
    },
  ];


const Feature = ({ description, icon }: { description: string; icon: React.ReactNode }) => (
  <div className="p-4 border rounded-lg flex flex-col items-center text-center">
    <div className="mb-4 text-red-500">{icon}</div>
    <p>{description}</p>
  </div>
);




  return (
    <div>
      <span className={kanit.className}>
        <span className="text-center">What we offer</span>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-1 gap-6 py-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
        <Feature key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
