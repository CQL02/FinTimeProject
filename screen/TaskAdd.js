import { MenuItem, MenuList, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Text, View } from "react-native";
import dayjs from "dayjs";

const categories = [
  {
    code: "WIA2001",
    value: "DATA STRUCTURE",
  },
  {
    code: "WIA2002",
    value: "BASIC ENTREPENUERSHIP",
  },
  {
    code: "EVENT",
    value: "PTUM",
  },
  {
    code: "OTHERS",
    value: "HOUSE CHORES",
  },
];

export default function FinanceAdd() {
  /* category field */
  const [category, setCategory] = useState("");
  const handleCatChange = (event) => {
    setCategory(event.target.value);
  };

  /* date field */
  const [dueDate, setDueDate] = useState(dayjs(new Date()));
  const handleDueDateChange = (newDueDate) => {
    setDueDate(newDueDate);
  };

  return (
    <Box autoComplete="off">
      <Stack spacing={2}>
        <div>
          <Text style={{ fontSize: "20px" }}>Title: </Text>
          <TextField variant="standard" sx={{ fontSize: "20px" }} />
        </div>

        <div>
          <Text style={{ fontSize: "20px" }}>Category: </Text>
          <TextField
            variant="standard"
            select
            sx={{ fontSize: "20px", width: "25ch" }}
            value={category}
            onChange={handleCatChange}
          >
            {categories.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.code + " " + option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <Text style={{ fontSize: "20px" }}>Due Date: </Text>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              inputFormat="DD/MM/YYYY"
              value={dueDate}
              onChange={handleDueDateChange}
              renderInput={(params) => (
                <TextField {...params} variant="standard" />
              )}
            />
          </LocalizationProvider>
        </div>

        <div>
          <Text style={{ fontSize: "20px" }}>Description: </Text>
          <TextField
            multiline
            maxRows={3}
            variant="standard"
            sx={{ fontSize: "20px" }}
          />
        </div>
      </Stack>
    </Box>
  );
}
