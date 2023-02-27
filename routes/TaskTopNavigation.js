import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TaskAdd from "../screen/TaskAdd";
import TaskHistory from "../screen/TaskHistory";

const TaskTopNavigator = createMaterialTopTabNavigator();

export default function TaskTopNavigaton() {
  return (
    <TaskTopNavigator.Navigator>
      <TaskTopNavigator.Screen name="Add Task" component={TaskAdd} />
      <TaskTopNavigator.Screen name="History" component={TaskHistory} />
    </TaskTopNavigator.Navigator>
  );
}
