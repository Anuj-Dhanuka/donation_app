import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

//utils
import {getInterFont} from '../utils/FontUtils/interFontHelper';
import {normalize, scaleVertical} from '../utils/dimensionUtils';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 33;
  const tabWidth = {
    width: normalize(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      style={[styles.tab, props.isInactive && styles.inActiveTab, tabWidth]}
      onPress={() => props.onPress(props.tabId)}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title, props.isInactive && styles.inActiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.propTypes = {
  tabId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: scaleVertical(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(50),
  },
  inActiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    ...getInterFont(24, 'Medium'),
    fontSize: normalize(14),
    lineHeight: normalize(17),
    color: '#FFFFFF',
  },
  inActiveTitle: {
    color: '#79869F',
  },
});
