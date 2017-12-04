//Defines how all Devices with work.

function Device(t,ma,c){

    //Instance Variables
    this.type = t;

    //Instance Functions
    this.on = function(){
        if(this.state == "off" && this.juice >0){
           this.state = "idle";
        }
    };
    
    

}//end of the device declaration

//defines the testing code.
function main(){}
//runs the testing code.
main();
