import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {GeneralMoviesResponse} from '../../../infrastructure/interfaces/movies-db-general.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<GeneralMoviesResponse>('/upcoming');

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching upcoming movies');
  }
};
