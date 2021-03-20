// Gib deinen Code hier ein

/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.microbit.org/blocks/custom
 */



enum selMatrix {
    //% block="Mitte"
    //% colorSecondary="#FFFFFF"
    mitte,
    //% block="links"
    links,
    //% block="rechts"
    rechts
}

enum defMatrix {
    //% colorSecondary="#FFFFFF"
    //% block="5x7"
    m0,
    //% block="8x8"
    m1,
    //% block="16x16"
    m2
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
    //% block="schreibe auf Matrix = $snr den Text = $txt mit Farbe = $color"
    //% color.shadow="colorNumberPicker"
    export function schreibeText(snr:selMatrix,txt: string,color:number): void {
        console.log("zeige console")
        neop_schreibe_zch(snr,txt,color)
    }


    //% helligkeit.defl=150 zch_pause.defl=2000
    //% block="setze Helligkeit der Pixel = $helligkeit und die Pausen bei Wortausgaben = $zch_pause"
    //% zch_pause.shadow="timePicker"
    //% helligkeit.min=1 helligkeit.max=200
    export function all_strip_settings(helligkeit:number,zch_pause:number): void {
        init_all_strips(helligkeit,zch_pause);
    }

    //% block="Technische Definition der Matrix = %snr Pixelmatrix = %artMatrix"
    export function definitionMatrix(snr:selMatrix,artMatrix:defMatrix) {
        console.log(snr+" "+artMatrix)     
    }

}
