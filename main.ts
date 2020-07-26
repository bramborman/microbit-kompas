function kalibrovat () {
    if (!(kalibrovani)) {
        kalibrovani = true
        input.calibrateCompass()
        kalibrovani = false
    }
}
input.onButtonPressed(Button.AB, function () {
    kalibrovat()
})
function zobrazSipku (uhel: number) {
    if (uhel <= 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (uhel <= 67.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (uhel <= 112.5) {
        basic.showArrow(ArrowNames.West)
    } else if (uhel <= 157.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (uhel <= 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (uhel <= 247.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (uhel <= 292.5) {
        basic.showArrow(ArrowNames.East)
    } else if (uhel <= 337.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
}
let kalibrovani = false
kalibrovani = false
kalibrovat()
basic.forever(function () {
    zobrazSipku(input.compassHeading())
    basic.pause(100)
})
