import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeTask from "../screen/HomeTask";
import HomeFinance from "../screen/HomeFinance";

const HomeTopRootNavigator = createMaterialTopTabNavigator();

export default function HomeTopNavigaton() {
  return (
    <HomeTopRootNavigator.Navigator>
      <HomeTopRootNavigator.Screen name="Task" component={HomeTask} />
      <HomeTopRootNavigator.Screen name="Finance" component={HomeFinance} />
    </HomeTopRootNavigator.Navigator>
  );
}
