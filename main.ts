let luz = 0
// Iniciar la ejecución continua de la función on_forever
basic.forever(function () {
    // Obtener el nivel de luz
    luz = input.lightLevel()
    // Mostrar un diagrama de barras en función del nivel de luz
    led.plotBarGraph(
    luz,
    255
    )
})
