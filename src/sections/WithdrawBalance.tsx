import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  MdOutlineAccountBalance,
  MdDoNotDisturbOnTotalSilence,
} from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";

const WithdrawBalance = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <Card className="w-full bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <h2 className="flex items-center justify-center gap-2 heading-text">
            <MdOutlineAccountBalance />
            GRT Balance Overview
          </h2>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-6 text-white">
          <div className="text-center border-r border-gray-700 dark:border-gray-400">
            <h3 className="flex items-center justify-center gap-2 normal-text">
              <MdDoNotDisturbOnTotalSilence />
              Total Deposit
            </h3>
            <p className="text-2xl font-semibold text-green-500">0.00000 GRT</p>
          </div>

          <div className="text-center">
            <h3 className="flex items-center justify-center gap-2 normal-text">
              <PiHandWithdrawFill />
              Total Withdraw
            </h3>
            <p className="text-2xl font-semibold text-red-400">0.00000 GRT</p>
          </div>

          <div className="text-center col-span-2">
            <h3 className="flex items-center justify-center gap-2 normal-text">
              <GiMoneyStack className="text-green-500" />
              Total Earnings
            </h3>
            <p className="text-2xl font-semibold text-yellow-400">
              0.00000 GRT
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 items-center">
          <div>
            <h3 className="normal-text mb-2">Available Withdraw Balance</h3>
            <p className="text-2xl text-center font-semibold text-blue-400">
              0.00000 GRT
            </p>
          </div>

          <a
            href="/"
            className={buttonVariants({
              size: "lg",
              className: "hidden sm:flex items-center gap-1 hover:shadow-lg",
            })}
          >
            <span className="mr-2">⬇</span> Withdraw
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WithdrawBalance;
