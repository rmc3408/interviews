import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { TbEyeShare } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { PRODUCTS_PATH } from '../../helpers/constants';

const style = {
  cardBorder: 'border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition',
  cardContainer: 'w-full h-full flex justify-content items-center',
  imageContainer: 'w-[200px] mx-auto flex justify-center items-center',
  image: 'max-h-[160px] group-hover:scale-110 trasition duration-300',
  buttonContainer: 'absolute bottom-3 right-3 flex gap-[8px]',
  button: 'bg-red-200 px-3 py-1 rounded-full hover:text-red-700',
  title: 'font-semibold mb-1',
  category: 'text-sm capitalize text-gray-500'
}

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const { id, title, price, image, category } = product;

  return <div>
    <div className={style.cardBorder}>
      <div className={style.cardContainer}>
        <div className={style.imageContainer}>
          <img src={image} alt={title} className={style.image} />
        </div>
      </div>
      <div className={style.buttonContainer}>
        <p className={style.button} onClick={() => addToCart(id, product)}><IoCartOutline /></p>
        <p className={style.button}><Link to={`${PRODUCTS_PATH}/${id}`}><TbEyeShare /></Link></p>
      </div>
    </div>
    <div>
      <div className={style.category}>{category}</div>
      <div><h2 className={style.title}>{title}</h2></div>
      <div>$ {price.toFixed(2)}</div>
    </div>
  </div>;
};

export default Product;
