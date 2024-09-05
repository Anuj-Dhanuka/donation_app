import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

//utils
import {getInterFont} from '../utils/FontUtils/interFontHelper';
import {normalize, scaleVertical} from '../utils/dimensionUtils';

const Input = ({
  label,
  placeholder,
  onChangeText = () => {},
  keyboardType,
  secureTextEntry = false,
  
}) => {
  const [value, setValue] = useState('');

  const handleChangeValue = value => {
    setValue(value);
    onChangeText(value);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType ? keyboardType : 'default'}
        placeholder={placeholder ? placeholder : null}
        style={styles.input}
        value={value}
        onChangeText={handleChangeValue}
        secureTextEntry={secureTextEntry}
        caretHidden={false}
      />
    </View>
  );
};

Input.prototypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;

const styles = StyleSheet.create({
  label: {
    ...getInterFont(24, 'Medium'),
    fontSize: normalize(12),
    lineHeight: normalize(15),
    color: '#36455A',
  },
  input: {
    paddingVertical: scaleVertical(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
});
