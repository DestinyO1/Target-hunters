"use client";

import DiscordCalls from "./DiscordCalls";
import TradeWins from "./TradeWins";
import React, { useState } from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: "500",
});

const DisplayContainer = () => {
  const [currentView, setCurrentView] = useState("TradeWins");

  return (
    <div className="w-full bg-black text-white py-8">
      <div className="w-11/12 max-w-4xl mx-auto bg-black rounded-lg p-2">
        {/* Header */}
        <div className="text-center space-y-4">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCurrentView("DiscordCalls")}
              className={`px-5 py-2 text-sm md:text-base font-medium rounded-md transition-all ${
                currentView === "DiscordCalls"
                  ? "bg-red-500 text-white"
                  : "bg-white text-black hover:bg-gray-300"
              }`}
            >
              Calls
            </button>
            <button
              onClick={() => setCurrentView("TradeWins")}
              className={`px-5 py-2 text-sm md:text-base font-medium rounded-md transition-all ${
                currentView === "TradeWins"
                  ? "bg-red-500 text-white"
                  : "bg-white text-black hover:bg-gray-300"
              }`}
            >
              Wins
            </button>
          </div>

          {/* Subheading */}
          <p className={`${kanit.className} text-lg md:text-xl`}>
            Take a look at what we do
          </p>
        </div>

        {/* Content */}
        <div className=" w-full">
          {currentView === "TradeWins" && <TradeWins />}
          {currentView === "DiscordCalls" && <DiscordCalls />}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Want to see more of this?{" "}
            <a
              href="https://discord.gg/ScZex3qhT6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 underline hover:text-red-400"
            >
              Check out our Discord
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayContainer;
