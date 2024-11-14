/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {FlatList} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}
export const HorizontalCarousel = ({movies, title, loadNextPage}: Props) => {
  const isLoading = useRef(false); //para saber si se esta cargando mas peliculas

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false; //si las movies se actualizan, es porque se termino de cargar
    }, 500);
  }, [movies]);

  //funcion para detectar el scroll horizontal y consultar mas peliculas (infinite scroll)
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) {
      return;
    }
    const {contentOffset, contentSize, layoutMeasurement} = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) {
      return;
    }

    isLoading.current = true;
    loadNextPage && loadNextPage();
  };
  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        //keyExtractor={item => item.id.toString()}
        keyExtractor={item => `${item.id.toString()}-${item.title}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
