// Gib deinen Code hier ein

/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.microbit.org/blocks/custom
 */

enum selMatrix {
    //% block="Matrix Mitte"
    mitte,
    //% block="Matrix links"
    links,
    //% block="Matrix rechts"
    rechts
}

enum defMatrix {
    //% block="Matrix 5x7"
    m5,
    //% block="Matrix 8x8"
    m8,
    //% block="Matrix 16x16"
    m16
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
    //% block="schreibe auf = $snr den Text = $txt mit Farbe = $color"
    //% color.shadow="colorNumberPicker"
    export function schreibeText(snr:selMatrix,txt: string,color:number): void {
        neop_schreibe_zch(snr,txt,color)
    }


    //% helligkeit.defl=150 zch_pause.defl=2000
    //% block="setze Helligkeit der Pixel = $helligkeit und die Pausen bei Wortausgaben = $zch_pause"
    //% zch_pause.shadow="timePicker"
    //% helligkeit.min=5 helligkeit.max=200
    export function all_strip_settings(helligkeit:number,zch_pause:number): void {
        // init_all_strips(helligkeit,zch_pause);
        init_all_strips(10,3000);
    }


    //% block="setze Farbe $color"
    //% color.shadow="colorNumberPicker"
    export function definitionMatrix(snr:selMatrix,artMatrix:defMatrix) {
        console.log(snr+" "+artMatrix)       
    }

}
