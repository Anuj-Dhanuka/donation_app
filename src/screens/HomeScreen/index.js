import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//global components
import Header from '../../components/Header';
import Button from '../../components/Button';
import Tab from '../../components/Tab';
import Badge from '../../components/Badge';
import SearchBar from '../../components/SearchBar';
import SingleDonationItem from '../../components/SingleDonationItem';

//utils
import { normalize } from '../../utils/dimensionUtils';

import { updateFirstName } from '../../redux/reducers/UserSlice';

const Home = () => {
  const handleButtonClick = () => {
    console.log('Pressed');
  };

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title={`${user.firstName}  ${user.lastName}`} />
      <Pressable onPress={() => dispatch(updateFirstName({firstName: "Keshav"}))}>
        <Text>Press me to change name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
