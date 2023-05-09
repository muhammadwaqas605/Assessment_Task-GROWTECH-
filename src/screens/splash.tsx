import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, BackHandler } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Entypo";

import { colors } from "../theme/colors";
import { useFocusEffect } from "@react-navigation/native";

export const Splash = ({ navigation }: any) => {
  useEffect(
    () => {
      const timeoutId = setTimeout(() => {
        navigation.navigate("Login");
      }, 1000);

      return () => clearTimeout(timeoutId);
    },
    [navigation]
  );

  useFocusEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GROWTECH</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: hp(5),
    fontWeight: "bold",
    color: colors.green,
  },
});
