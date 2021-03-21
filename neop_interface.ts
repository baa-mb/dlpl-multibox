// Gib deinen Code hier ein

/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.microbit.org/blocks/custom
 */





enum selMatrix {
    //% block="Haupt"
    mitte,
    //% block="links"
    links,
    //% block="rechts"
    rechts
}

enum defMatrix {
    //% block="8x8"
    m0,
    //% block="5x7"
    m1,
    //% block="16x16"
    m2
}


/**
 * Benutzerdefinierte Blöcke
 */
//% color=190 weight=100 icon="\uf00a" block="DLPL Neopixel"
namespace DLPLneopixel {

    //% group="Grundeinstellungen"
    
    //% block="Technische Definition der Matrix = %snr Pixelmatrix = %artMatrix" an Pin Nr. = %pinNr
    //% weight=80
    export function definitionMatrix(snr:selMatrix,artMatrix:defMatrix,pinNr:number) {
        console.log(snr+" "+artMatrix+" "+pinNr)     
    }

    
    //% helligkeit.defl=150 zch_pause.defl=2000
    //% block="setze Helligkeit der Pixel = $helligkeit und die Pausen bei Wortausgaben = $zch_pause"
    //% zch_pause.shadow="timePicker"
    //% helligkeit.min=1 helligkeit.max=200
    //% weight=70
    export function all_strip_settings(helligkeit:number,zch_pause:number): void {
        init_all_strips(helligkeit,zch_pause);
    }


    //% group="Befehle"

    
    //% txt.defl="ABC"
    //% block="schreibe auf Matrix = $snr den Text = $txt mit Farbe = $color"
    //% color.shadow="colorNumberPicker"
    //% weight=50
    export function schreibeText(snr:selMatrix,txt: string,color:number): void {
        neop_schreibe_zch(snr,txt,color)
    }



    //% snr.defl=0
    //% block="lösche Matrix = %snr"
    //% weight=30
    export function loescheMatrix(snr:selMatrix) {
        loesche_matrix(snr)
    }


}
