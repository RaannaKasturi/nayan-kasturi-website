import {
  AtSignIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  X,
  YoutubeIcon,
} from "lucide-react";

export const navigationItems = [
  {
    label: "Features",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    link: "https://github.com/RaannaKasturi",
    icon: <GithubIcon className="size-5" />,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/raannakasturi",
    icon: <LinkedinIcon className="size-5" />,
  },
  {
    label: "Email",
    link: "mailto:raannakasturi@gmail.com",
    icon: <AtSignIcon className="size-5" />,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/raannakasturi",
    icon: <InstagramIcon className="size-5" />,
  },
  {
    label: "Youtube",
    link: "https://www.youtube.com/@RaannaKasturi?sub_confirmation=1",
    icon: <YoutubeIcon className="size-5" />,
  },
  {
    label: "Twitter",
    link: "",
    icon: <X className="size-5" />,
  },
];
