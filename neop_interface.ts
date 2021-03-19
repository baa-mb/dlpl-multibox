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
    //% txt.defl="ABC"
    //% block="schreibe auf Streifen = $snr einen Text = $txt mit Farbe = $color"
    //% color.shadow="colorNumberPicker"
    export function schreibeText(snr:number,txt: string,color:number): void {
        neop_schreibe_zch(snr,txt,color)
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
