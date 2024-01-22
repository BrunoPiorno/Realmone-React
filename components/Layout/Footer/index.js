import Link from "next/link";
import Logo from "/public/images/sitelogo.svg";
import { useRouter } from "next/router";

import { PageContext } from "context/page";
import { useContext } from "react";
import { FooterMenuItem } from "./FooterMenuItem";

export const Footer = (props) => {
  const { options } = useContext(PageContext);
  let menuItems = options.menu;
  let router = useRouter();

  return (
    <footer>
      <a className="footer-brand" href="https://bracketmedia.com/" rel="home">
        <Logo />
      </a>
      <ul id="bracketfooternav" className="foonav">
        {menuItems != null &&
          menuItems.map((item, key) => (
            <FooterMenuItem item={item}  key={key} />  
          ))}
      </ul>
    </footer>
  );
};
