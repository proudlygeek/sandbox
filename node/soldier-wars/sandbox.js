//
// Three Laws of Robotics.
// -----------------------
//
// 1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.
// 2. A robot must obey the orders given to it by human beings, except where such orders would conflict with the First Law.
// 3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.
//

var Soldier = function(params) {
    this.ctx = this;
    this.hitpoints = 5000;
    this.name = params.name;
    this.code = params.code;
};

Soldier.prototype.attack = function(name) {
    var target = soldiers[name],
        hit = Math.floor(Math.random() * 10);

    target.hitpoints -= hit;

    console.log("[ATTACK]: " + this.name + " hit " + target.name + " for " + hit + " point" + ((hit !== 1) ? "s." : "."));
    target.status();

    if (target.hitpoints <= 0) {
        console.log(target.name + ' is DEAD!');

        clearInterval(target.timeoutIntervalId);
        clearInterval(this.timeoutIntervalId);
    }
};

Soldier.prototype.status = function() {
    console.log("[STATUS]: " + this.name + " Has " + this.hitpoints + " HP left.");
};

var soldiers = {};

var soldier1 = new Soldier({
    name: "Gianluca",
    code: function() {
        this.attack('Mauro');
    }
});

var soldier2 = new Soldier({
    name: "Mauro",
    code: function() {
        this.attack('Gianluca')
    }
});


soldiers[soldier1.name] = soldier1;
soldiers[soldier2.name] = soldier2;

for (var soldier in soldiers) {
    console.log(soldier);
    soldiers[soldier].timeoutIntervalId = setInterval(function(i) {
        return function() {
            soldiers[i].code.call(soldiers[i]);
        };
    }(soldier), 10);
}
