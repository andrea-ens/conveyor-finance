"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full pb-4 transition-all duration-300 border-b ${
          sticky
            ? "bg-background/90 backdrop-blur-md border-white/10 pt-3"
            : "bg-background/70 backdrop-blur-sm border-transparent pt-4"
        }`}
      >
        <div className="lg:py-0 py-2">
          <div className="container px-4 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-5 xl:gap-8">
            <div onClick={() => setActiveHash("")} className="cursor-pointer justify-self-start shrink-0">
              <Logo />
            </div>
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 justify-center min-w-0">
              {headerData.map((item, index) => (
                <HeaderLink
                  key={index}
                  item={item}
                  activeHash={activeHash}
                  setActiveHash={setActiveHash}
                />
              ))}
            </nav>
            <div className="justify-self-end flex items-center gap-4">
              <div className="hidden lg:flex gap-4 h-10">
              <Button
                size="lg"
                variant="outline"
                render={<Link href="/careers" />}
                className="bg-transparent border border-primary! text-primary px-4 py-2 rounded-lg hover:bg-primary! hover:text-white h-full transition-all duration-300"
              >
                Careers
              </Button>
              <Button
                size="lg"
                render={<Link href="/contact" />}
                className="bg-primary text-background px-4 py-2 rounded-lg hover:bg-transparent hover:text-primary h-full transition-all duration-300 font-medium hover:border hover:border-primary"
              >
                Contact
              </Button>
              </div>

            <Sheet open={navbarOpen} onOpenChange={setNavbarOpen}>
              <SheetTrigger
                render={
                  <button
                    className="block lg:hidden p-2 rounded-lg"
                    aria-label="Toggle mobile menu"
                  />
                }
              >
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
                <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background border-l border-border p-0"
              >
                <div className="flex items-center justify-between p-4">
                  <div
                    onClick={() => setActiveHash("")}
                    className="cursor-pointer"
                  >
                    <Logo />
                  </div>
                </div>
                <nav className="flex flex-col items-start p-4">
                  {headerData.map((item, index) => (
                    <MobileHeaderLink
                      key={index}
                      item={item}
                      activeHash={activeHash}
                      setActiveHash={setActiveHash}
                      onClick={() => setNavbarOpen(false)}
                    />
                  ))}
                  <div className="mt-4 flex flex-col gap-4 w-full">
                    <Button
                      variant="outline"
                      size="lg"
                      render={<Link href="/careers" />}
                      onClick={() => setNavbarOpen(false)}
                      className="w-full bg-transparent border border-primary! text-primary rounded-lg hover:bg-primary! hover:text-white"
                    >
                      Careers
                    </Button>
                    <Button
                      size="lg"
                      render={<Link href="/contact" />}
                      onClick={() => setNavbarOpen(false)}
                      className="w-full bg-primary text-background rounded-lg hover:bg-transparent hover:text-primary border border-primary font-medium"
                    >
                      Contact
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
