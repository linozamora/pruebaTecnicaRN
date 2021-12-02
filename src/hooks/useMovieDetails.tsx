import { useState, useEffect } from 'react';
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterfaces";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState ] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    
    const getMovieDetails = async() => {
        //const resp = await movieDB.get<MovieFull>(`/${ movieId }`);
        //console.log(resp.data.overview);
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${ movieId }`);
        const castPromise = movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

        const [ movieDetailsResponse, castPromiseResponse ] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castPromiseResponse.data.cast
            
        })
    }
    useEffect(() => {
        getMovieDetails();
    }, []);
    return {
        ...state
    }

}