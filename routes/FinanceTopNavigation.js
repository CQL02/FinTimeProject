import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FinanceAdd from "../screen/FinanceAdd";
import FinanceHistory from "../screen/FinanceHistory";

const FinanceTopNavigator = createMaterialTopTabNavigator();

export default function FinanceTopNavigation() {
  return (
    <FinanceTopNavigator.Navigator>
      <FinanceTopNavigator.Screen name="Add Usage" component={FinanceAdd} />
      <FinanceTopNavigator.Screen name="History" component={FinanceHistory} />
    </FinanceTopNavigator.Navigator>
  );
}
