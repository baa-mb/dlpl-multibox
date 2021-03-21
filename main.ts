

// function init_alphabet() {
//     arr_zeichen_tabelle = [
//         {bst:"?",def: [14,17,1,2,4,0,4]},
//         {bst:"A",def: [14,17,17,31,17,17,17]},
//         {bst:"B",def: [30,17,17,30,17,17,30]},
//         {bst:"C",def: [14,17,16,16,16,17,14]},
//         {bst:"D",def: [28,18,17,17,17,18,28]},
//         {bst:"E",def: [31,16,16,30,16,16,31]},
//         {bst:"F",def: [31,16,16,30,16,16,16]},
//         {bst:"G",def: [14,17,16,23,17,17,14]},
//         {bst:"H",def: [17,17,17,31,17,17,17]},
//         {bst:"I",def: [14,4,4,4,4,4,14]},
//         {bst:"J",def: [15,2,2,2,2,18,12]},
//         {bst:"K",def: [17,18,20,24,20,18,17]},
//         {bst:"L",def: [16,16,16,16,16,16,31]},
//         {bst:"M",def: [17,27,21,21,17,17,17]},
//         {bst:"N",def: [17,17,25,21,19,17,17]},
//         {bst:"O",def: [14,17,17,17,17,17,14]},
//         {bst:"P",def: [30,17,17,30,16,16,16]},
//         {bst:"Q",def: [14,17,17,17,21,18,13]},
//         {bst:"R",def: [30,17,17,30,20,18,17]},
//     	{bst:"S",def: [14,17,16,14,1,17,14]},
//         {bst:"T",def: [31,4,4,4,4,4,4]},
//         {bst:"U",def: [17,17,17,17,17,17,14]},
//         {bst:"V",def: [17,17,17,17,17,10,4]},
//         {bst:"W",def: [17,17,17,21,21,27,17]},
//         {bst:"X",def: [17,17,10,4,10,17,17]},
//         {bst:"Y",def: [17,17,10,4,4,4,4]},
//         {bst:"Z",def: [31,1,2,4,8,16,31]},
//         {bst:"Ä",def: [10,0,4,10,17,31,17]},
//         {bst:"Ö",def: [17,14,17,17,17,17,14]},
//         {bst:"Ü",def: [17,0,17,17,17,0,14]},
//         {bst:"ä",def: [10,0,14,1,15,17,15]},
//         {bst:"ö",def: [10,0,0,14,17,17,14]},
//         {bst:"ü",def: [10,0,0,17,17,17,14]},
//         {bst:"Z",def: [31,1,2,4,8,16,31]},
//         {bst:"0",def: [14,17,19,21,25,17,14]},
//         {bst:"1",def: [4,12,4,4,4,4,14]},
//         {bst:"2",def: [14,17,1,2,4,8,31]},
//         {bst:"3",def: [31,2,4,2,1,17,14]},
//         {bst:"4",def: [2,6,10,18,31,2,2]},
//         {bst:"5",def: [31,16,30,1,1,17,14]},
//         {bst:"6",def: [6,8,16,30,17,17,14]},
//         {bst:"7",def: [31,1,2,4,4,4,4]},
//         {bst:"8",def: [14,17,17,14,17,17,14]},
//         {bst:"9",def: [14,17,17,15,1,2,12]},
//         {bst:"!",def: [4,4,4,4,4,0,4]},
//         {bst:"?",def: [14,17,1,2,4,0,4]},
//         {bst:".",def: [0,0,0,0,0,12,12]},
//         {bst:",",def: [14,17,1,2,4,0,4]},
//         {bst:"*",def: [0,0,4,21,14,21,4]},
//         {bst:"+",def: [0,4,21,14,21,4,0]},
//         {bst:"-",def: [0,0,0,31,0,0,0]},
//         {bst:"=",def: [0,0,31,0,31,0,0]},
//         {bst:"≠",def: [1,2,31,4,31,8,16]},
//         {bst:":",def: [0,12,12,0,12,12,0]},
//         {bst:"%",def: [24,25,2,4,8,19,3]},


            // {bst:"a",def: [0,0,14,1,15,17,15]},
            // {bst:"b",def: [16,16,22,25,17,17,14]},
            // {bst:"c",def: [0,0,14,16,16,17,14]},
            // {bst:"d",def: [1,1,13,19,17,17,15]},
            // {bst:"e",def: [0,0,14,17,31,16,14]},
            // {bst:"f",def: [2,5,4,14,4,4,4]},
            // {bst:"g",def: [0,0,15,17,15,1,14]},
            // {bst:"h",def: [16,16,22,25,17,17,17]},
            // {bst:"i",def: [4,0,12,4,4,4,14]},
            // {bst:"j",def: [2,0,2,2,2,18,12]},
            // {bst:"k",def: [8,8,9,10,12,10,9]},
            // {bst:"l",def: [12,4,4,4,4,4,14]},
            // {bst:"m",def: [0,0,26,21,21,21,21]},
            // {bst:"n",def: [0,0,22,25,17,17,17]},
            // {bst:"o",def: [0,0,14,17,17,17,14]},
            // {bst:"p",def: [0,0,30,17,30,16,16]},
            // {bst:"q",def: [0,0,15,17,15,1,1]},
            // {bst:"r",def: [0,0,11,12,8,8,8]},
            // {bst:"s",def: [0,0,15,16,14,1,30]},
            // {bst:"t",def: [4,14,4,4,4,5,2]},
            // {bst:"u",def: [0,0,17,17,17,19,13]},
            // {bst:"v",def: [0,0,17,17,17,10,4]},
            // {bst:"w",def: [0,0,17,17,17,21,10]},
            // {bst:"x",def: [0,0,25,6,4,12,19]},
            // {bst:"y",def: [0,0,17,9,6,4,24]},
            // {bst:"z",def: [0,0,31,2,4,8,31]},

//         {bst:"#",def: [10,10,31,10,31,10,10]},
//         {bst:"$",def: [4,15,20,14,5,30,4]},
//         {bst:"&",def: [12,18,20,8,21,18,13]},
//         {bst:"(",def: [4,8,16,16,16,8,4]},
//         {bst:")",def: [4,2,1,1,1,2,4]},
//         {bst:"/",def: [1,2,4,8,16,0,0]},

//         {bst:"@",def: [14,17,1,9,21,21,14]},
//         {bst:";",def: [0,12,12,0,12,4,8]},
//         {bst:"<",def: [2,4,8,16,8,4,2]},
//         {bst:">",def: [8,4,2,1,2,4,8]},
       
//         {bst:"[",def: [14,8,8,8,8,8,14]},
//         {bst:"]",def: [14,2,2,2,2,2,14]},
//         {bst:"|",def: [4,4,4,4,4,4,4]},
//         {bst:"{",def: [6,8,8,16,8,8,6]},
//         {bst:"}",def: [12,2,2,1,2,2,12]},
//         {bst:"~",def: [0,0,8,21,2,0,0]},
//         {bst:"€",def: [6,9,28,8,28,9,6]}
        
//     ]
// }


function init_alphabet() {

    bst_reihe="?ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜäöüZ0123456789!?.,*+-=≠:%abcdefghijklmnopqrstuvwxyz#$&()/@;<>[]|{}~€"

    arr_zeichen = [
    [14,17,1,2,4,0,4],
    [14,17,17,31,17,17,17],
    [30,17,17,30,17,17,30],
    [14,17,16,16,16,17,14],
    [28,18,17,17,17,18,28],
    [31,16,16,30,16,16,31],
    [31,16,16,30,16,16,16],
    [14,17,16,23,17,17,14],
    [17,17,17,31,17,17,17],
    [14,4,4,4,4,4,14],
    [15,2,2,2,2,18,12],
    [17,18,20,24,20,18,17],
    [16,16,16,16,16,16,31],
    [17,27,21,21,17,17,17],
    [17,17,25,21,19,17,17],
    [14,17,17,17,17,17,14],
    [30,17,17,30,16,16,16],
    [14,17,17,17,21,18,13],
    [30,17,17,30,20,18,17],
    [14,17,16,14,1,17,14],
    [31,4,4,4,4,4,4],
    [17,17,17,17,17,17,14],
    [17,17,17,17,17,10,4],
    [17,17,17,21,21,27,17],
    [17,17,10,4,10,17,17],
    [17,17,10,4,4,4,4],
    [31,1,2,4,8,16,31],
    [10,0,4,10,17,31,17],
    [17,14,17,17,17,17,14],
    [17,0,17,17,17,0,14],
    [10,0,14,1,15,17,15],
    [10,0,0,14,17,17,14],
    [10,0,0,17,17,17,14],
    [31,1,2,4,8,16,31],
    [14,17,19,21,25,17,14],
    [4,12,4,4,4,4,14],
    [14,17,1,2,4,8,31],
    [31,2,4,2,1,17,14],
    [2,6,10,18,31,2,2],
    [31,16,30,1,1,17,14],
    [6,8,16,30,17,17,14],
    [31,1,2,4,4,4,4],
    [14,17,17,14,17,17,14],
    [14,17,17,15,1,2,12],
    [4,4,4,4,4,0,4],
    [14,17,1,2,4,0,4],
    [0,0,0,0,0,12,12],
    [14,17,1,2,4,0,4],
    [0,0,4,21,14,21,4],
    [0,4,21,14,21,4,0],
    [0,0,0,31,0,0,0],
    [0,0,31,0,31,0,0],
    [1,2,31,4,31,8,16],
    [0,12,12,0,12,12,0],
    [24,25,2,4,8,19,3],
    [0,0,14,1,15,17,15],
    [16,16,22,25,17,17,14],
    [0,0,14,16,16,17,14],
    [1,1,13,19,17,17,15],
    [0,0,14,17,31,16,14],
    [2,5,4,14,4,4,4],
    [0,0,15,17,15,1,14],
    [16,16,22,25,17,17,17],
    [4,0,12,4,4,4,14],
    [2,0,2,2,2,18,12],
    [8,8,9,10,12,10,9],
    [12,4,4,4,4,4,14],
    [0,0,26,21,21,21,21],
    [0,0,22,25,17,17,17],
    [0,0,14,17,17,17,14],
    [0,0,30,17,30,16,16],
    [0,0,15,17,15,1,1],
    [0,0,11,12,8,8,8],
    [0,0,15,16,14,1,30],
    [4,14,4,4,4,5,2],
    [0,0,17,17,17,19,13],
    [0,0,17,17,17,10,4],
    [0,0,17,17,17,21,10],
    [0,0,25,6,4,12,19],
    [0,0,17,9,6,4,24],
    [0,0,31,2,4,8,31],
    [10,10,31,10,31,10,10],
    [4,15,20,14,5,30,4],
    [12,18,20,8,21,18,13],
    [4,8,16,16,16,8,4],
    [4,2,1,1,1,2,4],
    [1,2,4,8,16,0,0],
    [14,17,1,9,21,21,14],
    [0,12,12,0,12,4,8],
    [2,4,8,16,8,4,2],
    [8,4,2,1,2,4,8],
    [14,8,8,8,8,8,14],
    [14,2,2,2,2,2,14],
    [4,4,4,4,4,4,4],
    [6,8,8,16,8,8,6],
    [12,2,2,1,2,2,12],
    [0,0,8,21,2,0,0],
    [6,9,28,8,28,9,6]
    ]

}


input.onButtonPressed(Button.AB, function () {
    let s:number=0;
    //for (let s=0;s<neo_strip_anz;s++) {
        arr_neop_strips[s].clear()
        arr_neop_strips[s].show()
    //}
})


// function neop_reihe(snr:number,y:number=0) {
//     for (let x = 0; x < arr_neop_settings[snr].hwMatrix[0]; x++) {
//         neop_schreibe_zch(snr,"#")
//         pause(500)
//     }
// }
// function neop_spalte(snr:number,x:number=0) {
//     let mx=arr_neop_settings[snr].hwMatrix[0];
//     let my=arr_neop_settings[snr].hwMatrix[1];
//     for (let y:number = 0; y < arr_neop_settings[snr].hwMatrix[1]; y++) {
//         neop_schreibe_zch(snr,"-")
//         shift=(mx*2 -1 + shift--) % mx;
//         pause(500)
//     }
// }


function neop_schreibe_zch (snr:number,zch_str:string="A",color:number) {
    let zeichen_matrix:Array<number>=[]

    let mx=arr_neop_settings[snr].hwMatrix[0];
    let my=arr_neop_settings[snr].hwMatrix[1];
    
    let is_type=0 
 
    let zch_len=zch_str.length
    if (zch_len>1) {
        is_type=1; //wort
        //let arr_split;
        let arr_split=zch_str.split(",")
        if (arr_split.length>4) {
            is_type=2; //array
            //zeichen_matrix=arr_split.map(wert => function ():number {return Number(wert)} );
            zeichen_matrix=arr_split.map(wert => parseInt(wert));
            zch_len=1;
        }
    } 
    
    for (let n=0;n<zch_len;n++) {
        if (is_type<2) { //no array
            let zch:string = zch_str[n]
            //let found=arr_zeichen_tabelle.find(elem => elem.bst === zch);
            let found=bst_reihe.indexOf(zch);
           
            if (found==-1) {
                found=0;
            }
            zeichen_matrix=arr_zeichen[found]
       }        
        arr_neop_strips[snr].clear()
        arr_neop_strips[snr].show()

        zeichen_matrix.forEach (function(zahl,zeile) {
            //console.log("zahl= "+zahl+" Zeile="+zeile+" mx="+mx)
            for (let bit=0;bit<mx;bit++) {
                let z=zeile, b=bit //7- minus
                //b=z, z=bit
                //b=z, z=mx-1-bit
                if (zahl & Math.pow(2,(bit+shift) % mx)) {
                    let px = z * mx + ((z % 2) ? (mx-1-b):b)
                    // arr_neop_strips[snr].setPixelColor(px, arr_neop_settings[snr].farbe)
                    arr_neop_strips[snr].setPixelColor(px, color);
                }
            }
        })
        arr_neop_strips[snr].show()
        if (is_type==1) {
            pause (strip_pause)
        }
    }    
}

function loesche_matrix(snr:number) {
    arr_neop_strips[snr].clear()
    arr_neop_strips[snr].show()
}
// Create and INIT #####################################
function init_neop_create(snr:number) {
    let anz=arr_neop_strips.length;
    let pin=arr_neop_settings[snr].pin;
    let farbe=neopixel.colors(NeoPixelColors.Red);
    let pixelAnzahl=arr_neop_settings[snr].hwMatrix[0] * arr_neop_settings[snr].hwMatrix [1];

    let strip=neopixel.create(pin, pixelAnzahl, NeoPixelMode.RGB)
    arr_neop_strips.push(strip)

    strip.setBrightness(strip_helligkeit)

    //console.log("hell:"+strip_helligkeit);
    strip.clear()
    strip.show()

}


function init_strip_serie() {
    for (let i=0;i<neo_strip_anzahl;i++) {
        init_neop_create(i);
        // init_one_strip(i);
    }
}
function default_strip_data() {
    arr_neop_settings.push({pin:arr_tech_pin[0],hwMatrix:arr_tech_matrix[0]}) 
    arr_neop_settings.push({pin:arr_tech_pin[1],hwMatrix:arr_tech_matrix[1]}) 
    arr_neop_settings.push({pin:arr_tech_pin[2],hwMatrix:arr_tech_matrix[1]}) 
}

function init_all_strips(helligkeit:number,zch_pause:number) {
    strip_helligkeit=helligkeit;
    strip_pause=zch_pause;
    //console.log("helligkeit"+strip_helligkeit)
    for (let i=0;i<neo_strip_anzahl;i++) {
         arr_neop_strips[i].setBrightness(strip_helligkeit);
         //console.log(i+" "+strip_helligkeit)
         // init_one_strip(i);
    }
}

function zerlege() {
    arr_zeichen_tabelle.forEach(function(obj) {
        console.log("["+obj.def.join(",")+"],")
    })
    arr_zeichen_tabelle.forEach(function(obj) {
        console.log(obj.bst)
    })
}

// testbetrieb
function test() {
    //console.log(arr_zeichen_tabelle.length);
    neop_schreibe_zch(0,"31,31,17,31,31",NeoPixelColors.Red)
    pause (3000)
    if (neo_strip_anzahl>1) neop_schreibe_zch(0,"AB",NeoPixelColors.Green)
    if (neo_strip_anzahl>2) neop_schreibe_zch(2,"12340",NeoPixelColors.Blue)
}


// variable ########################################
interface neop  {
    pin: number;
    hwMatrix: Array<number>;
}

interface zch_tab {
  bst: string;
  def: Array<number>;
}

// hardwareeinstellungen ########################### 3 Matriken
let arr_tech_matrix=[[8,8],[5,7],[16,16]];
let arr_tech_pin=[DigitalPin.P1,DigitalPin.P2,DigitalPin.P8];
// hardwareeinstellungen end ###########################


let bst_muster=[31,31,31,31,31,31,31,31];
let shift:number=0
let strip_helligkeit:number=100;
let strip_pause:number=2000;


let arr_neop_strips:Array<neopixel.Strip>=[]
let arr_neop_settings:Array<neop>=[]

let arr_zeichen:number[][];
let bst_reihe:string="";


let arr_zeichen_tabelle:Array<zch_tab>;
let neo_strip_anzahl:number=3;
// ende variable

//beginn initialisierung ############################
init_alphabet();
default_strip_data();
init_strip_serie();
basic.showIcon(IconNames.Yes)
// ende Initialisierung

//test();
//zerlege()
