import {Button} from "@/components/ui/button";
import {ArrowLeftOnRectangleIcon} from "@heroicons/react/24/outline";

export default function NavActions() {
  return (
    <>
      <div className="flex items-center justify-center gap-1 text-sm">
        <div className="flex w-full flex-row items-center gap-1">
          <Button variant="outline" className="w-max hover:text-main-500">
            ثبت نام
          </Button>
          <Button
            variant="default"
            className="gap-2 w-max  hover:text-main-500"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            ورود
          </Button>
        </div>
      </div>
    </>
  );
}
