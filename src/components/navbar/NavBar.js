import * as React from "react";
import Logo from "./logo/logo.png";

function ResponsiveAppBar() {
  return (
    <nav>
      <div>
        <img src={Logo} alt="logo" style={{ height: "35px", margin: "auto" }} />
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;
