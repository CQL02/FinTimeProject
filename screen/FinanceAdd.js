import { Button, MenuItem, MenuList, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Text, View } from "react-native";
import dayjs from "dayjs";

const categories = [
  {
    value: "Food",
  },
  {
    value: "Gift",
  },
  {
    value: "Return",
  },
  {
    value: "Transportation",
  },
];

export default function FinanceAdd() {
  /* category field */
  const [category, setCategory] = useState("Food");
  const handleCatChange = (event) => {
    setCategory(event.target.value);
  };

  /* date field */
  const [date, setDate] = useState(dayjs(new Date()));
  const handleDateChange = (newDate) => {
    setDate(newDate);
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
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <Text style={{ fontSize: "20px" }}>Cost: RM</Text>
          <TextField
            variant="standard"
            type="number"
            sx={{ fontSize: "20px" }}
          />
        </div>

        <div>
          <Text style={{ fontSize: "20px" }}>Date: </Text>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={handleDateChange}
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

        <Stack direction="row" justifyContent="space-evenly">
          <Button variant="contained" sx={{ width: "40vw" }}>
            CLEAR
          </Button>
          <Button variant="contained" sx={{ width: "40vw" }}>
            SAVE
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
