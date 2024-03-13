import { fontSaira, fontSairaCondensed } from "@/config/fonts";
import clsx from "clsx";
import { tv } from "tailwind-variants";

export const title = tv({
  base: clsx(
    "tracking-tight inline font-semibold",
    fontSairaCondensed.className,
  ),
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      white: "text-white",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
      lgXX: "text-[120px] font-black",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: clsx("w-full md:w-1/2 my-2 block max-w-full", fontSaira.className),
  variants: {
    size: {
      lg: "text-[32px] font-regular",
    },
    fullWidth: {
      true: "!w-full",
    },
    color: {
      white: "text-white",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
