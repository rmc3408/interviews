import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  screen: "grid min-h-full place-items-center bg-white px-6 py-32 sm:py-32 lg:px-8",
  center: "text-center",
  status: "text-base font-semibold text-pink-600",
  mainMessage: "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",
  subMessage: "mt-6 text-base leading-7 text-gray-600",
  btnGroup: "mt-10 flex items-center justify-center gap-x-6",
  backButton: "rounded-md bg-pink-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-800"
}

function NotFound() {
  return (
    <main className={style.screen}>
      <div className={style.center}>
        <p className={style.status}>404</p>
        <h1 className={style.mainMessage}>Page not found</h1>
        <p className={style.subMessage}>Sorry, we couldn’t find the page you’re looking for.</p>
        <div className={style.btnGroup}>
          <Link to="/" className={style.backButton}>Go back home</Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound