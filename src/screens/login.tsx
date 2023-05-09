import React, { useState, useEffect } from 'react';
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
import { SvgXml } from 'react-native-svg';
import { BlurView } from '@react-native-community/blur';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';

import { colors } from '../theme/colors';

import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Login = ({ navigation }: any) => {
  const [load, setLoad] = useState(false);
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  

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
    <SafeAreaView
      style={styles.container}>
      {load ? (
        <View
          style={styles.LoadView}>
          <ActivityIndicator />
        </View>
      ) : (


        <ImageBackground
          source={require('../assets/images/img.jpeg')}
          style={styles.background}>

          <View
            style={styles.bottomView}>

            <Text
              style={styles.h2}>
              LOGIN TO{' '}
              <Text
                style={styles.h2green}>
                GROWTECH
              </Text>
            </Text>
            <Text
              style={styles.h1}>
              Enter Mobile No.
              <Text
                style={styles.steric}>
                *
              </Text>
            </Text>
            <View
              style={styles.numView}>
              <Text style={{ marginRight: 10, color: colors.white }}>
                +92
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.white,
                  width: 1,
                  height: 30,
                  marginRight: 10,
                }}></View>
              <TextInput
                style={styles.input}
                placeholder="3 - -   - - -  - - - -"
                keyboardType="phone-pad"
                placeholderTextColor={colors.white}
                numberOfLines={1}

              />
            </View>
            <Text
              style={styles.h1}>
              Enter Password
              <Text
                style={styles.steric}>
                *
              </Text>
            </Text>

            <View
              style={styles.passView}>
              <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Enter Your Password"
                placeholderTextColor={colors.white}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={{ alignItems: 'center', width: '10%' }}
                onPress={toggleShowPassword}>
                <Icon
                  name={showPassword ? 'eye-with-line' : 'eye'}
                  size={24}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                marginVertical: hp(2),
                borderWidth: 1,
                borderRadius: wp(5),
                borderColor: colors.green,
                backgroundColor: colors.green,
                paddingVertical: 10,
                paddingHorizontal: wp(5),
                alignItems: 'center',
              }}
              onPressIn={() => { }}
              onPress={() => {
                console.log('navigate');
                 navigation.navigate('Home')
                // props.
                // navigation.dispatch('BottomTabNavigation'
                // , {
                //   screen: 'Home',
                //   params:{data:"SignIn"}

                // });




              }}>
              <Text
                style={[styles.h2, { marginBottom: 0 }]}>
                SIGN IN
              </Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>

      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  h1: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: hp(2),
    marginVertical: hp(2),
  },
  h2:
  {
    color: colors.white,
    fontSize: hp(3),
    textAlign: 'center',
    marginBottom: hp(4),
  },
  h2green: {
    fontWeight: 'bold',
    color: colors.green,
    fontSize: hp(3),
  },
  steric: {
    fontWeight: 'bold',
    color: colors.red,
    fontSize: hp(2),
  },
  background: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  LoadView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
  },
  numView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderRadius: wp(2),
    borderColor: colors.green,
    paddingHorizontal: hp(2),
  },
  passView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: wp(2),
    borderColor: colors.green,
    paddingHorizontal: hp(1),
    marginBottom: hp(2),
  },
  input: { padding: 10,
     color: colors.white, 
     width: '90%' 
    },
    bottomView:{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderTopLeftRadius: wp(5),
      borderTopRightRadius: wp(5),
      padding: wp(5),

    }
});
