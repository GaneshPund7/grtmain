import { TabsBtn, TabsContent, TabsProvider } from "@/components/ui/tab";
import ReferralLevels from "@/sections/ReferralLevels";
import ReferralStats from "@/sections/ReferralStats";
import StakeGRT from "@/sections/StakeGRT";
import WithdrawBalance from "@/sections/WithdrawBalance";
import { Bell } from "lucide-react";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineAccountBalance } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";

export function Home() {
  return (
    <div className="border bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4  relative">
      <TabsProvider hover defaultValue={"stack"}>
        <div className="flex justify-center mt-2">
          <div className="flex items-center w-fit bg-gray-200  dark:bg-gray-900 p-1 dark:text-white text-black rounded-md border">
            <TabsBtn value="stack">
              <span className="relative flex items-center justify-center gap-2 z-[2] uppercase">
                <IoMdTimer className="text-green-500" />
                Stack
              </span>
            </TabsBtn>
            <TabsBtn value="withDraw">
              <span className="relative flex items-center justify-center gap-2 z-[2] uppercase">
                <MdOutlineAccountBalance className="text-green-500" />
                WithDraw
              </span>
            </TabsBtn>
            <TabsBtn value="referral">
              <span className="relative flex items-center justify-center gap-2 z-[2] uppercase">
                <Bell className="w-5 h-5 text-green-500 mr-2" />
                Referral
              </span>
            </TabsBtn>
            <TabsBtn value="levels">
              <span className="relative flex items-center justify-center gap-2 z-[2] uppercase">
                <SiLevelsdotfyi className="text-green-500" />
                Levels
              </span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value="stack">
          <div className="w-full">
            <StakeGRT />
          </div>
        </TabsContent>

        <TabsContent value="withDraw">
          <div className="w-full">
            <WithdrawBalance />
          </div>
        </TabsContent>

        <TabsContent value="referral">
          <div className="w-full">
            <ReferralStats />
          </div>
        </TabsContent>

        <TabsContent value="levels">
          <div className="w-full">
            <ReferralLevels />
          </div>
        </TabsContent>
      </TabsProvider>
    </div>
  );
}
