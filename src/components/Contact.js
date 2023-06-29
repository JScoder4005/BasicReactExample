import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contact us</h2>
      <table className="table">
        <tr>
          <td width={200}>
            <ul>
              <li>
                {" "}
                <Link to="Noida"> Noida </Link>
              </li>
              <li>
                {" "}
                <Link to="Mumbai"> Mumbai </Link>
              </li>
              <li>
                {" "}
                <Link to="Bengaluru"> Bengaluru </Link>
              </li>
            </ul>
          </td>
          <td>
            <Outlet />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Contact;
