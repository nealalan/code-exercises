/* 
Clock Angle
*/

let timeAngle = {
    hour: 0,
    hourAngle: 0,
    minute: 0,
    minuteAngle: 0,
    minimalAngle: 0,
    reset: function () {
        console.log(this.set(0,0));
    },
    set: function (hour, minute) {
        // store hour 12 as hour zero
        if (hour === 12) hour = 0;
        this.minute = minute;
        this.hour = hour;
        this.minuteAngle = minute * 6;
        this.hourAngle = hour * 30 + (minute / 10);
        this.setAngle();
        // return hour 0 as hour 12
        if (hour === 0) hour = 12;
        return [[hour, minute],[Math.round(this.hourAngle), Math.round(this.minuteAngle)], Math.round(this.minimalAngle)];
    },
    setAngle: function () {
        let difference = 0;
        if (this.hourAngle < this.minuteAngle) 
            difference = this.minuteAngle - this.hourAngle;
        if (this.minuteAngle < this.hourAngle) 
            difference = this.hourAngle - this.minuteAngle;
        if (difference > 180) 
            this.minimalAngle = 360 - difference;
        else this.minimalAngle = difference;
    },
    getAngle: function () { return this.minimalAngle; }
}

// call timeAngle and set all possible times
//  return [[hour,minute],[hourAngle, minuteAngle], 0-180_degrees]
for (let i = 1; i <= 12 ; i++) {
    for (let j = 0; j <= 59; j++) {
        console.log(timeAngle.set(i,j));
    }
}

timeAngle.reset();

