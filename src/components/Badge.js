import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

//utils
import {getInterFont} from '../utils/FontUtils/interFontHelper';
import {normalize, scaleVertical} from '../utils/dimensionUtils';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 10
  const badgeWidth = {
    width: normalize(paddingHorizontal * 2 + width)
  }
  return (
    <View
      style={[styles.badge, badgeWidth]}
      >
      <Text
      onTextLayout={(event) => {
        setWidth(event.nativeEvent.lines[0].width)
      }}
        ref={textRef}
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
    height: scaleVertical(22),
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
