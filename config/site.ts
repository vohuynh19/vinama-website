export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "TRANG CHỦ",
      href: "/",
    },
    {
      label: "GIỚI THIỆU VINAMATECH",
      href: "/intro",
    },
    {
      label: "DỰ ÁN ĐÃ THỰC HIỆN",
      href: "/news",
    },
    {
      label: "DỊCH VỤ CUNG CẤP",
      href: "/services",
    },
    {
      label: "LIÊN HỆ",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
