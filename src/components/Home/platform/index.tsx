import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Platform = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="px-8 py-12 md:px-16 md:py-14 rounded-3xl border border-white/10 bg-white/[0.03] grid grid-cols-12 items-center">
          <div className="lg:col-span-8 col-span-12">
            <h2 className="text-white sm:text-[40px] text-3xl mb-6">
              Talk with the company
            </h2>
            <p className="text-muted/60 text-lg">
              Partnerships, press, and hiring. conveyor.finance is the
              corporate site — write to us, or read how we are organized.
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex lg:justify-end lg:mt-0 mt-7 justify-center">
              <Button
                render={<Link href="/contact" />}
                className="flex items-center gap-2.5 text-background bg-primary hover:bg-primary/80 border border-primary py-6 px-5 rounded-lg sm:text-21 text-lg font-medium h-14"
              >
                Talk to us
                <Image
                  src={"/images/icons/icon-arrow.svg"}
                  alt="icon"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
