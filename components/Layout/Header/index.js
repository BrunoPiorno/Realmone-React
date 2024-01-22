import Link from "next/link";
import Logo from "/public/images/sitelogo.svg";
import { MainMenu } from "components/Layout/MainMenu";
import { MobileMenu } from "@/components/Parts/MobileMenu";

export const Header = (props) => {
  return (
    <header className="header">
      <Link className="navbar-brand" href="/">
        <Logo />
      </Link>

      

      <MainMenu menu={props.menu} />
      <MobileMenu />
    </header>
  );
};
