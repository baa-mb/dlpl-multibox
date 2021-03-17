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
    /**
     * TODO: Beschreibe deine Funktion hier
     * @param n Beschreibe die Parameter hier, eg: 5
     * @param s Beschreibe die Parameter hier, eg: "Hello"
     * @param e Beschreibe die Parameter hier
     */

    //% group="Grundeinstellungen"
    //% block weight=100
    export function NeopixelInit(z: string): void {
        // Add code here
        neop_schreibe_zch(z)
    }
    //% group="Hauptbefehle"
    //% 
    //% block blockGap=0
    export function schreibe_wort(w:string): void {
        // Add code here
        neop_schreibe_wort(w)
    }
    export function schreibe_zeichen(z: string): void {
        // Add code here
        neop_schreibe_zch(z)
    }


    /**
     * TODO: Beschreibe deine Funktion hier
     * @param value Beschreibe den Wert hier, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
