import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import axios from 'axios';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios.get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          console.log(res);
          setMovieList(movieList);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <BrowserRouter>
        <Route exact path="/" render={(props) => {
          return <MovieList movieList={movieList}/>
        }}/>
        <Route path="/movie/:id" render={(props) => {
          return <Movie />
        }}/>
      </BrowserRouter>
    </div>
  );
}
