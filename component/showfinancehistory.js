import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { Text } from "react-native";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";

const FinanceDatas = [
  {
    id: "1",
    title: "Nasi Lemak KK7",
    category: "Food",
    cost: 7.0,
    date: "2/3/2023",
    description: "nice to eat",
  },
  {
    id: "2",
    title: "belanja ali",
    category: "Food",
    cost: 10.0,
    date: "2/3/2023",
    description: "gongcha",
  },
  {
    id: "3",
    title: "ali return money",
    category: "Return",
    cost: 20.2,
    date: "13/3/2023",
    description: "Grab money",
  },
  {
    id: "4",
    title: "abu return money",
    category: "Return",
    cost: 25.6,
    date: "13/3/2023",
    description: "Grab money",
  },
  {
    id: "5",
    title: "abu return money",
    category: "Return",
    cost: 25.6,
    date: "13/3/2023",
    description: "Grab money",
  },
  {
    id: "6",
    title: "abu return money",
    category: "Return",
    cost: 25.6,
    date: "13/3/2023",
    description: "Grab money",
  },
];

const calUsed = (data) => {
  const total_cost = data.reduce((acc, item) => acc + item.cost, 0);
  return total_cost;
};

const calLeft = (budget, used) => {
  return budget - used;
};

export default function showfinancehistory() {
  const [budget, setBudget] = useState(0);
  const handleSetBudget = (event) => {
    setBudget(event.target.value);
  };

  const [editBudget, setEditBudget] = useState(false);
  const handleSetEditBudgetTrue = () => {
    setEditBudget(true);
  };
  const handleSetEditBudgetFalse = () => {
    setEditBudget(false);
  };

  return (
    <Box sx={{ ml: 10, mr: 10, mt: 2, bgcolor: "orange", borderRadius: 5 }}>
      <Text style={{ fontSize: 25, margin: 15, display: "flex" }}>
        Budget:{" "}
        {editBudget ? (
          <Box sx={{ flexDirection: "row", alignItems: "center" }}>
            <TextField
              value={budget}
              onChange={handleSetBudget}
              variant="standard"
              sx={{ width: "50px" }}
            />
            <IconButton onClick={() => handleSetEditBudgetFalse()}>
              <DoneIcon />
            </IconButton>
          </Box>
        ) : (
          <Box
            sx={{ flexDirection: "row", alignItems: "center", display: "flex" }}
          >
            <Text>{budget}</Text>
            <IconButton onClick={() => handleSetEditBudgetTrue()}>
              <EditIcon />
            </IconButton>
          </Box>
        )}
      </Text>

      <Text style={{ fontSize: 25, margin: 15, display: "flex" }}>
        Used: {calUsed(FinanceDatas) + "\n"}
      </Text>
      <Text style={{ fontSize: 25, margin: 15, display: "flex" }}>
        Left: {calLeft(budget, calUsed(FinanceDatas)) + "\n"}
      </Text>
    </Box>
  );
}
