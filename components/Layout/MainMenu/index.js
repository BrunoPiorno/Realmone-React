import { PageContext } from "context/page";
import { useContext } from "react";
import { MenuItem } from "./MenuItem";

export const MainMenu = (props) => {
  const { options } = useContext(PageContext);
  let menuItems = options.menu;

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {menuItems != null &&
          menuItems.map((item, key) => <MenuItem item={item} key={key} />)}
      </ul>
    </nav>
  );
};
