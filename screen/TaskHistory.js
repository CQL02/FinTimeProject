import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const taskDatas = [
  {
    id: "1",
    title: "Do Assignment",
    category: "WIA2001 DATA STRUCTURE",
    due: "3/2/2023 11:00 AM",
    description: "andriod studio",
    status: true,
  },
  {
    id: "2",
    title: "Design Poster",
    category: "EVENT PTUM",
    due: "3/5/2023 12:10 PM",
    description: "recruitment poster",
    status: false,
  },
  {
    id: "3",
    title: "research on SPSS",
    category: "WIA2003 PROBABILITY AND STATISTICS",
    due: "3/13/2023 12:00 PM",
    description: "Mann whitney U test, Anova test",
    status: false,
  },
];

export default function TaskList() {
  const [taskData, setTaskData] = useState(taskDatas);

  const sorted = taskData.sort((a, b) => {
    const dateA = new Date(a.due.split("/").reverse().join("-")).getTime();
    const dateB = new Date(b.due.split("/").reverse().join("-")).getTime();
    return dateA - dateB;
  });
  const groupedTasks = sorted.reduce(
    (acc, task) => {
      if (!task.status) {
        acc.false.push(task);
      } else {
        acc.true.push(task);
      }
      return acc;
    },
    { false: [], true: [] }
  );

  const handleToggleStatus = (taskId) => {
    const updatedTasks = taskData.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTaskData(updatedTasks);
  };

  const calRemainTime = (task) => {
    const dueDate = new Date(task.due);
    const currDate = new Date();

    const diffTime = Math.abs(dueDate - currDate);
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    const diffDays = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    if (currDate > dueDate) return;
    else if (diffMonths != 0) return diffMonths + "m";
    else if (diffDays != 0) return diffDays + "d";
    else if (diffHours != 0) return diffHours + "h";
    else if (diffMinutes != 0) return diffMinutes + "m";
    else return diffSeconds + "s";
  };

  const orderedDate = (date) => {
    const parts = date.split("/");
    return parts[1] + "/" + parts[0] + "/" + parts[2];
  };

  return (
    <View>
      <Text style={{ fontSize: 30, margin: 15 }}>Task List:</Text>
      {[...groupedTasks.false, ...groupedTasks.true].map((task) => {
        return (
          <Box
            key={task.id}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Checkbox
              checked={task.status}
              onChange={() => handleToggleStatus(task.id)}
              sx={{ m: 1, width: "10vw" }}
            />

            <Box sx={{ width: "90vw" }}>
              <Text style={{ fontSize: 20 }}>
                <b>{task.title}</b>
              </Text>
              <Text style={{ fontSize: 12 }}>{"\n" + task.category}</Text>
              <Text style={{ fontSize: 12 }}>
                {"\nDue: " + orderedDate(task.due)}
              </Text>
            </Box>

            <Text style={{ textAlign: "right", paddingRight: 20 }}>
              {calRemainTime(task)}
            </Text>
          </Box>
        );
      })}
    </View>
  );
}
