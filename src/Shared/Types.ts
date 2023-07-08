// !Footer link
type footerLink = {
  name: string;
  link: string;
};

type footerItem = {
  heading?: string;
  links: footerLink[];
};

export type footerLinks = footerItem[];
