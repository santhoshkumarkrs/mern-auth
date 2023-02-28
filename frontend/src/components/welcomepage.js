import React from "react";
import "../components/welcomepage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import cia from "../img/welcome.jpg";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <img src={cia} className="img" alt="can't load" />
      <div>
        {/* <h1 className="content">Welcome To The M.G Public school Home Page</h1> */}
      </div>
      <Link to="/" className="back">
        back
      </Link>
    </div>
  );
}
export default Welcome;
