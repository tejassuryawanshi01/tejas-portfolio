import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

import { SiKaggle, SiGeeksforgeeks } from "react-icons/si";

import profile from "./profile";

const socials = [
  {
    id: "github",
    label: "GitHub",
    icon: FaGithub,
    url: profile.social.github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedin,
    url: profile.social.linkedin,
  },
  {
    id: "email",
    label: "Email",
    icon: FaEnvelope,
    url: `mailto:${profile.email}`,
  },
  {
    id: "resume",
    label: "Resume",
    icon: FaFileAlt,
    url: profile.resume,
  },
  {
    id: "kaggle",
    label: "Kaggle",
    icon: SiKaggle,
    url: profile.social.kaggle,
  },
  {
    id: "gfg",
    label: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    url: profile.social.gfg,
  },
];

export default socials;
