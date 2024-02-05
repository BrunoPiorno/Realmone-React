import Logo from "/public/images/sitelogo.svg";
import { MainMenu } from "/components/Layout/MainMenu";

export const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="site-navbar">
          <div className="row">
              <div className="site-logo">
                  <Logo />
              </div>
              <MainMenu menu={props.menu} />
          </div>
        </div>
      </div>
    </header>
  );
};
