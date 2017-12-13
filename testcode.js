function main(){
    let flemphone = new Device("phone",3000,10000);
    console.log(flemphone.power());
    flemphone.on();
    flemphone.wake();
    flemphone.use(90);
    console.log(flemphone.power());
    flemphone.sleep();
    flemphone.use(300);
    console.log(flemphone.power());
    flemphone.off();
    flemphone.use(300);
    console.log(flemphone.power());
    flemphone.charge(60);
    console.log(flemphone.power());
    flemphone.charge(1000);
    console.log(flemphone.power());
}

function testdoc(){
    let cd = new ChargingDock();
    
    let d1 = new Device("phone",3000,10000);
    let d2 = new Device("laptop",3000,15000);
    let d3 = new Device("laptop",5000,15000);
    let d4 = new Device("tablet",3000,15000);
    
    d1.use(90);
    d2.use(120);
    d3.use(90);
    d4.use(240);
    
    cd.plug(d1);
    cd.plug(d2);
    cd.plug(d3);
    cd.plug(d4);
    
    cd.chargeAll(60);
    
    cd.unplug(0);
    cd.unplug(1);

}
