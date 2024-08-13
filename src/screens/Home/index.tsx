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

const ListEmptyComponent = () => <EmptyListComponent />;

const Home = ({navigation}) => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const {colors} = useTheme();
  const {container, contentContainerStyle, columnWrapperStyle, listStyle} =
    styles(colors);
  const {characters, apiError, apiErrorMessage} = useSelector(
    (state: RootState) => state.characterData,
  );
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
    <TextField
      placeholder="Search Characters"
      canCancel
      value={searchQuery}
      onChangeText={(t: string) => setSearchQuery(t)}
      pressCancel={clearSearch}
    />
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
      <FlatList
        removeClippedSubviews={false}
        ListHeaderComponent={listHeaderComponent()}
        data={characters}
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle}
        contentContainerStyle={contentContainerStyle}
        style={listStyle}
        renderItem={({item}) => (
          <CharacterListItem
            item={item}
            onPress={() => {
              dispatch({type: characterActions.CLEAR_CHARACTER_DETAIL});
              navigation.navigate('CharacterDetails', {character: item});
            }}
          />
        )}
        pagingEnabled={true}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          if (count !== 0 && count === 20) {
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
      />
    </View>
  );
};

export default Home;
