import { Text, View } from "react-native";
import { Box } from "@mui/material";

const FinanceDatas = [
  {
    id: "1",
    title: "Nasi Lemak KK7",
    category: "Food",
    cost: -7.0,
    date: "2/3/2023",
    description: "nice to eat",
  },
  {
    id: "2",
    title: "belanja ali",
    category: "Food",
    cost: -10.0,
    date: "3/3/2023",
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
  // const [finances, setFinances] = useState(FinanceDatas);

  // const handleTaskStatusChange = (financesId) => (event) => {
  //   const updatedFinances = finances.map((finance) =>
  //     finance.id === financeId ? { ...finance, status: event.target.checked } : finance
  //   );
  //   setTasks(updatedFinances);
  // };

  return (
    <View>
      {FinanceDatas.map((finance) => (
        <Box
          key={finance.id}
          sx={{
            display: "flex",
            flexDirection: "row",
            m: 1,
          }}
        >
          <Box sx={{ width: "70vw" }}>
            <Text style={{ fontSize: 20 }}>
              <b>{finance.title}</b>
            </Text>
            <Text style={{ fontSize: 12 }}>{"\n" + finance.category}</Text>
            <Text style={{ fontSize: 12 }}>{"\n" + finance.date}</Text>
          </Box>
          <Text style={{ textAlign: "left", width: "30vw", fontSize: 25 }}>
            {finance.cost.toFixed(2)}
          </Text>{" "}
        </Box>
      ))}
    </View>
  );
}
