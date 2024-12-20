import ReferralLevels from "@/sections/ReferralLevels";
import ReferralStats from "@/sections/ReferralStats";
import StakeGRT from "@/sections/StakeGRT";
import WithdrawBalance from "@/sections/WithdrawBalance";

const Sections = () => {
  return (
    <div className="  dark:bg-black">
      <ReferralStats />
      <WithdrawBalance />
      <StakeGRT />
      <ReferralLevels />
    </div>
  );
};

export default Sections;
