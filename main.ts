let valeur = 0
let valeur1 = 0
function bleu () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
basic.forever(function () {
    valeur = pins.analogReadPin(AnalogPin.P0)
    valeur1 = pins.map(
    valeur,
    1,
    1023,
    0,
    4
    )
    if (valeur1 == 1) {
        vert()
    } else if (valeur1 == 1023) {
        Rouge()
    } else {
        blanc()
    }
})
