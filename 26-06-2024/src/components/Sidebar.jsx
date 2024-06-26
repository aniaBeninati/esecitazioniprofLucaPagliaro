import React from "react";
import "./SideBar.css"; 
function Sidebar({ menuItems }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                {item.label}
                {item.count && <span className="badge">{item.count}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
