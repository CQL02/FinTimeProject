import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeTopNavigator from "./HomeTopNavigation";
import FinanceTopNavigator from "./FinanceTopNavigation";
import TaskTopNavigator from "./TaskTopNavigation";

const BottomRootNavigation = createBottomTabNavigator();

export default function bottomNavigation() {
  return (
    <NavigationContainer>
      <BottomRootNavigation.Navigator>
        <BottomRootNavigation.Screen name="Home" component={HomeTopNavigator} />
        <BottomRootNavigation.Screen
          name="Finance"
          component={FinanceTopNavigator}
        />
        <BottomRootNavigation.Screen name="Task" component={TaskTopNavigator} />
      </BottomRootNavigation.Navigator>
    </NavigationContainer>
  );
}
