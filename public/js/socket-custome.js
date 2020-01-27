var socket = io();

socket.on("connect", function() {
  console.log("contectado al servidor");
});

socket.on("disconnect", function() {
  console.log("perdimos conexion con el servidor");
});

socket.emit(
  "enviarMensaje",
  {
    usuario: "Francisco",
    mensaje: "Hola Mundo"
  },
  function(resp) {
    console.log("respuesta server callback: ", resp);
  }
);

// Escuchar informacion
socket.on("enviarMensaje", function(mensaje) {
  console.log("mensaje del server:", mensaje);
});
