"use client";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const HeaderLink: React.FC<{
  item: HeaderItem;
  activeHash: string;
  setActiveHash: (hash: string) => void;
}> = ({ item, activeHash, setActiveHash }) => {
  const path = usePathname();

  useEffect(() => {
    setActiveHash(window.location.hash);
  }, [path, setActiveHash]);

  const handleLinkClick = (href: string) => {
    if (href.includes("#")) {
      const hash = "#" + href.split("#")[1];
      setActiveHash(hash);
    } else {
      setActiveHash("");
    }
  };

  const pathName = path ?? "";

  const pathMatches = (href: string) => {
    if (href.startsWith("http")) return false;
    const base = href.split("#")[0];
    if (base === "/blog") {
      return pathName === "/blog" || pathName.startsWith("/blog/");
    }
    return pathName === base;
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathName === "/" && activeHash === href.replace("/", "");
    }
    if (href.includes("#")) {
      const [pathname, hash] = href.split("#");
      return pathName === pathname && activeHash === `#${hash}`;
    }
    return pathMatches(href);
  };

  const isParentActive =
    pathMatches(item.href) ||
    Boolean(item.submenu?.some((subItem) => pathMatches(subItem.href)));

  return (
    <div className="relative group">
      <Link
        href={item.href}
        onClick={() => handleLinkClick(item.href)}
        className={`text-17 relative flex whitespace-nowrap font-medium transition-all duration-300 hover:text-primary capitalized ${
          isParentActive ? "text-primary" : "text-muted"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {item.submenu ? (
        <div className="absolute z-50 left-0 top-full pt-3 hidden group-hover:block">
          <div className="w-56 py-2 rounded-xl border border-white/20 bg-[#111816] shadow-[0_16px_48px_rgba(0,0,0,0.65)]">
            {item.submenu.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                target={subItem.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  subItem.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() => handleLinkClick(subItem.href)}
                className={`block mx-1 rounded-lg px-4 py-2.5 text-[15px] font-medium transition-colors ${
                  isActive(subItem.href)
                    ? "bg-primary/15 text-primary"
                    : "text-white hover:bg-primary/15 hover:text-primary"
                }`}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderLink;
