import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 shrink-0"
      aria-label="Conveyor Finance home"
    >
      <Image
        src="/images/logo/icon.png"
        alt=""
        width={128}
        height={128}
        className="h-16 w-16 md:h-20 md:w-20"
        quality={100}
        priority
      />
      <span className="text-white text-lg md:text-xl font-medium tracking-tight leading-tight">
        Conveyor Finance
      </span>
    </Link>
  );
};

export default Logo;
