import React, { FC } from "react";
import Link from "next/link";
import { footerlabels } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";
import { Separator } from "@/components/ui/separator";

const Footer: FC = () => {
  return (
    <footer className="pt-20 bg-background border-t border-white/10">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <Logo />
            <p className="text-white/55 max-w-sm leading-relaxed">
              Conveyor Finance. Corporate website for on-chain trading
              infrastructure. Not a live exchange, custodian, or brokerage.
            </p>
            <div className="flex gap-5 items-center">
              <Link
                href="https://github.com/andrea-ens"
                className="text-white/70 hover:text-primary"
                aria-label="GitHub"
              >
                <Icon icon="fa6-brands:github" width="22" height="22" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                className="text-white/70 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Icon icon="fa6-brands:linkedin-in" width="22" height="22" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white mb-4 font-medium">Company</h4>
            <ul className="space-y-3 text-white/55">
              <li>
                <Link href="/company" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company#team" className="hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white mb-4 font-medium">Work</h4>
            <ul className="space-y-3 text-white/55">
              <li>
                <Link href="/work" className="hover:text-primary">
                  Selected work
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-white mb-4 font-medium">Legal</h4>
            <ul className="space-y-3 text-white/55">
              {footerlabels
                .filter((item) =>
                  ["/legal/terms", "/legal/privacy", "/legal/disclosures"].includes(
                    item.herf
                  )
                )
                .map((item) => (
                  <li key={item.herf}>
                    <Link href={item.herf} className="hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
            <p className="text-white/45 text-sm mt-6 leading-relaxed">
              hello@conveyor.finance
              <br />
              careers@conveyor.finance
            </p>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 text-white/40 text-sm">
          <p>© 2026 Conveyor Finance. All rights reserved.</p>
          <p>conveyor.finance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
