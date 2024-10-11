import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f78a0b35dfc34df7e35137173f7f1ce8',
    language: 'es',
  },
});
