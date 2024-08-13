/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {FlatList, RefreshControl, View} from 'react-native';
import styles from './styles';
// import {createHash} from '../../Utils';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
  characterActions,
  fetchCharacters,
} from '../../redux/actions/characterActions';
import {
  ApiError,
  CharacterListItem,
  EmptyListComponent,
  TextField,
} from '../../Components';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ListEmptyComponent = () => <EmptyListComponent />;

const Home = ({navigation}) => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const {colors} = useTheme();

  const {characters, apiError, apiErrorMessage} = useSelector(
    (state: RootState) => state.characterData,
  );
  const scrollY = useSharedValue(0);
  const previousScrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const currentY = event.contentOffset.y;

      if (currentY < previousScrollY.value) {
        // User is scrolling up
        scrollY.value = 0; // Show the search bar
      } else if (currentY > previousScrollY.value) {
        // User is scrolling down
        scrollY.value = currentY;
      }

      previousScrollY.value = currentY;
    },
  });

  const searchBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(scrollY.value > 50 ? -100 : 0, {
            duration: 300,
          }),
        },
      ],
      opacity: withTiming(scrollY.value > 50 ? 0 : 1, {duration: 300}),
    };
  });
  const animatedListStyle = useAnimatedStyle(() => {
    return {
      marginTop: withTiming(scrollY.value > 50 ? -50 : 0, {duration: 100}),
    };
  });
  const {
    container,
    contentContainerStyle,
    columnWrapperStyle,
    listStyle,
    searchContainer,
    overrideTextFieldStyle,
  } = styles(colors);
  const {count} = useSelector((state: RootState) => state.characterData);
  const loader = useSelector((state: RootState) => state.loaderData.loader);
  const dispatch = useDispatch();
  const fetchData = useCallback(
    (reset: boolean = false, search: boolean = false) => {
      dispatch(fetchCharacters(reset ? 0 : page, search ? searchQuery : null));
      setPage(reset ? 0 : page + 1);
    },
    [dispatch, page, searchQuery],
  );
  const clearSearch = () => {
    setSearchQuery('');
    fetchData(true);
  };
  const listHeaderComponent = () => (
    <Animated.View style={[searchBarStyle, searchContainer]}>
      <TextField
        placeholder="Search Characters"
        canCancel
        value={searchQuery}
        onChangeText={(t: string) => setSearchQuery(t)}
        pressCancel={clearSearch}
        overrideContainerStyle={overrideTextFieldStyle}
      />
    </Animated.View>
  );
  const onErrorRetry = () => {
    if (searchQuery !== '') {
      fetchData(false, true);
    } else {
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (searchQuery.length > 0) {
      const delayDebounceFn = setTimeout(() => {
        fetchData(true, true);
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchQuery, fetchData]);

  return apiError ? (
    <ApiError
      errorMessage={apiErrorMessage}
      showLogout
      showRetry
      retry={onErrorRetry}
    />
  ) : (
    <View style={container}>
      {listHeaderComponent()}
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        // ListHeaderComponent={listHeaderComponent()}
        data={characters}
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle}
        contentContainerStyle={contentContainerStyle}
        style={[listStyle, animatedListStyle]}
        renderItem={({item}) => (
          <CharacterListItem
            item={item}
            onPress={() => {
              dispatch({type: characterActions.CLEAR_CHARACTER_DETAIL});
              navigation.navigate('CharacterDetails', {character: item});
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          if (count !== 0 && count === 30) {
            fetchData();
          }
        }}
        refreshControl={
          <RefreshControl
            refreshing={loader}
            onRefresh={() => fetchData(true)}
          />
        }
        ListEmptyComponent={loader ? null : ListEmptyComponent}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default Home;
