def on_forever():
    # Obtener el nivel de luz
    luz = input.light_level()
    
    # Mostrar un diagrama de barras en función del nivel de luz
    led.plot_bar_graph(luz, 255)

# Iniciar la ejecución continua de la función on_forever
basic.forever(on_forever)
