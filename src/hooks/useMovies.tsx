import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterfaces';

export const useMovies = () => {
  
    const [isLoading, setIsLoading] = useState(true);

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    //const peliculas = resp.data.results
    setPeliculasEnCine(resp.data.results);

    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return {
    peliculasEnCine, isLoading
  };
};
