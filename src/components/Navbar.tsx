import MobileNav from "./MobileNav";
import { ModeToggleBtn } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="block sm:hidden">
        <MobileNav />
      </div>

      <nav className="sticky hidden sm:block z-10 px-6 md:px-10 h-14 inset-x-0 top-0 w-[98vw] border-b border-gray-200 dark:border-gray-500 dark:bg-black backdrop-blur-lg transition-all">
        <div className="flex h-14 items-center justify-between border-b dark:border-none border-zinc-200">
          <a href="/" className="flex text-2xl font-semibold z-40">
            GRT <span className="text-green-600">Contract</span>
          </a>
          <div className="h-full cursor-pointer flex items-center space-x-4 text-slate-900 dark:text-white font-bold">
            <ModeToggleBtn />
            <a
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
              })}
            >
              Stack ✨
            </a>
            <a
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
              })}
            >
              Contract
            </a>
            <a
              href="/api/auth/login"
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
              })}
            >
              Join Us
            </a>
            <a
              href="/configure/upload"
              className={buttonVariants({
                size: "lg",
                className: "dark:text-white sm:flex items-center gap-1",
              })}
            >
              Contact
              <ArrowRight className="ml-1.5 size-5" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
