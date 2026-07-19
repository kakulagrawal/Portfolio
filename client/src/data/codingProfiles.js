import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
} from "react-icons/si";

const codingProfiles = [
  {
    id: 1,
    title: "LeetCode",
    username: "Kakul Agrawal",
    description:
      "Sharpening problem-solving skills through consistent DSA practice.",
    icon: SiLeetcode,
    color: "text-yellow-400",
    border: "hover:border-yellow-400/60",
    glow: "hover:shadow-yellow-400/30",
    button:
      "bg-yellow-400/10 hover:bg-yellow-400 text-yellow-400 hover:text-black",
    url: "https://leetcode.com/u/KakulAgrawal/",
  },
  {
    id: 2,
    title: "GitHub",
    username: "Kakul Agrawal",
    description:
      "Building scalable full-stack applications and open-source projects.",
    icon: FaGithub,
    color: "text-white",
    border: "hover:border-white/60",
    glow: "hover:shadow-white/20",
    button:
      "bg-white/10 hover:bg-white text-white hover:text-black",
    url: "https://github.com/kakulagrawal",
  },
  {
    id: 3,
    title: "GeeksforGeeks",
    username: "Kakul Agrawal",
    description:
      "Practicing data structures, algorithms, and interview questions.",
    icon: SiGeeksforgeeks,
    color: "text-green-400",
    border: "hover:border-green-400/60",
    glow: "hover:shadow-green-400/30",
    button:
      "bg-green-400/10 hover:bg-green-400 text-green-400 hover:text-black",
    url: "https://www.geeksforgeeks.org/profile/kakulagrcs4i",
  },
  {
    id: 4,
    title: "LinkedIn",
    username: "Kakul Agrawal",
    description:
      "Let's connect and grow together professionally.",
    icon: FaLinkedin,
    color: "text-blue-400",
    border: "hover:border-blue-400/60",
    glow: "hover:shadow-blue-400/30",
    button:
      "bg-blue-400/10 hover:bg-blue-400 text-blue-400 hover:text-black",
    url: "https://www.linkedin.com/in/kakul-agrawal-a379b3191/",
  },
  {
    id: 5,
    title: "CodeChef",
    username: "Kakul Agrawal",
    description:
      "Competitive programming and algorithmic problem solving.",
    icon: SiCodechef,
    color: "text-orange-400",
    border: "hover:border-orange-400/60",
    glow: "hover:shadow-orange-400/30",
    button:
      "bg-orange-400/10 hover:bg-orange-400 text-orange-400 hover:text-black",
    url: "https://www.codechef.com/users/codedude_02",
  },
];

export default codingProfiles;