import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div>
    {false ? (
        <Carousel />
    ) : (
        <center>
            <h1 style={{
                transform: "translateY(50%)",
                color: "#606060",
                fontWeight: "100"
            }}>
                Página web temporalmente fuera de servicio.
            </h1>
        </center>
    )}
  </div>
);

render(<App />, document.getElementById("root"));
