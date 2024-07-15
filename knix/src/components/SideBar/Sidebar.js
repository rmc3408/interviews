import React, { useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from '../../contexts/CartContext';
import { SideBarContext } from '../../contexts/SidebarContext';
import Card from '../Cart/Cart';

const style = {
  screen: 'w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-auto',
  bagContainer: 'flex items-center justify-between py-6 border-b',
  itemsContainer: 'flex flex-col h-[80vh] w-full overflow-y-auto overflow-x-hidden border-b',
  bagText: 'uppercase text-sm font-semibold',
  bagArrow: 'cursor-pointer w-8 h-8 flex justify-center items-center',
  clearCart: 'cursor-pointer py-4 bg-red-400 text-white w-12 h-12 flex justify-center items-center text-xl rounded-full',
  groupFooter: 'flex w-full justify-between items-center py-4 mt-4'
}

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useContext(SideBarContext)
  const { cart, cleanCart, totalItemsNumber, totalItemsPrice } = useContext(CartContext)
  const openCondition = isOpen ? ' right-0' : ' -right-full'

  return <div className={style.screen + openCondition}>
    <div className={style.bagContainer}>
      <div className={style.bagText}>Shopping Cart ({totalItemsNumber})</div>
      <div className={style.bagArrow} onClick={() => toggleSidebar()}><IoMdArrowForward /></div>
    </div>
    <div className={style.itemsContainer}>
      { cart.map(item => <Card key={item.id} item={item} />)}
    </div>
    <div className={style.groupFooter}>
      <div>Total to Pay: ${totalItemsPrice.toFixed(2)}</div>
      <div className={style.clearCart} onClick={() => cleanCart()}><FiTrash2 /></div>
    </div>

  </div>;
};

export default Sidebar;
