import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {SvgXml} from 'react-native-svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme/colors';
import { Login } from '../screens/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/splash';
import { Home } from '../screens/home';


// const AdminDrawer = createDrawerNavigator();
const AdminStack = createNativeStackNavigator();





export const StackNavigation = (props: any) => {
  return (
    <AdminStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <AdminStack.Screen name="Splash" component={Splash} />
      <AdminStack.Screen name="Login" component={Login} />
      <AdminStack.Screen name="Home" component={Home} />
     
    

      {/* <AdminStack.Screen name="DrawerNavigation" component={DrawerNavigation}   />  */}

      {/* <AdminStack.Screen name="Checkout" component={Checkout}   />  */}

      {/* options={{gestureEnabled: false}} */}
    </AdminStack.Navigator>
  );
};









//  export const DrawerNavigation = (props:any) => {
//     return (
//       <AdminDrawer.Navigator
//         screenOptions={{headerShown: false}}
//         initialRouteName={'Home'}

//         drawerContent={(props: any) => <CustomDrawer {...props}  />}>

//         {/* <AdminDrawer.Screen name="StackNavigation" component={StackNavigation} />   */}
//         <AdminDrawer.Screen name="Home" component={Home}  />
//         <AdminDrawer.Screen name="AboutUs" component={AboutUs}  />
//         <AdminDrawer.Screen name="BecomeaPartner" component={BecomeaPartner}  />
//         {/* <AdminDrawer.Screen name="AddCart" component={AddCart}  />   */}
//         <AdminDrawer.Screen name="Checkout" component={Checkout}   />
//         <AdminDrawer.Screen name="VerifyCode" component={VerifyCode} options={{ unmountOnBlur: true }}  />
//         <AdminDrawer.Screen name="Maps" component={Maps}   />
//         <AdminDrawer.Screen name="MapBox" component={MapBoxScreen}   />
//         <AdminDrawer.Screen name="MapBox2" component={MapBoxScreen2}    />
//         <AdminDrawer.Screen name="Rider" component={Rider}   />
//         <AdminDrawer.Screen name="Cart" component={Cart}   />
//         <AdminDrawer.Screen name="BottomTabNavigation" component={BottomTabNavigation}   />

//       </AdminDrawer.Navigator>
//     );
//   };
