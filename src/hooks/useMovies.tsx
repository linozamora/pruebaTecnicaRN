import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
      nowPlaying: [],
      popular: [],
      topRated: [],
      upComing: [],
    });

  const getMovies = async () => {

    const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upComing = movieDB.get<MovieDBMoviesResponse>('/upcoming');
    
    const resps = await Promise.all([nowPlayingPromise, popularPromise ,topRatedPromise , upComing]);

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upComing: resps[3].data.results,
    })

    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...moviesState,
    isLoading  
  };
};
