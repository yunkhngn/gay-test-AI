import "./App.css";
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import Tilt from "react-parallax-tilt";

function App() {
  return (
    <div className="App">
      <Tilt options={{ max: "100%" }}>
        <Card
          sx={{
            maxWidth: "100%",
            bgcolor: "white",
            color: "black",
            justifyContent: "center",
            textAlign: "center",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          }}
        >
          <CardMedia
            component="img"
            height="300px"
            image="https://i.kym-cdn.com/entries/icons/original/000/044/016/%F0%9F%8F%B3%EF%B8%8F_%F0%9F%8C%88_meme.jpg"
            alt="img dish"
          />
          <CardHeader
            title="Are you gei 🏳️‍🌈?"
            subheader="100% sure if you are gei or not, calculation based on Google AI's database."
          ></CardHeader>
          <CardContent>
            <Typography variant="subtitle1">
              Click the button for calculation
            </Typography>
            <Button variant="contained" color="success">
              Check
            </Button>
          </CardContent>
        </Card>
      </Tilt>
    </div>
  );
}

export default App;
