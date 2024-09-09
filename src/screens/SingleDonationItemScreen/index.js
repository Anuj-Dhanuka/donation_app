import React from 'react';
import {useSelector} from 'react-redux';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//dimension utils
import {normalize, scaleVertical} from '../../utils/dimensionUtils';

//font utils
import { getInterFont } from '../../utils/FontUtils/interFontHelper';

//navigations
import Routes from '../../Navigation/Routes';

//components
import BackButton from '../../components/BackButton';
import Badge from '../../components/Badge';
import Header from '../../components/Header';
import Button from '../../components/Button';

const SingleDonationItemScreen = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const {categoryInformation} = route.params;

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleDonateButton = () => {
    navigation.navigate(Routes.Payment)
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={handleBackButton} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={styles.image}
        />
        <View style={styles.badgeContainer}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={styles.description}>{donationItemInformation.description}</Text>
      </ScrollView>
      <View style={styles.button}>
        <Button title='Donate' onPress={handleDonateButton}  />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  container: {
    marginHorizontal: normalize(20),
    paddingTop: scaleVertical(7),
    paddingBottom: scaleVertical(10)
  },
  image: {
    marginTop: scaleVertical(12),
    marginBottom: scaleVertical(24),
    width: '100%',
    height: scaleVertical(240),
    borderRadius: normalize(5),
  },
  badgeContainer: {
    marginBottom: scaleVertical(16),
  },
  description: {
    marginTop: scaleVertical(7),
    marginHorizontal: normalize(7),
    ...getInterFont(24, 'Normal'),
    fontSize: normalize(14),
    color: "#000000"
  },
  button: {
    marginHorizontal: normalize(20),
    marginBottom: scaleVertical(24)
  }
});
