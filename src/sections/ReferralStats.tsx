import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ClipboardCopy, Users, Minimize, Bell, Trophy } from "lucide-react"; // Import icons
import { FcStatistics, FcMoneyTransfer } from "react-icons/fc";
import { VscReferences } from "react-icons/vsc";

const ReferralStats = () => {
  return (
    <div className="flex justify-center items-center my-10 min-h-screen">
      <div className="w-full max-w-5xl space-y-6">
        <div className="flex items-center bg-blue-50 dark:bg-gray-900 border-l-4 border-green-500 p-4 rounded-lg shadow-lg">
          <Bell className="w-5 h-5 text-green-500 mr-2" />
          <p className="text-green-500 text-sm">
            Invite more friends to reach your next bonus milestone!
          </p>
        </div>

        <Card className="shadow-lg rounded-lg bg-gray-100 dark:bg-gray-900">
          <CardHeader className="text-center mb-4">
            <h1 className="flex items-center justify-center gap-2 heading-text">
              <FcStatistics />
              Referral Statistics
            </h1>
            <p className="text-sm text-gray-500 dark:text-white">
              Share your referral link and earn rewards. Track your progress
              below.
            </p>
          </CardHeader>

          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <p className="normal-text">Your Referral Link</p>
              <Button className="gap-2" variant="outline">
                <ClipboardCopy className="w-4 h-4" /> Copy Link
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <Minimize className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="normal-text">Mining Rewards</p>
                  <p className="font-semibold text-gray-800 dark:text-green-500">
                    0.00000 GRT
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg dark:bg-gray-700">
                <Users className="w-6 h-6 text-green-500" />
                <div>
                  <p className="normal-text">Referrals</p>
                  <p className="font-semibold text-gray-800 dark:text-green-600">
                    5 Referrals
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="normal-text">Progress to Next Reward</p>
              <Progress value={50} className="h-3 bg-gray-200 my-3" />
              <p className="text-xs text-gray-500 dark:text-gray-200 mt-2">
                50% completed — Invite 5 more friends!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-lg shadow-md p-4 bg-gray-100 dark:bg-gray-900">
          <CardHeader>
            <h2 className="heading-text flex items-center justify-center gap-2 heading-text">
              <FcMoneyTransfer />
              Earnings Summary
            </h2>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <p className="normal-text">Total Earnings</p>
              <p className="text-lg font-bold text-blue-600">0.00000 GRT</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="normal-text">Pending Rewards</p>
              <p className="text-lg font-bold text-yellow-500">0.000 GRT</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="normal-text">Bonus Achieved</p>
              <p className="text-lg font-bold text-green-500">2 Bonuses</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="normal-text">Referral Income</p>
              <p className="text-lg font-bold text-purple-500">0.00000 GRT</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
          <CardHeader>
            <h2 className="flex items-center justify-center gap-2 heading-text">
              <VscReferences />
              Referral Leaderboard
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md dark:bg-gray-700 ">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <p className="text-sm font-medium text-gray-700 dark:text-white">
                    User123
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  10 Referrals
                </p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md dark:bg-gray-700 ">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-gray-400" />
                  <p className="text-sm font-medium text-gray-700 dark:text-white">
                    User456
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  8 Referrals
                </p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md dark:bg-gray-700 ">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-gray-400" />
                  <p className="text-sm font-medium text-gray-700 dark:text-white">
                    User789
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  6 Referrals
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-gray-500 dark:text-white">
              Keep sharing to climb the leaderboard!
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ReferralStats;
