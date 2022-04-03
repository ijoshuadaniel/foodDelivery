import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image } from 'react-native';
import {
  explore,
  exploreSelected,
  subscription,
  subscriptionSelected,
  orders,
  ordersSelected,
  profile,
  profileSelected,
} from '../../assets/icons';
import { darkSlateGrey } from '../../constants/colors';
import { wp } from '../../constants/responsive';
import {
  homePageText,
  ordersPageText,
  profilePageText,
  subscriptionPageText,
} from '../../constants/textContent';
import { style } from './style';
import HomePage from '../../screens/home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const tabNavigationImage = (
    focused: boolean,
    unselectedImage: any,
    selectedImage: any
  ) => {
    if (focused) return selectedImage;
    return unselectedImage;
  };

  const CustomTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: style.navigator,
        }}
      >
        <Tab.Screen
          name={homePageText.title}
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={style.tabView}>
                  <Image
                    style={style.image}
                    source={tabNavigationImage(
                      focused,
                      explore,
                      exploreSelected
                    )}
                  />
                  <Text
                    style={tabNavigationImage(
                      focused,
                      style.text,
                      style.focusedText
                    )}
                  >
                    {homePageText.title}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={subscriptionPageText.title}
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={style.tabView}>
                  <Image
                    style={style.image}
                    source={tabNavigationImage(
                      focused,
                      subscription,
                      subscriptionSelected
                    )}
                  />
                  <Text
                    style={tabNavigationImage(
                      focused,
                      style.text,
                      style.focusedText
                    )}
                  >
                    {subscriptionPageText.title}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={ordersPageText.title}
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={style.tabView}>
                  <Image
                    style={style.image}
                    source={tabNavigationImage(focused, orders, ordersSelected)}
                  />
                  <Text
                    style={tabNavigationImage(
                      focused,
                      style.text,
                      style.focusedText
                    )}
                  >
                    {ordersPageText.title}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={profilePageText.title}
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={style.tabView}>
                  <Image
                    style={style.image}
                    source={tabNavigationImage(
                      focused,
                      profile,
                      profileSelected
                    )}
                  />
                  <Text
                    style={tabNavigationImage(
                      focused,
                      style.text,
                      style.focusedText
                    )}
                  >
                    {profilePageText.title}
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'mainscreen'} component={CustomTabNavigator} />
    </Stack.Navigator>
  );
};

export default Navigation;
