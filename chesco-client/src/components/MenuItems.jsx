import Dropdown from './Dropdown';
import {useEffect, useRef, useState} from "react";
import { Link } from 'react-router-dom';


const MenuItems = ({ items }) => {
   const [dropdown, setDropdown] = useState(false);
   useEffect(() => {
 const handler = (event) => {
  if (dropdown && ref.current && !ref.current.contains(event.target)) {
   setDropdown(false);
  }
 };
 document.addEventListener("mousedown", handler);
 document.addEventListener("touchstart", handler);
 return () => {
  // Cleanup the event listener
  document.removeEventListener("mousedown", handler);
  document.removeEventListener("touchstart", handler);
 };
}, [dropdown]);


   let ref = useRef();


   const onMouseEnter = () => {
 setDropdown(true);
};

const onMouseLeave = () => {
 setDropdown(false);
};

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };




  return (
    <li className="menu-items" ref={ref}
    onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}>



        {items.url && items.submenu ? (
        <>

          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => toggleDropdown()}>
            <Link to={items.url}>{items.title}</Link>
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            {items.title}

          </button>
          <Dropdown

            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );

};

export default MenuItems;