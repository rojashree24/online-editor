import React from "react";
// import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      {/* <Container fluid className="footer">
        Copywrite © {year} 
      </Container> */}
    </div>
  );
}

export default Footer;