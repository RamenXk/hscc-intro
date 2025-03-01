module.exports={

// create decimal to binaru conversion fuction
ConvertDecToBin:function(decimal){
if (process.env.CONSOLE_DEBUG=="true") {
  console.log(decimal)
} // End if console.debug

var  runningdec=decimal; 
var binString="";

while (runningdec > 0){
 var newBit= runningdec % 2;
 binString=newBit.toString()+binString;
 runningdec = Math.floor(runningdec/2);
}// End while loop
return binString;i
}// end convertDecToBin fuction





}// End module.exports