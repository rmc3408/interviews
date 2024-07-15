import React from 'react'
import CategoryItem from './CategoryItem'

const style = {
  screen: 'mx-auto flex flex-row justify-start items-start md:items-center pb-12',
  categoryNamed: 'pr-4 font-semibold text-xl',
  items: 'flex flex-col md:flex-row text-sm gap-[4px] cursor-pointer md:gap-[16px] ',
  hoverItem: "relative text-sm w-fit block after:block after:content-[''] " + 
    'after:absolute after:h-[2px] after:bg-pink-200 after:w-full after:scale-x-0 ' +
    'after:hover:scale-x-100 after:transition after:duration-300 after:origin-center',
  activeItem: ' font-bold'
}

const Category = ({ categories, selected, setCategory }) => {
  const activeNonCategory = selected === null ? style.activeItem : ''

  return (
    <section className={style.screen}>
      <div className={style.categoryNamed}>Categories</div>
      <div className={style.items}>
        <div onClick={() => setCategory(null)} className={style.hoverItem + activeNonCategory}>All items</div>
        {categories.map((category, index) => <CategoryItem key={index} category={category} setCategory={setCategory} selected={selected} />)}
      </div>
    </section>
  )
}

export default Category