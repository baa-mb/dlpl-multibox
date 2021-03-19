// Gib deinen Code hier ein

/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.microbit.org/blocks/custom
 */

enum MyPin {
    //% block="LinkeMatrix"
    One,
    //% block="RechteMatrix"
    Two
}

/**
 * Benutzerdefinierte Blöcke
 */
//% color=190 weight=100 icon="\uf00a" block="DLPL Neopixel"
//% groups=['Einstellungen', 'Befehle', 'others']
namespace DLPLneopixel {

    //% group="Grundeinstellungen"
    //% weight=100
    //% z.defl="AB"
    //% block="schreibe Text = $z auf Streifen = $st mit Farbe = $color"
    //% color.shadow="colorWheelHsvPicker"
    export function schreibeText(z: string,st:number,color:number): void {
        neop_schreibe_zch(0,z,color)
    }

    //% block="setze Farbe $color"
    //% color.shadow="colorNumberPicker"
    export function setColor(color: number) {
        console.log(color)
    }




    //% group="Hauptbefehle"

    //% block blockGap=0
    export function schreibeZeichen(z:string): void {
        // Add code here neu
        neop_schreibe_zch(0,z,NeoPixelColors.Green);
    }
}
