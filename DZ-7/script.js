function Teapot(volumeTeapot, power, volumeWater, t1, t2, element) {
    const c = 4200;
    this.volumeTeapot = volumeTeapot;
    this.power = power;
    this.element = element;
    this.buttonInnerHtml = "Start"
    this.t1 = t1;
    this.volumeWater = volumeWater;
    this.heightWataerForRender = volumeWater * 10;
    this.time = Math.round((c * volumeWater * (t2 - t1)) / (power * 100)); 
    this.deltaT = (t2 - t1) / this.time;
    this.timeToFinish = this.time;
    this.currentTemperature = Number(t1);
    this.showTemperature = Number(t1);
    this.state = "off";
    this.template = Handlebars.compile(document.getElementById("html-template").innerHTML);
};

Teapot.prototype.render = function() {
    if (this.state === "finish") {
        this.buttonInnerHtml = "Reset";
    }
    this.element.innerHTML = this.template(this);
    if (this.volumeWater === 10) {
        this.element.querySelector(".water").classList.add("border-top-left-right-radius");
    }
    this.addHandler();
};

Teapot.prototype.addHandler = function () {
    this.element.querySelector(".container").children[2]
    .addEventListener("click", () => {
        switch (this.state) {
            case "off":
            case "pause":
                this.buttonInnerHtml = "Pause";
                this.start();
                break;
            case "on":
                this.buttonInnerHtml = "Continue";
                this.pause();
                break;
            case "finish":
                this.buttonInnerHtml = "Start";
                this.reset();
                break;
        }
    });
};

Teapot.prototype.start = function () {
    this.state = "on";
    this.timerId = setInterval(() => {
        if (this.timeToFinish <= 0) {
            this.pause();
            this.state = "finish";
        } else {
            --this.timeToFinish;
	        this.currentTemperature += this.deltaT;
            this.showTemperature = (this.currentTemperature).toFixed(2);
        }
        this.render();
    }, 1000);
};

Teapot.prototype.pause = function () {
    this.state = "pause";
    clearInterval(this.timerId);
    this.render();
};

Teapot.prototype.reset = function () {
    this.state = "off";
    this.timeToFinish = this.time;
    this.currentTemperature = this.t1;
    this.showTemperature = this.t1;
    this.render();
};

document.body.classList.add("flex");

const vidget1 = document.createElement('div');
const vidget2 = document.createElement('div');
const vidget3 = document.createElement('div');

document.body.appendChild(vidget1);
document.body.appendChild(vidget2);
document.body.appendChild(vidget3);


const teapot1 = new Teapot(10, 2000, 2, 0, 100, vidget1);
const teapot2 = new Teapot(10, 2000, 6, 0, 100, vidget2);
const teapot3 = new Teapot(10, 2000, 10, 0, 100, vidget3);

teapot1.render();
teapot2.render();
teapot3.render();











































