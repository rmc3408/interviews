import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import NotFound from './NotFound';

const style = {
  screen: 'pt-32 pb-12 lg:py-32 h-screen flex items-center',
  notfoundScreen: 'h-screen flex justify-center items-center',
  container: 'container mx-auto',
  blocks: 'flex flex-col lg:flex-row items-center mb-8',
  imageBlock: 'flex flex-1 justify-center items-center mb-8 lg:mb-0',
  image: 'max-w-[200px] lg:max-w-sm',
  textBlock: 'flex flex-col flex-1 text-center lg:text-left',
  textTitle: 'text-[26px] mb-2 max-w-[450px] font-medium',
  textPrice: 'text-xl text-red-500 font-semibold mb-8',
  buttonBack: 'bg-primary text-right py-4 px-12 mt-8 text-white w-fit rounded mx-auto'
}

const ProductDetails = () => {
  const { id } = useParams()
  const { products } = useContext(ProductContext)

  const foundProduct = products.find(item => item.id === parseInt(id)) || {};

  if (!foundProduct) return <NotFound />

  const { image, title, price, description } = foundProduct;

  return <section className={style.screen}>
    <div className={style.container}>
      <div className={style.blocks}>
        <div className={style.imageBlock}>
          <img src={image} alt={title} className={style.image} />
        </div>
        <div className={style.textBlock}>
          <div className={style.textTitle}>{title}</div>
          <div className={style.textPrice}>$ {price.toFixed(2)}</div>
          <p>{description}</p>
          <Link to='/' className={style.buttonBack}>Back to Home</Link>
        </div>
        
      </div>
    </div>
  </section>;
};

export default ProductDetails;
