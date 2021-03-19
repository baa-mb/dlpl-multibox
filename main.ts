

function init_alphabet() {
    arr_zeichen_tabelle = [
        {bst:"?",def: [14,17,1,2,4,0,4]},
        {bst:"A",def: [14,17,17,31,17,17,17]},
        {bst:"B",def: [30,17,17,30,17,17,30]},
        {bst:"C",def: [14,17,16,16,16,17,14]},
        {bst:"D",def: [28,18,17,17,17,18,28]},
        {bst:"E",def: [31,16,16,30,16,16,31]},
        {bst:"F",def: [31,16,16,30,16,16,16]},
        {bst:"G",def: [14,17,16,23,17,17,14]},
        {bst:"H",def: [17,17,17,31,17,17,17]},
        {bst:"I",def: [14,4,4,4,4,4,14]},
        {bst:"J",def: [15,2,2,2,2,18,12]},
        {bst:"K",def: [17,18,20,24,20,18,17]},
        {bst:"L",def: [16,16,16,16,16,16,31]},
        {bst:"M",def: [17,27,21,21,17,17,17]},
        {bst:"N",def: [17,17,25,21,19,17,17]},
        {bst:"O",def: [14,17,17,17,17,17,14]},
        {bst:"P",def: [30,17,17,30,16,16,16]},
        {bst:"Q",def: [14,17,17,17,21,18,13]},
        {bst:"R",def: [30,17,17,30,20,18,17]},
    	{bst:"S",def: [14,17,16,14,1,17,14]},
        {bst:"T",def: [31,4,4,4,4,4,4]},
        {bst:"U",def: [17,17,17,17,17,17,14]},
        {bst:"V",def: [17,17,17,17,17,10,4]},
        {bst:"W",def: [17,17,17,21,21,27,17]},
        {bst:"X",def: [17,17,10,4,10,17,17]},
        {bst:"Y",def: [17,17,10,4,4,4,4]},
        {bst:"Z",def: [31,1,2,4,8,16,31]},
        {bst:"Ä",def: [10,0,4,10,17,31,17]},
        {bst:"Ö",def: [17,14,17,17,17,17,14]},
        {bst:"Ü",def: [17,0,17,17,17,14]},
        {bst:"ä",def: [10,0,14,1,15,17,15]},
        {bst:"ö",def: [10,0,0,14,17,17,14]},
        {bst:"ü",def: [10,0,0,17,17,17,14]},
        {bst:"Z",def: [31,1,2,4,8,16,31]},
        {bst:"0",def: [14,17,19,21,25,17,14]},
        {bst:"1",def: [4,12,4,4,4,4,14]},
        {bst:"2",def: [14,17,1,2,4,8,31]},
        {bst:"3",def: [31,2,4,2,1,17,14]},
        {bst:"4",def: [2,6,10,18,31,2,2]},
        {bst:"5",def: [31,16,30,1,1,17,14]},
        {bst:"6",def: [6,8,16,30,17,17,14]},
        {bst:"7",def: [31,1,2,4,4,4,4]},
        {bst:"8",def: [14,17,17,14,17,17,14]},
        {bst:"9",def: [14,17,17,15,1,2,12]},
        {bst:"!",def: [4,4,4,4,4,0,4]},
        {bst:"?",def: [14,17,1,2,4,0,4]},
        {bst:".",def: [0,0,0,0,0,12,12]},
        {bst:",",def: [14,17,1,2,4,0,4]},
        {bst:"*",def: [0,0,4,21,14,21,4]},
        {bst:"+",def: [0,4,21,14,21,4,0]},
        {bst:"-",def: [0,0,0,31,0,0]},
        {bst:"=",def: [0,0,31,0,31,0,0]},
        {bst:"≠",def: [1,2,31,4,31,8,16]},
        {bst:":",def: [0,12,12,0,12,12,0]},
        {bst:"%",def: [24,25,2,4,8,19,3]},

/*

	{bst:"a",def: [0,0,14,1,15,17,15]},
	{bst:"b",def: [16,16,22,25,17,17,14]},
	{bst:"c",def: [0,0,14,16,16,17,14]},
	{bst:"d",def: [1,1,13,19,17,17,15]},
	{bst:"e",def: [0,0,14,17,31,16,14]},
	{bst:"f",def: [2,5,4,14,4,4,4]},
	{bst:"g",def: [0,0,15,17,15,1,14]},
	{bst:"h",def: [16,16,22,25,17,17,17]},
	{bst:"i",def: [4,0,12,4,4,4,14]},
	{bst:"j",def: [2,0,2,2,2,18,12]},
	{bst:"k",def: [8,8,9,10,12,10,9]},
	{bst:"l",def: [12,4,4,4,4,4,14]},
	{bst:"m",def: [0,0,26,21,21,21,21]},
	{bst:"n",def: [0,0,22,25,17,17,17]},
	{bst:"o",def: [0,0,14,17,17,17,14]},
	{bst:"p",def: [0,0,30,17,30,16,16]},
	{bst:"q",def: [0,0,15,17,15,1,1]},
	{bst:"r",def: [0,0,11,12,8,8,8]},
	{bst:"s",def: [0,0,15,16,14,1,30]},
	{bst:"t",def: [4,14,4,4,4,5,2]},
	{bst:"u",def: [0,0,17,17,17,19,13]},
	{bst:"v",def: [0,0,17,17,17,10,4]},
	{bst:"w",def: [0,0,17,17,17,21,10]},
	{bst:"x",def: [0,0,25,6,4,12,19]},
	{bst:"y",def: [0,0,17,9,6,4,24]},
	{bst:"z",def: [0,0,31,2,4,8,31]},
*/
/* Micro:bit 2.0
        {bst:"#",def: [10,10,31,10,31,10,10]},
        {bst:"$",def: [4,15,20,14,5,30,4]},
        {bst:"&",def: [12,18,20,8,21,18,13]},
        {bst:"(",def: [4,8,16,16,16,8,4]},
        {bst:")",def: [4,2,1,1,1,2,4]},
        {bst:"/",def: [1,2,4,8,16,0]},

        {bst:"@",def: [14,17,1,9,21,21,14]},
        {bst:";",def: [0,12,12,0,12,4,8]},
        {bst:"<",def: [2,4,8,16,8,4,2]},
        {bst:">",def: [8,4,2,1,2,4,8]},
       
        {bst:"[",def: [14,8,8,8,8,8,14]},
        {bst:"]",def: [14,2,2,2,2,2,14]},
        {bst:"|",def: [4,4,4,4,4,4,4]},
        {bst:"{",def: [6,8,8,16,8,8,6]},
        {bst:"}",def: [12,2,2,1,2,2,12]},
        {bst:"~",def: [0,0,8,21,2,0,0]},
        {bst:"€",def: [6,9,28,8,28,9,6]}
*/        
    ]
}


input.onButtonPressed(Button.AB, function () {
    for (let n=0;n<neo_strip_anz;n++) {
        arr_neop_strips[n].clear()
        arr_neop_strips[n].show()
    }
})


function neop_reihe(snr:number,y:number=0) {
    for (let x = 0; x < arr_neop_prop[snr].hwMatrix[0]; x++) {
        neop_schreibe_zch(snr,"#")
        pause(500)
    }
}
function neop_spalte(snr:number,x:number=0) {
    let mx=arr_neop_prop[snr].hwMatrix[0];
    let my=arr_neop_prop[snr].hwMatrix[1];
    for (let y:number = 0; y < arr_neop_prop[snr].hwMatrix[1]; y++) {
        neop_schreibe_zch(snr,"-")
        shift=(mx*2 -1 + shift--) % mx;
        pause(500)
    }
}


function neop_schreibe_zch (snr:number,zch_str:string="A") {
    let zeichen_matrix:Array<number>=[]

    let mx=arr_neop_prop[snr].hwMatrix[0];
    let my=arr_neop_prop[snr].hwMatrix[1];
    
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
            let found=arr_zeichen_tabelle.find(elem => elem.bst === zch);
            if (found != undefined) {
                zeichen_matrix=found.def.slice(0,my)
            } else {
                zeichen_matrix=arr_zeichen_tabelle.find(elem => elem.bst === '?').def
            }
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
                    arr_neop_strips[snr].setPixelColor(px, arr_neop_prop[snr].farbe)
                }
            }
        })
        arr_neop_strips[snr].show()
        if (is_type==1) {
            pause (arr_neop_prop[snr].wortPause)
        }
    }    
}


// Create and INIT #####################################
function init_neop_create(snr:number) {
    let pin=arr_neop_prop[snr].pin;
    let farbe=arr_neop_prop[snr].farbe;
    let pixelAnzahl=arr_neop_prop[snr].hwMatrix[0] * arr_neop_prop[snr].hwMatrix [1];
    arr_neop_strips.push(neopixel.create(pin, pixelAnzahl, farbe))
}


function init_one_strip(snr:number) {
    arr_neop_strips[snr].setBrightness(arr_neop_prop[snr].helligkeit)
    arr_neop_strips[snr].clear()
    arr_neop_strips[snr].show()
}


function init_strip_serie(system_anzahl:number) {
    for (let i=0;i<system_anzahl;i++) {
        init_neop_create(i);
        init_one_strip(i);
    }
}
function strip_data_save() {
    arr_neop_prop.push({pin:DigitalPin.P1,hwMatrix:[8,4],helligkeit:50,farbe:0x0000ff,wortPause:2000}) 
    arr_neop_prop.push({pin:DigitalPin.P2,hwMatrix:[8,2],helligkeit:50,farbe:0x00ff00,wortPause:2000}) 
    arr_neop_prop.push({pin:DigitalPin.P8,hwMatrix:[8,2],helligkeit:50,farbe:0xff0000,wortPause:2000}) 
}


// testbetrieb
function test() {
    console.log(arr_zeichen_tabelle.length);
    
    neop_schreibe_zch(0,"31,17,17,31,31")
    neop_schreibe_zch(1,"AB")
    neop_schreibe_zch(2,"12340")
    //neop_schreibe_wort(0,"bach")
}


// variable ########################################
interface neop  {
    pin: number;
    hwMatrix: Array<number>;
    helligkeit: number;
    farbe: number;
    wortPause: number;   
}

interface zch_tab {
  bst: string;
  def: Array<number>;
}

let arr_farben=[0xFF0000,0xFFA500,0xFFFF00,0x00FF00,0x0000FF,0x4b0082,0x8a2be2,0xFF00FF,0xFFFFFF,0x000000]
let bst_muster=[31,31,31,31,31,31,31,31];
let shift=0

let arr_neop_strips:Array<neopixel.Strip>=[]
let arr_neop_prop:Array<neop>=[]

let arr_zeichen_tabelle:Array<zch_tab>;
let neo_strip_anz:number=3;
// ende variable

//beginn initialisierung ############################
init_alphabet();
strip_data_save();
init_strip_serie(neo_strip_anz);
basic.showIcon(IconNames.Yes)
// ende Initialisierung

test();

