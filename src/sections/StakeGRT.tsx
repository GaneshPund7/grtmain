import { IoMdTimer } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
export default function StakeGRT() {
  return (
    <div className="mx-0 sm:mx-10 p-6 my-10 px-3 sm:px-32 shadow-lg bg-gray-100 dark:bg-gray-900 text-gray-100 rounded-lg">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-b pb-4 mb-4">
        <h2 className="flex items-center justify-center gap-2 heading-text">
          <IoMdTimer />
          Earnings in Realtime
        </h2>
        <button className="text-blue-400 hover:underline flex items-center justify-center gap-2 ">
          <BiMoneyWithdraw className="text-green-500" />
          Withdraw Anytime
        </button>
      </div>

      <div className="space-y-2 text-sm leading-relaxed">
        <p>
          <strong className="normal-text">Your Wallet:</strong>
        </p>
        <p className="text-black dark:text-white">
          <ol className="list-decimal list-inside sm:normal-text flex flex-col items-start gap-2">
            <li>
              Enter
              <a
                href="https://grebstake.netlify.app/"
                className="text-blue-600 px-2"
              >
                https://grebstake.netlify.app/
              </a>
              in your Metamask/TokenPocket/Trust Wallet/SafePal Dapp browser,
            </li>
            <li>Pancakes Buy GRT,</li>
            <li>
              Enter the amount of GRT required to approve the investment,{" "}
            </li>
            <li>submit and wait for the block confirmation</li>
            <li> refresh the webpage to confirm the approval</li>
            <li>enter the purchase amount, 7 Stake GRT.</li>
          </ol>
        </p>
        <p className="text-red-400 sm:normal-text">
          📌 Suggest: GRT pre-approved, available for immediate purchase on
          launch day.
        </p>
        <p className="text-red-400 sm:normal-text">
          📌 Note: GRT is deployed on Binance Smart Chain, so BNB needs to be
          used as a gas fee.
        </p>
      </div>

      <div className="flex justify-between mt-6 bg-gray-300 dark:bg-gray-700 p-4 rounded-lg">
        <h3 className="text-green-400 text-sm sm:text-lg font-semibold">
          Plan 1 (600 Days) 150% Year
        </h3>
        <p className="text-black dark:text-white text-sm sm:text-lg">
          Daily / 0.25%
        </p>
      </div>

      {/* Input Section */}
      <div className="flex flex-col gap-4 mt-6">
        <label htmlFor="amount" className="block normal-text">
          Least enter 5
        </label>
        <div className="flex gap-3 items-center flex-col sm:flex-row  justify-start">
          <div className="flex items-center">
            <input
              id="amount"
              type="number"
              placeholder="Enter amount"
              className="w-[45rem] p-3 rounded-l-md border-none outline-none bg-white dark:bg-transparent dark:border text-black dark:text-white"
            />
            <span className="bg-gray-800 px-4 py-3 rounded-r-md text-gray-300">
              GRT
            </span>
          </div>
          <div className="">
            <button className="w-full hover:shadow-2xl bg-green-500 hover:bg-green-600 text-gray-900 px-6 font-bold py-3 rounded-md transition">
              Stake GRT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
