import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupIcon from "@mui/icons-material/Group";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Map from "@mui/icons-material/Map";
import { SidebarLink } from "../config/types";
import {
  BarChart,
  BarChartOutlined,
  CalendarMonth,
  CalendarMonthOutlined,
  LiveHelp,
  LiveHelpOutlined,
  PieChart,
  PieChartOutline,
  Timeline,
  TimelineOutlined,
} from "@mui/icons-material";

export const sidebarLinks: SidebarLink[] = [
  {
    // title: "Page",
    links: [
      {
        url: "/",
        text: "Dashboard",
        icon: <DashboardOutlinedIcon />,
        iconActive: <DashboardIcon />,
      },
      {
        url: "/colors",
        text: "Colors",
        icon: <DashboardOutlinedIcon />,
        iconActive: <DashboardIcon />,
      },
    ],
  },
  {
    title: "Data",
    links: [
      {
        url: "/team",
        text: "Manage Team",
        icon: <GroupOutlinedIcon />,
        iconActive: <GroupIcon />,
      },
      {
        url: "/contacts",
        text: "Contacts Information",
        icon: <PermContactCalendarOutlinedIcon />,
        iconActive: <PermContactCalendarIcon />,
      },
      {
        url: "/invoices",
        text: "Invoices Balances",
        icon: <ReceiptOutlined />,
        iconActive: <ReceiptIcon />,
      },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        url: "#",
        text: "Profile Form",
        icon: <PersonOutlineOutlinedIcon />,
        iconActive: <PersonIcon />,
      },
      {
        url: "#",
        text: "Calendar",
        icon: <CalendarMonthOutlined />,
        iconActive: <CalendarMonth />,
      },
      {
        url: "#",
        text: "FAQ Page",
        icon: <LiveHelpOutlined />,
        iconActive: <LiveHelp />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        url: "#",
        text: "Bar Chart",
        icon: <BarChartOutlined />,
        iconActive: <BarChart />,
      },
      {
        url: "#",
        text: "Pie Chart",
        icon: <PieChartOutline />,
        iconActive: <PieChart />,
      },
      {
        url: "#",
        text: "Line Chart",
        icon: <TimelineOutlined />,
        iconActive: <Timeline />,
      },
      {
        url: "#",
        text: "Geography Chart",
        icon: <MapOutlinedIcon />,
        iconActive: <Map />,
      },
    ],
  },
];
