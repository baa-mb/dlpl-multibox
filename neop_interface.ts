// Gib deinen Code hier ein

/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.microbit.org/blocks/custom
 */





enum nrMatrix {
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

    //% group="Technische Definition"
    //% pin.defl=1    
    //% block="Die Matrix %snr mit Technik %hwMatrix ist an Pin %pin angeschlossen."
    //% weight=80 
    export function definitionMatrix(snr:nrMatrix,hwMatrix:defMatrix,pin:number) {
        init_strip(snr,hwMatrix,pin)
    }

    
    //% helligkeit.defl=150 zch_pause.defl=2000
    //% block="Setze Helligkeit der Pixel auf %helligkeit, Pause bei einer Wortausgabe: %zch_pause ms"
    //% zch_pause.shadow="timePicker"
    //% helligkeit.min=1 helligkeit.max=200
    //% weight=70
    export function all_strip_settings(helligkeit:number,zch_pause:number): void {
        set_helligkeit(helligkeit,zch_pause);
    }


    //% group="Befehle"

    
    //% txt.defl="ABC"
    //% block="Schreibe auf Matrix $snr den Text $txt mit Farbe $color"
    //% color.shadow="colorNumberPicker"
    //% weight=50
    export function schreibeText(snr:nrMatrix,txt: string,color:number): void {
        neop_schreibe_zch(snr,txt,color)
    }

    //% snr.defl=0
    //% block="Lösche Matrix %snr"
    //% weight=30
    export function loescheMatrix(snr:nrMatrix) {
        loesche_matrix(snr)
    }


}
