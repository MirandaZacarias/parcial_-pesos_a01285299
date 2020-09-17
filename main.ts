input.onButtonPressed(Button.A, function () {
    basic.showNumber(Pesos)
    basic.showString("MXN=")
    basic.showNumber(Dolares)
    basic.showString("USD")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Pesos)
    basic.showString("MXN=")
    basic.showNumber(Euros)
    basic.showString("EUR")
})
let Euros = 0
let Dolares = 0
let Pesos = 0
basic.showString("Miranda Z A01285299")
Pesos = 15
Dolares = Pesos * 21.2917
Euros = Pesos * 25.2917
