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
    //% block="schreibe auf Pixelmatrix = $snr den Text = $txt mit Farbe = $color"
    //% color.shadow="colorNumberPicker"
    export function schreibeText(snr:number,txt: string,color:number): void {
        neop_schreibe_zch(snr,txt,color)
    }


    //% helligkeit.defl=150 zch_pause.defl=2000
    //% block="setze Helligkeit der Pixel = $helligkeit und die Pausen bei Wortausgaben = $zch_pause"
    //% color.shadow="colorNumberPicker"
    export function all_strip_settings(helligkeit:number,zch_pause:number): void {
        init_all_strips(helligkeit,zch_pause);
    }


    //% block="setze Farbe $color"
    //% color.shadow="colorNumberPicker"
    export function setColor(color: number) {
        console.log(color)
    }

}
