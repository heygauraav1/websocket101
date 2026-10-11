import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
    console.log("New connection established");
    // const interval = setInterval(() => {
    //     socket.send("Current time solana price is " + Math.random());
    // }, 500);

    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });

});

