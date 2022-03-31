let 화면 = 0
led.setBrightness(255)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    화면 = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    화면,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(화면)
        if (pins.analogReadPin(AnalogPin.P0) < 300) {
            basic.showLeds(`
                . # # . .
                . # . # .
                . # . # .
                . # . # .
                . # # . .
                `)
        } else if (pins.analogReadPin(AnalogPin.P0) >= 300 || pins.analogReadPin(AnalogPin.P0) < 1000) {
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                # # . # #
                # . # . #
                # . . . #
                # . . . #
                `)
        }
        basic.pause(5000)
    }
})
