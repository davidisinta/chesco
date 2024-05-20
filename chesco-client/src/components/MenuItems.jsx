import Dropdown from './Dropdown';
import { useState } from "react";


const MenuItems = ({ items }) => {
   const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu"
           onClick={() => setDropdown((prev) => !prev)}
                  aria-expanded={dropdown ? "true" : "false"}>
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu}
           dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>

  );
};

export default MenuItems;