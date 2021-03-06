let reading = 0
let number = 0
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    number = Math.idiv(reading, 50)
    if (number <= 5) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.playMelody("C E C E C E C E ", 120)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        led.plot(2, 2)
        basic.pause(100)
        led.unplot(2, 2)
        basic.pause(1000)
    }
})
