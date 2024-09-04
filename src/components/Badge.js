import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

//utils
import {getInterFont} from '../utils/FontUtils/interFontHelper';
import {normalize, scaleVertical} from '../utils/dimensionUtils';

const Badge = props => {
  const [width, setWidth] = useState(0);

  const paddingHorizontal = normalize(10)
  const badgeWidth = {
    width: paddingHorizontal * 2 + width
  }
  return (
    <View
      style={[styles.badge, badgeWidth]}
      >
      <Text
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width)
      }}
        style={[styles.title]}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    padding: normalize(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(50),
  },
  title: {
    ...getInterFont(24, 'SemiBold'),
    fontSize: normalize(10),
    lineHeight: normalize(12),
    color: '#FFFFFF',
  },
});
