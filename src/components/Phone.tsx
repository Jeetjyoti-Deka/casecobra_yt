import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        className="pointer-events-none select-none z-50"
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone"
        width={896}
        height={1831}
      />

      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover min-h-full min-w-full"
          src={imgSrc}
          alt="image"
          width={896}
          height={1831}
        />
      </div>
    </div>
  );
};
export default Phone;
