import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    Image,
    Text,
    View,
    StyleSheet,

} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ApplicationDetails from '../components/applicationDetails';
import { UserData } from '../apis/userData';
import Toast from 'react-native-toast-message';
import Status from '../components/status';

const TopTab = createMaterialTopTabNavigator();
export const Home = () => {
    const [load, setLoad] = useState(false);
    const [userData, setUserData] = useState<any>([])

    const getData = () => {
        let id = 1
        let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk"
        UserData(accessToken, id)
            .then((rest: any) => {
                if (rest.error === false) {
                    setUserData(rest.data.member_personal_details)
                    Toast.show({
                        type: 'success',
                        text1: 'Data Found',
                    });
                    setLoad(false);

                }
            })
            .catch((error: any) => {
                setLoad(false);
                console.log('ERRORR', error.data.message);
            });
    };

    useEffect(() => {
        setLoad(true)
        getData()
    }, [])


    return (
        <SafeAreaView
            style={styles.container}>
            {load ? (
                <View
                    style={styles.LoadView}>
                    <ActivityIndicator />
                </View>
            ) : (
                <View
                    style={styles.background}>
                    <View style={styles.header}>
                        <View style={styles.headerView}>
                            <Text
                                style={styles.h2}>
                                GROWTECH
                            </Text>
                            <Text
                                style={styles.h1}>
                                Application Verification
                            </Text>
                        </View>
                        <View style={styles.headerRightView}>
                            <Icon
                                name='bell'
                                size={24}
                                color={colors.lightgrey}
                            />
                            <Icon
                                name='menu'
                                size={24}
                                color={colors.lightgrey}
                            />
                        </View>
                    </View>

                    <View style={styles.WhiteCard}>
                        <View style={styles.cardView}>
                            <Image
                                source={require('../assets/images/img.jpeg')}
                                style={styles.img}
                            />
                            <View style={{ marginLeft: wp(2), }}>
                                <Text style={styles.card}>{userData?.first_name} {userData?.last_name} </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <AntDesign
                                        name='idcard'
                                        size={24}
                                        color={colors.green}
                                    />
                                    <Text style={{ fontSize: hp(2), color: colors.green, fontWeight: 'bold', marginLeft: wp(1),width:wp(50) }} numberOfLines={1}>{userData.cnic}</Text>

                                </View>
                            </View>
                        </View>
                    </View>

                    {userData &&
                        <View style={{ backgroundColor: colors.black, width: '100%', marginTop: hp(10), flex: 1 }}>

                            <TopTab.Navigator
                                tabBarOptions={{
                                    activeTintColor: colors.green,
                                    inactiveTintColor: colors.black,
                                    labelStyle: { fontSize: 13, fontWeight: 'bold', },
                                    indicatorStyle: { backgroundColor: colors.green, height: 3 },
                                }}
                            >
                                <TopTab.Screen
                                    name="Application Details"
                                    component={ApplicationDetails}
                                    initialParams={{ userData: userData }}
                                />
                                <TopTab.Screen
                                    name="Status"
                                    component={Status}
                                />
                            </TopTab.Navigator>
                        </View>
                    }

                </View>

            )}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%'
    },
    headerView:
    { justifyContent: 'space-between',
     alignItems: 'flex-start',
     },
     headerRightView:
     { flexDirection: 'row',
      justifyContent: 'space-between',
       alignItems: 'center',
        width: "15%" 
    },
    h1: {
        color: colors.drawergrey,
        fontWeight: 'bold',
        fontSize: hp(2),
        textAlign: 'left'
    },
    h2:
    {
        color: colors.green,
        fontSize: hp(4),
        fontWeight: 'bold',
        textAlign: 'left'
    },

    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.bg,
    },
    LoadView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bg,
    },
    card:{ 
        fontSize: hp(2.5),
         fontWeight: 'bold',
          color: colors.black 
        },
    WhiteCard:
        { height: hp(12),
             backgroundColor: colors.white,
              width: '100%',
               marginVertical: hp(2),
                alignItems: 'center' 
            },
    cardView:{ flexDirection: 'row', alignItems: 'center', height: hp(15), backgroundColor: colors.white, width: '90%', marginTop: hp(5), borderRadius: hp(2), shadowColor: colors.black, shadowOpacity: 5, elevation: 5,
     padding: 10 },
     img:{ width: 88,
         height: 88,
          resizeMode: 'cover',
           borderRadius: wp(50)
         }


});
