//import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootParamList} from '../../navigation/StackNavigator';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends NativeStackScreenProps<RootParamList, 'Details'> {}
export const DetailsScreen = ({route}: Props) => {
  // const {moviesId} = useRoute().params;
  const {moviesId} = route.params;

  const {movieDetail, isLoading, cast = []} = useMovie(moviesId);

  if (isLoading || !movieDetail) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Text>hptaaaa</Text>
      <MovieHeader movie={movieDetail!} />
      <MovieDetails movie={movieDetail!} cast={cast} />
    </ScrollView>
  );
};
