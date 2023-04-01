import { Text, View, Modal, TouchableOpacity } from "react-native";
import { Box, IconButton, Button } from "@mui/material";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

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

  const [selectData, setSelectData] = useState(null);
  const handleSelectedData = (data) => {
    setSelectData(data);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

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
                <div
                  key={finance.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 1,
                    marginLeft: 2,
                  }}
                >
                  <Box
                    sx={{ width: "60vw" }}
                    onClick={() => {
                      handleSelectedData(finance);
                      handleOpen();
                    }}
                  >
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

                  {selectData && (
                    <Modal
                      visible={isOpen}
                      animationType="slide"
                      transparent={true}
                    >
                      <View style={{ flex: 1, justifyContent: "center" }}>
                        <View style={{ backgroundColor: "#fff", padding: 20 }}>
                          <IconButton
                            onClick={() => handleClose()}
                            sx={{ marginLeft: "auto" }}
                          >
                            <CloseIcon />
                          </IconButton>
                          <Box sx={{ padding: 2 }}>
                            <Text style={{ fontSize: "20px" }}>
                              Title: {selectData.title}
                              {"\n"}
                              {"\n"}
                            </Text>

                            <Text style={{ fontSize: "20px" }}>
                              Category: {selectData.category}
                              {"\n"}
                              {"\n"}
                            </Text>

                            <Text style={{ fontSize: "20px" }}>
                              Cost: RM{selectData.cost}
                              {"\n"}
                              {"\n"}
                            </Text>

                            <Text style={{ fontSize: "20px" }}>
                              Date: {selectData.date}
                              {"\n"}
                              {"\n"}
                            </Text>

                            <Text style={{ fontSize: "20px" }}>
                              Description: {selectData.description}
                              {"\n"}
                              {"\n"}
                            </Text>

                            <Button
                              variant="contained"
                              sx={{ width: "40vw", float: "right" }}
                            >
                              DELETE
                            </Button>
                          </Box>
                        </View>
                      </View>
                    </Modal>
                  )}
                </div>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
