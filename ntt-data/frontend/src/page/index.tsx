import React, { useState } from 'react'
import './page.scss';
import Layout from './Layout';
import HeaderTitle from '../components/Title';
import InputAutocomplete from '../components/Input';
import MovieContainer from '../components/MovieContainer';


function Home() {
  const [ movieName, setMovieName ] = useState<string>('')

  return (
    <Layout>
        <HeaderTitle />
        <InputAutocomplete setMovieName={setMovieName} />

        { movieName && <MovieContainer name={movieName} /> }
    </Layout>
  )
}

export default Home