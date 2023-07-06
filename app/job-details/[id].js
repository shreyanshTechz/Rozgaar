
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS,icons} from '../../constants'
import {ScreenHeaderBtn} from '../../components'
import { useSearchParams } from "expo-router";
import Data from "../../hook/data";
import About from "../../components/jobdetails/about/About";
export default function Page() {
  const Stack = createNativeStackNavigator();
  const param = useSearchParams();
  const data = Data["data"][param.id];
  // console.log(param);
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name ={data.employer_name}
          options={{
            headerStyle :{ backgroundColor:COLORS.lightWhite},
            headerShadowVisible : false,
            headerLeft :()=>(
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlepress={{}} />
            ),
            headerRight :()=>(
              <ScreenHeaderBtn iconUrl={icons.search} dimension="60%" handlepress={{}} />
            )
          }}
        >
          {param?props => <About userdata={data} />:""}
        </Stack.Screen>
        
      </Stack.Navigator>
    /* </NavigationContainer> */
  );
}
