/**
 * @name MicroVolumeBooster
 * @version 0.0.1
 * @description Allows you to set the volume of your microphone higher
 * @author Marsisus and drako
 *  
 */



 module.exports = class Example{
     
    load() { }
    start() {

//code here
   BdApi.alert("KOUKOU LE CHOU", "PROUT");
   var monterLeSon = BdApi.findModuleByDisplayName("AUDIO_SET_INPUT_VOLUME");
   BdApi.alert(monterLeSon);
   //linkJS("MaBarreDeVolume", "");
//stop coding
}
stop(){

}
}
