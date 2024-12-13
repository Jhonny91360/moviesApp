import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases/index';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {MovieDetail} from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  useEffect(() => {
    loadMovie(movieId);
  }, [movieId]);
  const loadMovie = async (id: number) => {
    setIsLoading(true);
    const movie = await UseCases.getMovieByIdUseCase(movieDBFetcher, id);
    setMovieDetail(movie);
    setIsLoading(false);
  };
  return {
    isLoading,
    movieDetail,
  };
};
