import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../theme/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Status = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>No Data Found </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderWidth: 0,
    backgroundColor: colors.white,
    padding: widthPercentageToDP(2.5),
    justifyContent: "center",
    alignItems: "center"
  },
  h2: {
    color: colors.green,
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "left"
  }
});

export default Status;
