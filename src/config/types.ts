import { Theme } from "@mui/material";
import { ReactNode } from "react";

export type Mode = "dark" | "light";

export type ColorModeContextType = {
  toggleMode: () => void;
  theme: Theme;
  colors: any;
  mode: Mode;
  isDarkMode: boolean;
  isLightMode: boolean;
};

export type Link = {
  url: string;
  text: string;
  icon: ReactNode;
  iconActive: ReactNode;
};

export type SidebarLink = {
  title?: string;
  links: Link[];
};
