import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDetailResponse} from '../../../infrastructure/interfaces/movies-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MovieDetail} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<MovieDetail> => {
  try {
    const movieDetail = await fetcher.get<MovieDetailResponse>(`/${movieId}`);

    return MovieMapper.fromMovieDBDetailToEntity(movieDetail);
  } catch (error) {
    throw new Error('Error fetching movie by id');
  }
};
