import { TabsBtn, TabsContent, TabsProvider } from "../ui/tab";

export function GrbeDashBoard() {
  return (
    <div className="bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4  relative">
      <TabsProvider hover defaultValue={"Stake"}>
        <div className="flex justify-center mt-2">
          <div className="flex items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-md border">
            <TabsBtn default value="Stake">
              <div className="relative flex gap-2 items-center justify-center z-[2] uppercase">
                <img
                  src="public\images\stk.svg"
                  className="size-5 text-orange-600 object-contain object-center"
                  alt=""
                />
                <span>Stake</span>
              </div>
            </TabsBtn>
            <TabsBtn value="withdraw">
              <div className="relative flex gap-2 items-center justify-center z-[2] uppercase">
                <img
                  src="public\images\divs.svg"
                  className="size-5 text-orange-600 object-contain object-center"
                  alt=""
                />
                <span>Withdraw</span>
              </div>
            </TabsBtn>
            <TabsBtn value="referral">
              <div className="relative flex gap-2 items-center justify-center z-[2] uppercase">
                <img
                  src="public\images\ref.svg"
                  className="size-5 text-orange-600 object-contain object-center"
                  alt=""
                />
                <span>Referral</span>
              </div>
            </TabsBtn>
            <TabsBtn value="levels">
              <div className="relative flex gap-2 items-center justify-center z-[2] uppercase">
                <img
                  src="public\images\lvls.svg"
                  className="size-5 text-orange-600 object-contain object-center"
                  alt=""
                />
                <span>Levels</span>
              </div>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value="Stake">
          <div className="w-full h-80">
            <span>Stake</span>
          </div>
        </TabsContent>
        <TabsContent value="withdraw">
          <div className="w-full h-80">
            <span>Withdraw</span>
          </div>
        </TabsContent>
        <TabsContent value="referral">
          <div className="w-full h-80">
            <span>Referral</span>
          </div>
        </TabsContent>
        <TabsContent value="levels">
          <div className="w-full h-80">
            <span>Levels</span>
          </div>
        </TabsContent>
      </TabsProvider>
    </div>
  );
}
