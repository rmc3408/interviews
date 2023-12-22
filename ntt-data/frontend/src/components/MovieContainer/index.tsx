import React from 'react'
import './container.scss';
import { Button, RatingIndicator } from '@ui5/webcomponents-react';
import { useGetMovieByTitleQuery } from '../../store/slices/movie.slice';
import { RootState } from '../../store/storeHooks';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { toggle } from '../../store/slices/fav.slice'
import Loader from '../Loading';


interface MovieContainerProps {
  name: string
}
function MovieContainer({ name }: MovieContainerProps) {
  const favState = useAppSelector((state: RootState) => state.favorites)
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetMovieByTitleQuery(name)

  if (isLoading) return <Loader />
  const { Title, Plot, Actors, imdbRating, Poster } = data
  const favoriteMovie = favState.find((item: any) => item.title === Title)

  return (
    <div className="container">
      <div className='box'>
        <div className='description-box'>
          <h1>{Title}</h1>
          <p>{Plot}</p>
          <h4>Actors: {Actors}</h4>
          <span>Reviews <RatingIndicator readonly value={imdbRating} /></span>
          <div>
            <Button
              onClick={() => dispatch(toggle(Title))}
              iconEnd
              className='button'
              icon={favoriteMovie?.favorite ? "heart" : "heart-2"}
            >Favorite</Button>
          </div>
        </div>
        <div className='image-box'><img src={Poster} alt={Title} /></div></div>
    </div>
  )
}

export default MovieContainer
