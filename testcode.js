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
