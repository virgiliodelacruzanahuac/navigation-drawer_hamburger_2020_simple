// React Navigate Drawer with Bottom Tab – Example using React Navigation V5 //
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer //
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image,SafeAreaView } from 'react-native';

import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import ExploreScreen from './pages/ExploreScreen';
import SettingScreen from './pages/SettingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <SafeAreaView style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
    
        <Icon name="menuunfold" size={30} color="#fff" />

      </TouchableOpacity>
    </SafeAreaView>
  );
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'ExploreScreen':
      return 'Explore';
    case 'BottomTabStack':
      return 'Home';
  }
}

function BottomTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home Screen',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}  />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore Screen',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />
    </Tab.Navigator>
  );
}

function HomeScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Inicio"
       component={HomeScreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
}

function SettingScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Setting', //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{ 
            drawerLabel: 'Home Screen Option' ,
            drawerIcon: ({ focused, size }) => (
              //https://oblador.github.io/react-native-vector-icons/
                   <Icon name="infocirlceo" size={30} color="#900" />
                   )
          }}
          component={HomeScreenStack} />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{ drawerLabel: 'Setting Screen Option' ,
          drawerIcon: ({ focused, size }) => (
              //https://oblador.github.io/react-native-vector-icons/
                   <Icon name="book" size={30} color="#900" />
                   )
          }}
          component={SettingScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;