import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases/index';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
  const [upcoming, setupcoming] = useState<Movie[]>([]);
  const [topRated, settopRated] = useState<Movie[]>([]);
  const [popular, setpopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  });

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);

    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);

    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);

    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        nowPlayingPromise,
        upcomingPromise,
        topRatedPromise,
        popularPromise,
      ]);
    setnowPlaying(nowPlayingMovies);
    setupcoming(upcomingMovies);
    settopRated(topRatedMovies);
    setpopular(popularMovies);

    setisLoading(false);
  };
  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular,
  };
};
