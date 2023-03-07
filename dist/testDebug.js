"use strict";
var Toggler;
(function (Toggler) {
    Toggler[Toggler["ON"] = 0] = "ON";
    Toggler[Toggler["OFF"] = 1] = "OFF";
})(Toggler || (Toggler = {}));
;
const user = {
    switcher: Toggler.OFF,
};
if (user.switcher === Toggler.ON) {
    console.log("switcer is ON");
}
else {
    console.log("switcer is OFF");
}
//# sourceMappingURL=testDebug.js.map