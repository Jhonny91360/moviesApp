import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {GeneralMoviesResponse} from '../../../infrastructure/interfaces/movies-db-general.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<GeneralMoviesResponse>('/popular');

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching popular movies');
  }
};
