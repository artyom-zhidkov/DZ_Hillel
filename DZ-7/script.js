function Teapot(volumeTeapot, power, c, volumeWater, t1, t2, className) {
    this.volumeTeapot = volumeTeapot;
    this.power = power;
    this.volumeWater = volumeWater;
    this.t1 = t1;
    this.element = document.querySelector(className);
    this.buttonContent = "Start";
    this.status = "off";
    this.time = Math.round((c * volumeWater * (t2 - t1)) / (power * 100));
    this.timeToFinish = this.time;
    this.deltaT = (t2 - t1) / this.time;
    this.currentTemperature = Number(t1);
    this.template = Handlebars.compile(document.getElementById("html-template").innerHTML);
    this.render();
};

Teapot.prototype.render = function() {
    this.element.innerHTML = this.template({
        ...this,
        volumeWaterRender : this.volumeWater * 10,
        currentTemperatureRender: this.currentTemperature.toFixed(2),
        colorRGBComponentBlue: 150 - (this.currentTemperature / 10) * 15,
        colorRGBComponentRed: 100 + (this.currentTemperature / 10) * 15,
    });
    this.addHandler();
};

Teapot.prototype.addHandler = function () {
    this.element.querySelector(".button_action")
    .addEventListener("click", () => {
        switch (this.status) {
            case "off":
                this.buttonContent = "Pause";
                this.render();
                this.start();
                break;
            case "on":
                this.buttonContent = "Continue";
                this.render();
                this.stop();
                break;
            case "finish":
                this.buttonContent = "Start";
                this.reset();
                break;
        }
    });
};

Teapot.prototype.start = function () {
    this.status = "on";
    this.timerId = setInterval(() => {
        if (this.timeToFinish <= 0) {
            this.buttonContent = "Reset";
            this.stop();
            this.status = "finish";
        } else {
            this.timeToFinish--;
	        this.currentTemperature += this.deltaT;
        }
        this.render();
    }, 1000);
};

Teapot.prototype.stop = function () {
    this.status = "off";
    clearInterval(this.timerId);
    this.render();
};

Teapot.prototype.reset = function () {
    this.status = "off";
    this.timeToFinish = this.time;
    this.currentTemperature = this.t1;
    this.render();
};


//Teapot(volumeTeapot, power, c, volumeWater, t1, t2, className)
const teapot1 = new Teapot(10, 1000, 4200, 4, 0, 100, '.teapot1');
const teapot2 = new Teapot(10, 2000, 4200, 6, 10, 80, '.teapot2');
const teapot3 = new Teapot(10, 2000, 4200, 10, 50, 90, '.teapot3');
const teapot4 = new Teapot(10, 2000, 4200, 9, 0, 50, '.teapot4');
const teapot5 = new Teapot(10, 2000, 4200, 1, 0, 100, '.teapot5');












































