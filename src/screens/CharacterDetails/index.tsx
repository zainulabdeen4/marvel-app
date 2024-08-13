/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, View, ScrollView} from 'react-native';
import styles from './styles';
import {fetchCharactersDetails} from '../../redux/actions/characterActions';
import {useDispatch, useSelector} from 'react-redux';
import {pathReplace} from '../../Utils';
import {RootState} from '../../redux/store';
import Animated, {Easing, FadeIn} from 'react-native-reanimated';
import {ShimmerComics, ApiError} from '../../Components';

const CharacterDetails = ({route}) => {
  const {colors} = useTheme();
  const {character} = route.params;
  const {
    container,
    coverStyle,
    DetailContainer,
    title,
    description,
    body,
    ComicsTitle,
    comicsRow,
    bulletPoint,
    comicName,
    CoverContainer,
  } = styles(colors);
  const dispatch = useDispatch();
  const {characterDetail, loader, apiError, apiErrorMessage} = useSelector(
    (state: RootState) => state.characterData,
  );

  const fetchDetails = useCallback(() => {
    dispatch(fetchCharactersDetails(character.id));
  }, [character.id, dispatch]);
  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return apiError ? (
    <ApiError
      errorMessage={apiErrorMessage}
      showLogout
      showRetry
      retry={fetchDetails}
    />
  ) : (
    <ScrollView
      contentContainerStyle={container}
      showsVerticalScrollIndicator={false}>
      <View style={CoverContainer}>
        <Animated.Image
          source={{
            uri: `${pathReplace(character?.thumbnail?.path)}.${
              character?.thumbnail?.extension
            }`,
          }}
          style={coverStyle}
          resizeMode="cover"
          sharedTransitionTag={`${character.id}Image`}
        />

        <Animated.View
          style={DetailContainer}
          entering={FadeIn.duration(650).easing(Easing.ease)}>
          {character && (
            <>
              <Text style={title}>{character?.name}</Text>
              {character?.description && (
                <Text style={description}>{character.description}</Text>
              )}
            </>
          )}
        </Animated.View>
      </View>
      <View style={body}>
        <Text style={ComicsTitle}>Comics:</Text>
        {characterDetail && (
          <View>
            {characterDetail?.comics?.available > 0 &&
              characterDetail.comics.items.map(item => {
                return (
                  <View style={comicsRow}>
                    <View style={bulletPoint} />
                    <Text style={comicName}>{item.name}</Text>
                  </View>
                );
              })}
          </View>
        )}
        {loader && [1, 2, 3].map(_ => <ShimmerComics />)}
      </View>
    </ScrollView>
  );
};

export default CharacterDetails;
