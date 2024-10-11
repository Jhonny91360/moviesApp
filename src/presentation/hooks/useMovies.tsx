import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases/index';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  });

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
  };
  return {};
};