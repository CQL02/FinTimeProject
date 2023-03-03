import { useState } from "react";
import { View, Text } from "react-native";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const taskDatas = [
  {
    id: "1",
    title: "Do Assignment",
    category: "WIA2001 DATA STRUCTURE",
    due: "2/3/2023",
    description: "andriod studio",
    status: false,
  },
  {
    id: "2",
    title: "Design Poster",
    category: "EVENT PTUM",
    due: "3/3/2023",
    description: "recruitment poster",
    status: false,
  },
  {
    id: "3",
    title: "research on SPSS",
    category: "WIA2003 PROBABILITY AND STATISTICS",
    due: "13/3/2023",
    description: "Mann whitney U test, Anova test",
    status: false,
  },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(taskDatas);

  const handleTaskStatusChange = (taskId) => (event) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: event.target.checked } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <View>
      {tasks.map((task) => (
        <Box
          key={task.id}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={task.status}
                onChange={handleTaskStatusChange(task.id)}
              />
            }
            sx={{ m: 1, width: "10vw" }}
          />

          <Box sx={{ width: "90vw" }}>
            <Text style={{ fontSize: 20 }}>
              <b>{task.title}</b>
            </Text>
            <Text style={{ fontSize: 12 }}>{"\n" + task.category}</Text>
            <Text style={{ fontSize: 12 }}>{"\nDue: " + task.due}</Text>
          </Box>

          <Text style={{ textAlign: "right" }}>{task.due}</Text>
        </Box>
      ))}
    </View>
  );
}
