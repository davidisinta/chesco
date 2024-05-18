import { menuItemsData } from '../menuItemsData';

const Navbar = () => {
    console.log(menuItemsData)
  return (
    <div className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => (
          <li className="menu-items" key={index}>
            <a href={menu.url}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
