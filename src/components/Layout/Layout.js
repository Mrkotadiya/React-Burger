import React from "react";
import Aux from "../../hoc/Aux1";
import  './Layout.css'

const layout = (props) => {
  return (
    <Aux>
      <div className="Content">Toolbar, SideDrawer, Backdrop</div>
      <main >{props.children}</main>
    </Aux>
  );
};

export default layout;
