import { StyleSheet, Text, View,ScrollView,SafeAreaView } from "react-native";
import { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Stack,useRouter} from 'expo-router'
import {COLORS,icon,icons,images,SIZES} from '../constants'
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'
export default function Page() {

  const router = useRouter();
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name ="JobDhoondo"
          component={Welcome}
          options={{
            headerStyle :{ backgroundColor:COLORS.lightWhite},
            headerShadowVisible : false,
            headerLeft :()=>(
              <ScreenHeaderBtn iconUrl={icons.heart} dimension="60%" handlepress={{}} />
            ),
            headerRight :()=>(
              <ScreenHeaderBtn iconUrl={icons.search} dimension="60%" handlepress={{}} />
            )
          }}
        />
        <Stack.Screen name="Profile" component={Popularjobs} />
      </Stack.Navigator>
    /* </NavigationContainer> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    backgroundColor : COLORS.secondary
  },
  // main: {
  //   flex: 1,
  //   justifyContent: "center",
  //   maxWidth: 960,
  //   marginHorizontal: "auto",
  // },
  // title: {
  //   fontSize: 64,
  //   fontWeight: "bold",
  // },
  // subtitle: {
  //   fontSize: 36,
  //   color: "#38434D",
  // },
});
