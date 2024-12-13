//import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootParamList} from '../../navigation/StackNavigator';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';

interface Props extends NativeStackScreenProps<RootParamList, 'Details'> {}
export const DetailsScreen = ({route}: Props) => {
  // const {moviesId} = useRoute().params;
  const {moviesId} = route.params;

  const {movieDetail, isLoading} = useMovie(moviesId);

  if (isLoading || !movieDetail) {
    return <Text>Loading...</Text>;
  }

  console.log(movieDetail);
  return (
    <View>
      <Text>hptaaaa</Text>
      <MovieHeader movie={movieDetail!} />
    </View>
  );
};
