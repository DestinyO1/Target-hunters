import React from 'react';
import Link from 'next/link';

const VipSignup = () => {
  return (
    <div id="vip-signup" className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 mx-auto my-8 p-6">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-red-500 text-center mb-4">
        A GUIDE ON HOW TO JOIN VIP 🎯
      </h2>

      {/* Instructions */}
      <div className="text-gray-700 space-y-4">
        <p>
          <span className="font-bold text-black">1.</span> Go to the Ticket Channel and press{' '}
          <span className="italic font-semibold">‘Create a Ticket’</span>.
        </p>
        <p>
          <span className="font-bold text-black">2.</span> Once you have created a ticket, wait
          for a member of staff to get back to you.
        </p>
      </div>

      {/* Subscription Details */}
      <div className="mt-6 bg-gray-100 border border-gray-300 p-4 rounded-md">
        <h3 className="text-lg font-semibold text-black mb-2">
          💎 VIP Subscription for New and Renewing Members 💎
        </h3>
        <p className="text-gray-700">
          🎯 <span className="font-semibold text-red-500">VIP Packages</span> 🎯 :
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
          <li>
            💰 <span className="font-bold">15 USDT (1 Month) / £10</span>
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          The current rate of VIP per month is{' '}
          <span className="font-bold text-black">$15 USDT</span>. A USDT Wallet will be sent via
          the <span className="font-semibold">POLYGON/MATIC NETWORK</span>, where you will be
          required to deposit the funds in order to gain access to the VIP Role!
        </p>
        <p className="mt-2 text-black">
          OR Direct Deposit Bank Transfer with the reference{' '}
          <span className="italic">‘1x VIP MEMBER’</span> (x Depending on the quantity of months)
          <span className="font-semibold"> (UK ONLY).</span>
        </p>
        <p className="mt-2 text-gray-600">
          If you have any questions, create a ticket in the Ticket Channel and a member of staff
          will get back to you!
        </p>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-6 text-center">
        <Link href="https://discord.gg/ScZex3qhT6">
          <p className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-lg font-bold">
            Proceed
          </p>
        </Link>
      </div>
    </div>
  );
};

export default VipSignup;
