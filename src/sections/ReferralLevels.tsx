import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

const ReferralLevels = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const referralLevels = [
    { level: 1, active: 0, total: 10, progress: 20 },
    { level: 2, active: 2, total: 10, progress: 40 },
    { level: 3, active: 0, total: 5, progress: 0 },
    { level: 4, active: 4, total: 10, progress: 80 },
    { level: 5, active: 0, total: 0, progress: 0 },
    { level: 6, active: 0, total: 0, progress: 0 },
  ];

  const openReferralDetails = (level: any) => {
    setSelectedLevel(level);
    setOpenDialog(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-green-500 px-y mt-10">
        Levels
      </h1>
      <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {referralLevels.map((referral) => (
          <Card
            key={referral.level}
            className="shadow-lg hover:scale-105 transition-transform bg-gray-100 dark:bg-gray-900"
          >
            <CardHeader>
              <CardTitle className="normal-text">
                Level {referral.level}
              </CardTitle>
              <Badge
                variant="secondary"
                className="bg-gray-300 dark:bg-gray-700"
              >
                {referral.active > 0 ? (
                  <span className="text-green-500">Active</span>
                ) : (
                  <span className="text-red-500">Inactive</span>
                )}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Active Referrals: {referral.active}</p>
              <p className="mb-4">Total Referrals: {referral.total}</p>
              <Progress value={referral.progress} className="mb-4" />
              <Button
                variant="default"
                className="hover:shadow-lg"
                onClick={() => openReferralDetails(referral.level)}
              >
                Check Referrals
              </Button>
            </CardContent>
          </Card>
        ))}

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              Referral Details - Level {selectedLevel}
            </DialogHeader>
            <div className="text-center">
              <p>
                More stats or details about Level {selectedLevel} can go here.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ReferralLevels;
