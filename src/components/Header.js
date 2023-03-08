import React from "react";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <div className="header__section">
      <h4 className="header__section--title">
        POMODORO
      </h4>
      <SocialLinks />
    </div>
  );
};

export default Header;
