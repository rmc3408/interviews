import React from 'react'

const style = {
  screen: "h-[80vh] w-full flex flex-1 justify-center items-center",
  spinner: "border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-pink-600",
}

const LoadingSpinner = () => {
  return <div className={style.screen}>
    <div className={style.spinner}/>
  </div>
}

export default LoadingSpinner