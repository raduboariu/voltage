let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    225
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
})
