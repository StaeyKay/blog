import {
  ChartColumnStacked,
  LayoutDashboard,
  Logs,
  UserPen,
} from "lucide-react";

const K = {
  NAVLINKS: [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "CATEGORIES",
      path: "/categories",
    },
    {
      name: "POLITICS",
      path: "/politics",
    },
    {
      name: "BUSINESS",
      path: "/business",
    },
    {
      name: "HEALTH",
      path: "/health",
    },
    {
      name: "DESIGN",
      path: "/design",
    },
    {
      name: "SPORT",
      path: "/sport",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ],

  DASHBOARDLINKS: [
    {
      icon: <LayoutDashboard />,
      name: "OVERVIEW",
      path: (userId) => `/dashboard/${userId}`,
    },
    {
      icon: <Logs />,
      name: "BLOGS",
      path: (userId) => `/dashboard/${userId}/blogs`,
    },
    {
      icon: <ChartColumnStacked />,
      name: "CATEGORIES",
      path: (userId) => `/dashboard/${userId}/categories`,
    },
    {
      icon: <UserPen />,
      name: "PROFILE",
      path: (userId) => `/dashboard/${userId}/profile`,
    },
  ],

  ARTICLES: [
    {
      title: "News Needs to Meet Its Audiences Where They Are",
      author: "Dave Rogers",
      category: "News",
      date: "Jun 14",
      readTime: "3 min",
    },
    {
      title: "News Needs to Meet Its Audiences Where They Are",
      author: "Dave Rogers",
      category: "News",
      date: "Jun 14",
      readTime: "3 min",
    },
    {
      title: "News Needs to Meet Its Audiences Where They Are",
      author: "Dave Rogers",
      category: "News",
      date: "Jun 14",
      readTime: "3 min",
    },
    {
      title: "News Needs to Meet Its Audiences Where They Are",
      author: "Dave Rogers",
      category: "News",
      date: "Jun 14",
      readTime: "3 min",
    },
  ],
};

export default K;
