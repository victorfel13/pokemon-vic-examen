import React from "react";
import "./PageChange.css";

const PageChange = ({ nowPage, setNowPage, totalItems, itemsPerPage }) => {
  return (
    <nav className="pageChange">
      <ul className="pageChange__list">
        <li className="paige-button__container">
          <button
            className="pageChange__link"
            onClick={() => setNowPage(prev => Math.max(prev - 1, 0))}
            disabled={nowPage === 0} // usar ahora nowPage
          >
            Anterior
          </button>
        </li>

        <li className="paige-button__container">
          <button
            className="pageChange__link"
            onClick={() =>
              setNowPage(prev =>
                (prev + 1) * itemsPerPage < totalItems ? prev + 1 : prev
              )
            }
            disabled={(nowPage + 1) * itemsPerPage >= totalItems} // ahora nowPage
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PageChange;