radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 180) {
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 90) {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
