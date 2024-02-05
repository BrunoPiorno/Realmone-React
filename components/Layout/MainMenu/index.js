import { PageContext } from "/context/page";
import { useContext } from "react";
import { MenuItem } from "./MenuItem";

export const MainMenu = (props) => {
  const { options } = useContext(PageContext);
  let menuItems = options.menu;

  return (
    <div className="site-nav">
        <a href="#contact" className="button button--nav"><span>Contact</span></a>
    </div>
  );
};
