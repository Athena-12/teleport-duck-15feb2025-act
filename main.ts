input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("Giraffe")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Giraffe") {
        basic.showIcon(IconNames.Giraffe)
        basic.clearScreen()
    } else if (receivedString == "Heart") {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("Heart")
})
radio.setGroup(11)
