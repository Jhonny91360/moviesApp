import {Movie, MovieDetail} from '../../core/entities/movie.entity';
import type {
  MovieDetailResponse,
  Result,
} from '../interfaces/movies-db.responses';

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromMovieDBDetailToEntity(result: MovieDetailResponse): MovieDetail {
    return {
      id: result.id,
      description: result.overview,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      title: result.title,

      genres: result.genres.map(genre => genre.name),
      duration: result.runtime,
      budget: result.budget,
      originalTitle: result.original_title,
      productionCompanies: result.production_companies.map(
        company => company.name,
      ),
    };
  }
}
