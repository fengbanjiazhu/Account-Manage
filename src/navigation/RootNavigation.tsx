import React from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import Home from "../pages/Home";

const rootNavigator = createStackNavigator();

const RootNavigation = () => {
  return (
    <rootNavigator.Navigator>
      <rootNavigator.Screen name="Account Manage" component={Home} />
    </rootNavigator.Navigator>
  );
};

export default RootNavigation;
