export const navbarItems = [
  {
    name: "صفحه اصلی",
    path: "/",
  },
  {
    name: "وبلاگ",
    path: "/",
  },
  {
    name: "پروژه ها",
    path: "/",
  },
  {
    name: "درباره من",
    path: "/",
  },
  {
    name: "ارتباط با من",
    path: "/",
  },
];

export const toggeldMenuLink = [
  {
    name: "حساب کاربری",
    path: "/",
  },
];

export const toggeldMenuSessions = Array.from({length: 7}, (_, idx) => ({
  name: `جلسه ${idx + 1}  `,
  path: `/blog/post-detail/${idx + 3}`,
}));
