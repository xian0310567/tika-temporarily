import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome, Octicons } from "@expo/vector-icons";

import First from "@screens/First";
import Calendar from "@screens/MyInfo";
// import Login from "@screens/Auth";

import Title from "@components/Common/HeaderTitle";
// import Menu from "@components/Layout/Menu";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="First"
          component={First}
          options={{
            title: "",
            tabBarIcon: () => (
              <Octicons
                name="home"
                size={26}
                style={{ marginTop: 10 }}
                color="gray"
              />
            ),
            headerLeft: () => <Title />,
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarLabel: "Calendar",
            title: "",
            headerLeft: () => <Title />,
          }}
        />
        {/* <Tab.Screen
          name="Test"
          component={Login}
          options={({ route }) => ({
            tabBarLabel: "User",
            tabBarIcon: () => (
              <FontAwesome name="user-o" size={22} color="gray" />
            ),
            title: "",
            headerLeft: () => <Title />,
          })}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
