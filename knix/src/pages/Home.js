import React, { useContext, useState } from 'react';
import Category from '../components/Home/Category';
import Product from '../components/Home/Product';
import { ProductContext } from '../contexts/ProductContext';
import Dropdown from '../shared/dropdown';
import LoadingSpinner from '../shared/LoadingSpinner';
import { DROPDOWN_SORT } from '../helpers/constants';

const style = {
  cardContainer: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]' +
    ' max-w-sm mx-auto md:max-w-none md:mx-0',
  screen: 'py-16',
  groupContainers: 'container mx-auto',
  groupdrowpdown: 'flex flex-col'
}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { products, categories, setSort, sort } = useContext(ProductContext);

  if (products.length === 0) return <LoadingSpinner />
  
  let filteredProducts = products
  if (selectedCategory) {
    filteredProducts = products.filter(item => item.category === selectedCategory)
  }

  return <div>
    <section className={style.screen}>
      <div className={style.groupContainers}>
        
        <Category setCategory={setSelectedCategory} categories={categories} selected={selectedCategory} />
        <Dropdown label='Sort Products' setFn={setSort} options={DROPDOWN_SORT} value={sort} />
        <div className={style.cardContainer}>
          {filteredProducts.map(product => <Product key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
