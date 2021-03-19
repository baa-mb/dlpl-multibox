

let bst_nr:number=0;
input.onButtonPressed(Button.A, function () {
    let mx=neop.hardwarepixel[0];
    let my=neop.hardwarepixel[1];
    //shift=(mx*2 -1 + shift--) % mx;
    //neop_schreibe_zch();
    //bst_nr++;
    let anz=arr_zeichen_tabelle.length
    //neop_schreibe_zch(alphabet[(++bst_nr % anz)])
    neop_schreibe_zch(akt_snr,arr_zeichen_tabelle[(++bst_nr % anz)].bst)
})
input.onButtonPressed(Button.B, function () {
    neop_reihe(7);
    //    neop_spalte(7)
    //neop_schreibe_zch();
})

input.onButtonPressed(Button.AB, function () {
    arr_neop_strip[0].clear()
    arr_neop_strip[0].show()
})


function neop_reihe(snr:number,y:number=0) {
    for (let x = 0; x < neop.hardwarepixel[0]; x++) {
        neop_schreibe_zch(snr,"#")
        pause(500)
    }
}
function neop_spalte(snr:number,x:number=0) {
    let mx=neop.hardwarepixel[0];
    let my=neop.hardwarepixel[1];
    for (let y:number = 0; y < neop.hardwarepixel[1]; y++) {
        neop_schreibe_zch(snr,"-")
        shift=(mx*2 -1 + shift--) % mx;
        pause(500)
    }
}

function init_neop_create(pin:number=1, matrix:Array<number>, farbe:number) {
    let hardwarepixelanzahl=matrix[0]*matrix[1];
    arr_neop_strip.push(neopixel.create(pin, hardwarepixelanzahl, farbe))

}


function init_neop_init(snr:number) {
    arr_neop_strip[snr].setBrightness(neop.helligkeit)
    arr_neop_strip[snr].clear()
    arr_neop_strip[snr].show()
}

function neop_schreibe_zch (snr:number,zch:string="A") {
    let mx=neop.hardwarepixel[0];
    let my=neop.hardwarepixel[1];
    let zeichen_matrix:Array<number>=[]
    let found=arr_zeichen_tabelle.find(elem => elem.bst === zch);
    if (found) {
        zeichen_matrix=found.def
    } else {
        zeichen_matrix=arr_zeichen_tabelle.find(elem => elem.bst === 'x').def
    }

    //console.log(zeichen_matrix);
    if (zch=="#") {
        zeichen_matrix=neop.muster;
    }
    
    arr_neop_strip[snr].clear()
    arr_neop_strip[snr].show()
    //basic.showString(zch)
    zeichen_matrix.forEach (function(zahl,zeile) {
        for (let bit=0;bit<mx;bit++) {
            let z=zeile, b=bit //7- minus
            //b=z, z=bit
            //b=z, z=mx-1-bit
            if (zahl & Math.pow(2,(bit+shift) % mx)) {
                let px = z * my + ((z % 2) ? (mx-1-b):b)
                arr_neop_strip[snr].setPixelColor(px, neop.farbe)
            }
        }
    })
    arr_neop_strip[snr].show()
}

function neop_schreibe_wort(snr:number,wort:string) {
   //let wort:string="BaCHINGER#"
//    if (typeof wort == "number") {
//        wort=wort.toString();
//    }
   
   for (let b:number=0;b<wort.length;b++) {
       neop_schreibe_zch(snr,wort[b]);
       pause (neop.wortPause)
   }
}



function init_zeichen() {
    arr_zeichen_tabelle = [
        {bst:"#",def: [31]},
        {bst:"x",def: [31]},
        {bst:"A",def: [31,17,17,31,17,17,17]},
        {bst:"B",def: [30,17,17,31,17,17,30]},
        {bst:"C",def: [31,16,16,16,16,16,31]},
        {bst:"D",def: [30,17,17,17,17,17,30]},
        {bst:"E",def: [31,16,16,30,16,16,31]},
        {bst:"F",def: [31,16,16,30,16,16,16]},
        {bst:"G",def: [31,16,16,19,17,17,31]},
        {bst:"H",def: [17,17,17,31,17,17,17]},
        {bst:"I",def: [14,4,4,4,4,4,14]},

        {bst:"J",def: [17,17,17,31,17,17,17]},
        {bst:"K",def: [17,17,17,31,17,17,17]},
        {bst:"L",def: [16,16,16,16,16,31]},
        {bst:"M",def: [17,17,17,31,17,17,17]},
        {bst:"N",def: [17,17,17,31,17,17,17]},
        {bst:"O",def: [17,17,17,31,17,17,17]},
        {bst:"P",def: [17,17,17,31,17,17,17]},
        {bst:"Q",def: [17,17,17,31,17,17,17]},
        {bst:"R",def: [17,17,17,31,17,17,17]},
        {bst:"T",def: [17,17,17,31,17,17,17]},
        {bst:"U",def: [17,17,17,31,17,17,17]},
        {bst:"V",def: [17,17,17,31,17,17,17]},
        {bst:"W",def: [17,17,17,31,17,17,17]},
        {bst:"X",def: [17,17,17,31,17,17,17]},
        {bst:"Y",def: [17,17,17,31,17,17,17]},
        {bst:"Z",def: [17,17,17,31,17,17,17]},
        {bst:"0",def: [31,17,17,31,17,17,31]},
        {bst:"1",def: [4,12,20,4,4,4,4]},
        {bst:"2",def: [31,1,1,31,16,16,31]},
        {bst:"3",def: [31,1,1,6,1,1,31]},
        {bst:"4",def: [18,18,18,31,2,2,2]},
        {bst:"5",def: [31,16,16,15,1,17,31]},
        {bst:"6",def: [17,17,17,31,17,17,17]},
        {bst:"7",def: [17,17,17,31,17,17,17]},
        {bst:"8",def: [17,17,17,31,17,17,17]},
        {bst:"9",def: [17,17,17,31,17,17,17]},
        {bst:"!",def: [17,17,17,31,17,17,17]},
        {bst:"?",def: [17,17,17,31,17,17,17]},
        {bst:"€",def: [17,17,17,31,17,17,17]}
    ]
}

function tests () {
    //let arr_zeichen_matrix
    // console.log(arr_zeichen_exists)
    // let arr_zeichen_exists:Array<string>=[];

    // arr_zeichen_tabelle.forEach (function (wert,index) {
    //     console.log(index + " " + wert.bst)
    // })
    //neop_schreibe_zch("B")

    // let wort:string="BaCHINGER#"
    // for (let b:number=0;b<wort.length;b++) {
    //     neop_schreibe_zch(wort[b]);
    //     pause (1000)
    // }

}


// Variable
let neop = {
    pin: DigitalPin.P1,
    hardwarepixel: [8,8],
    helligkeit: 50,
    farbe: 0x0000FF,
    softwarepixel: [8,8],
    muster: [31,31,17,17,17,31,31],
    wortPause: 2000   
}

interface zch_tab {
  bst: string;
  def: Array<number>;
}

let arr_farben=[0xFF0000,0xFFA500,0xFFFF00,0x00FF00,0x0000FF,0x4b0082,0x8a2be2,0xFF00FF,0xFFFFFF,0x000000]
let arr_zeichen_tabelle:Array<zch_tab>;
init_zeichen();

let shift=0
// let arr_neop_strip:Array<neopixel.Strip>

//let arr_neop_strip=[]
let arr_neop_strip:Array<neopixel.Strip>=[]

init_neop_create(DigitalPin.P1,[8,5],NeoPixelColors.Red)
init_neop_init(0)

basic.showIcon(IconNames.Yes)


neop_schreibe_zch(0,"L")


let akt_snr=0;