import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//global components
import Header from '../../components/Header';
import Button from '../../components/Button';
import Tab from '../../components/Tab';
import Badge from '../../components/Badge';
import SearchBar from '../../components/SearchBar';
import SingleDonationItem from '../../components/SingleDonationItem';

//utils
import {normalize, scaleVertical} from '../../utils/dimensionUtils';

//redux
import {updateFirstName} from '../../redux/reducers/UserReducer';
import {getInterFont} from '../../utils/FontUtils/interFontHelper';
import {
  resetCategories,
  updateSelectedCategoryId,
} from '../../redux/reducers/CategoriesReducer';
import {
  resetDonations,
  updateSelectedDonationId,
} from '../../redux/reducers/DonationsReducer';

//Navigation
import Routes from '../../Navigation/Routes';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [donationItems, setDonationItems] = useState([]);

  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations.items;
    const filteredItems = items.filter(item =>
      item.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(filteredItems);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prevState => prevState + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  const handleCategoryPress = value => {
    dispatch(updateSelectedCategoryId(value));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello,</Text>
            <View style={styles.username}>
              <Header title={`${user.firstName} ${user.lastName[0]}.👋`} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
        <Pressable style={styles.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="cover"
            style={styles.highlightedImage}
          />
        </Pressable>
        <View style={styles.categoryHeader}>
          <Header title="Select Category" type={2} />
        </View>
        <View style={styles.categoriesContainer}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            keyExtractor={item => item.categoryId.toString()}
            renderItem={({item}) => (
              <View style={styles.categoryItem}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={handleCategoryPress}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length <= 0 && (
          <View style={styles.emptyDonationItemContainer}>
            <Text>Sorry there are no items to show</Text>
          </View>
        )}
        {donationItems.length > 0 && (
          <View style={styles.donationItemsContainer}>
            {donationItems.map(eachItem => {
              const categoryInformation = categories.categories.find(
                value => value.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={eachItem.donationItemId}
                  style={styles.singleDonationItem}>
                  <SingleDonationItem
                    price={parseFloat(eachItem.price)}
                    badgeTitle={categoryInformation.name}
                    donationTitle={eachItem.name}
                    uri={eachItem.image}
                    donationItemId={eachItem.donationItemId}
                    onPress={(donationItemId) => {
                      dispatch(updateSelectedDonationId(donationItemId));
                      navigation.navigate(Routes.SingleDonationItem, {categoryInformation})
                    }}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    marginTop: scaleVertical(20),
    marginHorizontal: normalize(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIntroText: {
    ...getInterFont(24, 'Normal'),
    fontSize: normalize(16),
    lineHeight: normalize(19),
    color: '#636776',
  },
  username: {
    marginTop: scaleVertical(5),
  },
  profileImage: {
    width: normalize(50),
    height: normalize(50),
  },
  searchBarContainer: {
    marginHorizontal: normalize(24),
    marginTop: scaleVertical(20),
  },
  highlightedImageContainer: {
    marginHorizontal: normalize(24),
    marginTop: scaleVertical(20),
  },
  highlightedImage: {
    width: '100%',
    height: scaleVertical(160),
  },
  categoryHeader: {
    marginHorizontal: normalize(24),
    marginBottom: scaleVertical(16),
    marginTop: scaleVertical(20),
  },
  categoriesContainer: {
    marginLeft: normalize(24),
  },
  categoryItem: {
    marginRight: normalize(10),
  },
  emptyDonationItemContainer: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donationItemsContainer: {
    marginTop: scaleVertical(20),
    marginHorizontal: normalize(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: scaleVertical(23),
  },
});
