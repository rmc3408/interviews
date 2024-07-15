import React, { useContext } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { PRODUCTS_PATH } from '../../helpers/constants';

const style = {
  screen: 'flex gap-x-4 py-1 lg:px-4 border-b border-gray-200 w-full font-light text-gray-500',
  itemCard: 'w-full min-h-[150px] flex items-center gap-x-4',
  image: 'max-w-[80px]',
  cartBox: 'w-full flex flex-col',
  cartTitle: 'text-sm uppercase font-medium',
  cardSubItemsBox: 'flex justify-between mb-2',
  subItemsQuantityBox: 'flex flex-1 max-w-[100px] items-center justify-around h-full text-primary font-medium border',
  subItemsAmount: 'cursor-pointer',
  subItemsPrice: 'text-xs flex justify-center items-center text-gray-500',
  subItemsTotal: 'text-sm flex justify-center items-center font-semibold',
}

const Cart = ({ item }) => {
  const { modifyQuantity } = useContext(CartContext);
  const { id, title, price, image, amount } = item;

  const modifyCart = (operation) => {
    modifyQuantity(id, operation)
  }

  return <div className={style.screen}>
    <div className={style.itemCard}>
      <Link to={`${PRODUCTS_PATH}/${id}`}>
        <img src={image} alt={title} className={style.image} />
      </Link>
      <div className={style.cartBox}>
        <Link to={`${PRODUCTS_PATH}/${id}`}>
          <div className={style.cartTitle}>{title}</div>
        </Link>
        <div className={style.cardSubItemsBox}>
          <div className={style.subItemsQuantityBox}>
            <div className={style.subItemsAmount} onClick={() => modifyCart('remove')}><IoMdRemove /></div>
            <div>{amount}</div>
            <div className={style.subItemsAmount} onClick={() => modifyCart('add')}><IoMdAdd /></div>
          </div>
          <div className={style.subItemsPrice}>Price: $ {price.toFixed(2)}</div>
          <div className={style.subItemsTotal}>Total: ${(price * amount).toFixed(2)}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default Cart;
