enum Toggler {ON, OFF};

const user = {
    switcher: Toggler.OFF,
};

// check if user switcher is ON
if(user.switcher === Toggler.ON){
    console.log("switcer is ON");
} else{
    console.log("switcer is OFF");
}