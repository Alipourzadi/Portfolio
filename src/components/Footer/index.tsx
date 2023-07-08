import FooterLayout from "../Layout/FooterLayout";
import CopyRight from "./CopyRight";
import FooterLinks from "./FooterLinks";

export default function index() {
  return (
    <FooterLayout>
      <FooterLinks />
      <CopyRight />
    </FooterLayout>
  );
}
