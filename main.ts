radio.onReceivedString(function (receivedString) {
    OLED.writeStringNewLine(receivedString)
})
let light2 = 0
OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P1)
    OLED.writeString("Lysniveau")
    OLED.writeNum(light2)
    OLED.clear()
    if (light2 < 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (false) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
