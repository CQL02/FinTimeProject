import { Text, View } from "react-native";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

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
];

export default function FinancHistory() {
  const [arrangedData, setArrangedData] = useState({});
  useEffect(() => {
    const sorted = FinanceDatas.sort((a, b) => {
      const dateA = new Date(a.date.split("/").reverse().join("-")).getTime();
      const dateB = new Date(b.date.split("/").reverse().join("-")).getTime();
      return dateB - dateA;
    });
    const arrange = sorted.reduce((accumulator, currentValue) => {
      const date = currentValue.date;
      if (!accumulator[date]) accumulator[date] = [];
      accumulator[date].push(currentValue);
      return accumulator;
    }, {});

    setArrangedData(arrange);
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 30, margin: 15 }}>Usage:</Text>

      {Object.keys(arrangedData).map((date) => {
        return (
          <View key={date}>
            <Text
              style={{
                fontSize: 25,
                backgroundColor: "gray",
                paddingLeft: 15,
              }}
            >
              {date}
            </Text>

            {arrangedData[date].map((finance) => {
              return (
                <Box
                  key={finance.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mb: 1,
                    ml: 2,
                  }}
                >
                  <Box sx={{ width: "60vw" }}>
                    <Text style={{ fontSize: 20 }}>
                      <b>{finance.title}</b>
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      {"\n\t" + finance.category}
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      {"\n\t" + finance.date}
                    </Text>
                  </Box>

                  {finance.category === "Return" ? (
                    <Text
                      style={{
                        textAlign: "left",
                        width: "40vw",
                        fontSize: 25,
                        color: "green",
                      }}
                    >
                      + RM {finance.cost.toFixed(2)}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        textAlign: "left",
                        width: "40vw",
                        fontSize: 25,
                        color: "red",
                      }}
                    >
                      - RM {finance.cost.toFixed(2)}
                    </Text>
                  )}
                </Box>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
