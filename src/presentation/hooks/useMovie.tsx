import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases/index';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {MovieDetail} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const [cast, setCast] = useState<Cast[]>();
  useEffect(() => {
    loadMovie(movieId);
  }, [movieId]);
  const loadMovie = async (id: number) => {
    setIsLoading(true);
    const moviePromise = UseCases.getMovieByIdUseCase(movieDBFetcher, id);
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, id);

    const [movie, casting] = await Promise.all([moviePromise, castPromise]);
    setMovieDetail(movie);
    setCast(casting);
    setIsLoading(false);
  };
  return {
    isLoading,
    movieDetail,
    cast,
  };
};
