import React from "react";
import "./PageChange.css";

const PageChange = () => {
  return (
    <>
     <nav className="pageChange">
  <ul className="pageChange__list">
    <li>
      <button className="pageChange__link">Anterior</button>
    </li>

    <li>
      <button className="pageChange__link">Siguiente</button>
    </li>
  </ul>
</nav>
    </>
  );
};

export default PageChange;
