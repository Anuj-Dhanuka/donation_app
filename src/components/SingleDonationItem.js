import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Badge from './Badge';
import Header from './Header';
import {normalize, scaleVertical} from '../utils/dimensionUtils';

const SingleDonationItem = props => {
  return (
    <Pressable onPress={() => props.onPress(props.donationItemId)}>
      <View>
        <View style={styles.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode="cover"
          source={{uri: props.uri}}
          style={styles.image}
        />
      </View>
      <View style={styles.donationInformation}>
        <Header title={props.donationTitle} type={3} color="#0A043C" numberOfLines={1} />
        <View style={styles.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color="#156CF7"
          />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;

const styles = StyleSheet.create({
  image: {
    width: normalize(155),
    height: scaleVertical(170),
    borderRadius: normalize(20),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: scaleVertical(13),
    left: normalize(10),
  },
  donationInformation: {
    marginTop: scaleVertical(16),
  },
  price: {
    marginTop: scaleVertical(5),
  },
});
