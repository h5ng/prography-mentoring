var obj = {
    name: "prograpy",
    friends: ["Hong", "Gi", "Lim"],
    alert: function () {
        var self = this;
        this.friends.forEach(function (friend) {
            console.log(self.name + " and " + friend);
        });
    }
};
obj.alert();

let obj2 = {
    name: "prograpy",
    friends: ["Lee", "Jae", "Kyu"],
    // alert() {
    alert: function () {
        this.friends.forEach(friend => {
            console.log(this.name + " and " + friend);
        });
    }
};
obj2.alert();

function calc(x, y) {
    return x + y;
}

let result = calc(5, 10);
console.log(result);

let calc2 = (x, y) => x + y;
let result2 = calc2(1, 2);
console.log(result2);
