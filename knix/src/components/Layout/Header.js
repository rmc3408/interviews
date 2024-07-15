import React, { useContext } from 'react';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../../contexts/CartContext';
import { SideBarContext } from '../../contexts/SidebarContext';

const style = {
  screen: 'bg-pink-100 flex justify-between px-12 py-12',
  iconbox: 'text-2xl cursor-pointer flex relative max-w-[50px]',
  badge: 'bg-red-500 rounded-full absolute -right-2 bottom-2 md:-bottom-2 lg:-bottom-2 text-sm w-[20px] h-[20px] text-white flex justify-center items-center'

}
const Header = () => {
  const { toggleSidebar } = useContext(SideBarContext);
  const { totalItemsNumber } = useContext(CartContext)
  const displayBadge = totalItemsNumber === 0 ? ' hidden' : null

  return <div className={style.screen}>
    <div>Knix - Senior Web Developer Case Assessment</div>
    <div onClick={() => toggleSidebar()} className={style.iconbox}>
      <BsBag />
      <div className={style.badge + displayBadge}>{ totalItemsNumber }</div>
    </div>
    </div>;
};

export default Header;
