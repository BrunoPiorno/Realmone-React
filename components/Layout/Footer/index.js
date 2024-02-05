import Link from "next/link";
import Logo from "/public/images/sitelogo.svg";
import { useRouter } from "next/router";

import { PageContext } from "/context/page";
import { useContext } from "react";
import { FooterMenuItem } from "./FooterMenuItem";

export const Footer = (props) => {
  const { options } = useContext(PageContext);
  let menuItems = options.menu;
  let router = useRouter();

  return (
    <footer className="section-footer section-nine">
        <div className="container">

            <div className="section-footer__row">
                <div className="section-footer__brand">
                    <Logo className="section-footer__logo"/>
                    <div className="section-title">
                        <span className="text-highlight">Force</span> <br />Multiplied
                    </div>
                </div>
                <div className="section-footer__copy">
                    <div className="section-text">Copyright © 2024 RealmOne <br />All rights reserved.</div>
                </div>
            </div>

        </div>
    </footer>
  );
};
