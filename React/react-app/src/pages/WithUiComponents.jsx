import { Button } from "@/components/ui/button";
import { BackBtn } from "../../components/back-btn";

export const WithUiComponents = () => {
  return (
    <div>
      <BackBtn />
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <span>This is a button From Shadcn</span>
      </Button>
    </div>
  );
};
