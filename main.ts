input.onButtonPressed(Button.A, function () {
    steps += 1
    if (steps == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        test = 0
    } else if (steps == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        test = 180
    } else if (steps == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        test = 90
    } else {
        steps = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    SuperBit.Music(SuperBit.enMusic.dadadum)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, test)
})
let test = 0
let steps = 0
basic.showIcon(IconNames.Heart)
steps = 0
basic.pause(1000)
