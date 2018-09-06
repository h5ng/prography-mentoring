var obj = {
  name: "prograpy",
  friends: ["Hong", "Gi", "Lim"],
  alert: function() {
    var self = this;
    this.friends.forEach(function(friend) {
      console.log(self.name + " and " + friend);
    });
  }
};
obj.alert();

let obj2 = {
  name: "prograpy",
  friends: ["Hong", "Gi", "Lim"],
  alert() {
    this.friends.forEach(friend => {
      console.log(this.name + " and " + friend);
    });
  }
};
obj2.alert();
