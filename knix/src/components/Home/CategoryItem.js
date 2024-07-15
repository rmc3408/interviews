import React from 'react'

const style = {
  hoverItem: "relative text-sm w-fit block after:block after:content-[''] " +
    'after:absolute after:h-[2px] after:bg-pink-200 after:w-full after:scale-x-0 ' +
    'after:hover:scale-x-100 after:transition after:duration-300 after:origin-center',
  activeItem: ' font-bold'
}

const CategoryItem = ({ selected, setCategory, category }) => {
  const active = selected === category ? style.activeItem : ''

  return <div onClick={() => setCategory(category)} className={style.hoverItem + active}>
          {category}
        </div>
}

export default CategoryItem;