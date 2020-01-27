const { io } = require("../server");

// IO = esta es la comunicacion del backend
io.on("connection", client => {
  console.log("usuario conectado");

  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido a esta app"
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // escuchar el cliente
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);

    client.broadcast.emit("enviarMensaje", data);

    /*if (mensaje.usuario) {
      callback({
        resp: "Todo salió bien"
      });
    } else {
      callback({
        resp: "todo salió mal"
      });
    }*/
  });
});
