import React from "react";
import "./Models.css";

const App = () => {
  return (
    <div className="Model">
      <a href="../.././assets/isabella Roberts.jpg">Isabella Roberts</a>
      <h1 className="Name">Isabella Roberts</h1>
      <h3 className="city">Mexico, Missouri</h3>
      <p description>
        "Isabella's ethereal beauty and graceful charm make her a favorite in
        the fashion industry. Her unique sense of style and ability to evoke
        emotions through her expressions make her an exceptional model."
      </p>
      <div class="rating">
        <span class="star" data-rating="1"></span>
        <span class="star" data-rating="2"></span>
        <span class="star" data-rating="3"></span>
        <span class="star" data-rating="4"></span>
        <span class="star" data-rating="5"></span>
      </div>
    </div>
  );
};

export default App;
