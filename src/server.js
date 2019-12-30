import express from "express";
import {join} from "path";
import socketIO from "socket.io";

const app = express();
const PORT = 4000;
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () =>console.log(`server runnings: https://localhost:${PORT}`);
const server = app.listen(PORT, handleListening);

const io = socketIO(server);