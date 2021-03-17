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
    //% block weight=100
    export function neopixelInit(z: string): void {
        // Add code here
        neop_schreibe_zch(z)
    }
    //% group="Hauptbefehle"

    //% block="schreibe Zeichen" blockGap=0
    export function schreibeZeichen(z: string="A"): void {
        // Add code here
        neop_schreibe_zch(z)
    }


    //% block="schreibe Wort" blockGap=0
    export function schreibeWort(w:string="Hallo"): void {
        // Add code here
        neop_schreibe_wort(w)
    }


}
