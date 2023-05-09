import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  ImageBackground,
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';

import {colors} from '../theme/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useFocusEffect} from '@react-navigation/native';

export const Splash = ({navigation}: any) => {
  const [load, setLoad] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000); // 5seconds

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  useFocusEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
      }}>
    <Text   style={{
       fontSize:hp(5),fontWeight:'bold',color:colors.green
      }}>GROWTECH</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
