import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

//utils
import {normalize, scaleVertical} from '../utils/dimensionUtils';
import {getInterFont} from '../utils/FontUtils/interFontHelper';

const SearchBar = props => {
  const [searchText, setSearchText] = useState('');
  const textInputRef = useRef(null);

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = (value) => {
    setSearchText(value)
    props.onSearch(value)
  }
  return (
    <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color="#25C0FF" size={normalize(22)} />
      <TextInput
        style={styles.searchInput}
        ref={textInputRef}
        value={searchText}
        onChangeText={(value) => handleSearch(value)}
      />
    </Pressable>
  );
};

SearchBar.default = {
  onSearch: () => {},
};

SearchBar.prototype = {
  onSearch: PropTypes.func,
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
    backgroundColor: '#F3F5F9',
    height: scaleVertical(50),
    borderRadius: normalize(15),
  },
  searchInput: {
    flex: 1,
    marginLeft: normalize(6),
    height: '100%',
    ...getInterFont(24, 'Bold'),
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: '#686C7A',
  },
});
