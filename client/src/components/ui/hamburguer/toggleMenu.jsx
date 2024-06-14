import "./toggleMenu.css"
import { useState } from "react";

const BurgerMenu = ({ toggle }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    toggle(); 
  };

  return (
    <div className="">

      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={checked}
          onChange={handleChange}
          
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    );
};

export default BurgerMenu;
