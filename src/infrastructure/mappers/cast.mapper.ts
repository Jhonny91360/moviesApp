import {Cast} from '../../core/entities/cast.entity';
import {MovieDBCast} from '../interfaces/movies-db.responses';

export class CastMapper {
  static fromMovieDBCastToEntity(cast: MovieDBCast): Cast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? 'none',
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
