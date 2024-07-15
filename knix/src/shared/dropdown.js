import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const style = {
  screen: "dropdown relative mb-2 text-end",
  button: "bg-pink-100 text-gray-700 font-semibold gap-2 py-2 px-8 rounded inline-flex items-center",
  itemsGroup: "dropdown-menu absolute top-9 right-0 hidden text-gray-400 pt-1 z-10",
  itemLink: "flex gap-[4px] hover:text-gray-700 py-2 px-11 block whitespace-no-wrap bg-gray-50"
}

const Dropdown = ({ label, value, setFn, options }) => {
  return (
    <div className={style.screen}>
      <button className={style.button}>
        {label}
        <IoIosArrowDown />
      </button>
      <ul className={style.itemsGroup}>
        {options.map((option) => <li key={option.key} onClick={() => setFn(option.key)}>
          <span className={style.itemLink}>
            <span>{value === option.key ? <FaCheck /> : null}</span>
            {option.value}
          </span>
        </li>)}
      </ul>
    </div>
  )
}

export default Dropdown