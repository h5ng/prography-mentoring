var func = function (msg) {
    msg = typeof msg === "undefined" ? "hello" : msg;
    console.log(msg);
};
func();

const func2 = (msg = "hello") => {
    console.log(msg);
};
func2();
