import React from 'react';
import "../Scss/Navbar.scss"

const Navbar = () => {

  const navSections = [
    { title: "BROWSE", icon: "bars"},
    { title: "ADD NEW QUESTIONS", icon: "plus"},
    { title: "API", icon: "gears"},
    { title: "DISCUSS", icon: "comments"},
    { title: "LOGIN", icon: "sign-in"},
   
];
  return (
    <div className="navbar-container">
      <ul>
        {navSections.map((nv, i)=>(
          <li key={i}>
            <a href="#">
              <i className={`fa fa-${nv.icon}`}></i>
              {nv.title}</a>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;