import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {GeneralMoviesResponse} from '../../../infrastructure/interfaces/movies-db-general.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<GeneralMoviesResponse>('/top_rated');

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching top rated movies');
  }
};
