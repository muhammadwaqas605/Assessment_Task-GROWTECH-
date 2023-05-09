import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../theme/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const ApplicationDetails = ({ route }: any) => {
  const userData = route.params.userData;

  useEffect(() => {
    console.log("Screen 2 data:", route.params.userData);
  }, [route]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.BoxesView}>
          <View style={styles.Box}>
            <Octicons name="person" size={24} color={colors.green} />
            <Text style={styles.Boxh1} numberOfLines={1}>
              {userData.gender}
            </Text>
            <Text style={styles.Boxh2} numberOfLines={1}>
              Gender
            </Text>
          </View>
          <View style={styles.Box}>
            <MaterialCommunityIcons
              name="ring"
              size={24}
              color={colors.green}
            />
            <Text style={styles.Boxh1} numberOfLines={1}>
              {userData.marital_status}
            </Text>
            <Text style={styles.Boxh2} numberOfLines={1}>
              Maritial Status
            </Text>
          </View>
          <View style={styles.Box}>
            <MaterialIcons
              name="family-restroom"
              size={24}
              color={colors.green}
            />
            <Text style={styles.Boxh1} numberOfLines={1}>
              {userData.parantage}
            </Text>
            <Text style={styles.Boxh2} numberOfLines={1}>
              Father
            </Text>
          </View>
          <View style={styles.Box}>
            <AntDesign name="phone" size={24} color={colors.green} />
            <Text style={styles.Boxh1} numberOfLines={1}>
              {userData.phone}
            </Text>
            <Text style={styles.Boxh2} numberOfLines={1}>
              Mobile
            </Text>
          </View>
          <View style={styles.Box}>
            <FontAwesome name="birthday-cake" size={24} color={colors.green} />
            <Text style={styles.Boxh1} numberOfLines={1}>
              {userData.dob}
            </Text>
            <Text style={styles.Boxh2} numberOfLines={1}>
              Birthday
            </Text>
          </View>
          <View style={styles.Box}>
            <FontAwesome name="book" size={24} color={colors.green} />
            <Text style={styles.Boxh1} numberOfLines={1}>
              {userData.education}
            </Text>
            <Text style={styles.Boxh2} numberOfLines={1}>
              Education
            </Text>
          </View>
        </View>

        <View style={styles.cardView}>
          <View style={{ backgroundColor: colors.black }}>
            <Text style={[styles.h1, { color: colors.white, padding: 15 }]}>
              Family Details
            </Text>
          </View>
          <View style={{ backgroundColor: colors.white, padding: 15 }}>
            <View style={styles.cardDataView}>
              <Text style={[styles.Boxh2, { width: "50%" }]}>
                Family Member Name
              </Text>
              <Text
                style={[styles.Boxh1, { width: "50%", textAlign: "right" }]}
              >
                {userData.mf_name ? userData.mf_name : "----"}
              </Text>
            </View>
            <View style={styles.cardDataView}>
              <Text style={[styles.Boxh2, { width: "50%" }]}>
                Family Member CNIC
              </Text>
              <Text
                style={[styles.Boxh1, { width: "50%", textAlign: "right" }]}
              >
                {userData.mf_cnic ? userData.mf_cnic : "----"}
              </Text>
            </View>
            <View style={styles.cardDataView}>
              <Text style={[styles.Boxh2, { width: "50%" }]}>Religion</Text>
              <Text
                style={[styles.Boxh1, { width: "50%", textAlign: "right" }]}
              >
                {userData.mreligion}
              </Text>
            </View>
            <View style={styles.cardDataView}>
              <Text style={[styles.Boxh2, { width: "50%" }]}>Is Disable</Text>
              <Text
                style={[styles.Boxh1, { width: "50%", textAlign: "right" }]}
              >
                {userData.is_disable}
              </Text>
            </View>
            <View style={styles.cardDataView}>
              <Text style={[styles.Boxh2, { width: "50%" }]}>
                Business Address
              </Text>
              <Text
                style={[styles.Boxh1, { width: "50%", textAlign: "right" }]}
              >
                {userData?.address?.current_address}, {userData?.address?.city}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardView}>
          <View style={{ backgroundColor: colors.black }}>
            <Text style={[styles.h1, { color: colors.white, padding: 15 }]}>
              Request Amount
            </Text>
          </View>
          <View style={{ backgroundColor: colors.white, padding: 15 }}>
            <View style={styles.cardDataView}>
              <Text style={[styles.Boxh2, { width: "50%" }]}>
                Request Amount
              </Text>
              <Text
                style={[styles.Boxh1, { width: "50%", textAlign: "right" }]}
              >
                250,000/-
              </Text>
            </View>
            <View style={styles.cardDataView}>
              <Text style={[styles.Boxh2, { width: "50%" }]}>Category</Text>
              <Text
                style={[styles.Boxh1, { width: "50%", textAlign: "right" }]}
              >
                Category
              </Text>
            </View>
            <View style={styles.cardDataView}>
              <Text style={[styles.Boxh2, { width: "50%" }]}>Purpose</Text>
              <Text
                style={[styles.Boxh1, { width: "50%", textAlign: "right" }]}
              >
                Purpose
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  },
  BoxesView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  Box: {
    width: wp(30),
    height: wp(25),
    borderWidth: 0,
    marginBottom: hp(1),
    justifyContent: "center",
    paddingLeft: 15,
  },
  Boxh1: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: hp(1.5),
  },
  Boxh2: {
    color: colors.lightgrey,
    fontSize: hp(1.5),
  },
  cardView: {
    overflow: "hidden",
    borderRadius: wp(2),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 15,
    shadowRadius: 3.84,
    elevation: 10,
    marginBottom: hp(2),
  },
  cardDataView: {
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(1.5),
  },
  h1: {
    color: colors.drawergrey,
    fontWeight: "bold",
    fontSize: hp(2),
    textAlign: "left",
  },
  h2: {
    color: colors.green,
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "left",
  },

  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.bg,
  },
  LoadView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bg,
  },
});

export default ApplicationDetails;
