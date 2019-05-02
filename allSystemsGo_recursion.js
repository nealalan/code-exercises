/*
All Systems Go
You are working for NASA because you are super cool! It's up to you to 
write the code that will determine if "all systems are go for launch". 
Your function will receive a deeply nested object. Keys represent the 
name of a system on the spacecraft; values are boolean "true" if the 
system is "go" for launch and "false" otherwise. Your function should 
return "true" only if every system is "go" for launch!
*/

function allSystemsGo (deeplyNestedObject) {
    let goStatus = true;
 
    for (let key in deeplyNestedObject) {
        if (typeof deeplyNestedObject[key] === 'object') {
            let return_code = allSystemsGo(deeplyNestedObject[key]);
            if (return_code === false) goStatus = false;
        } else {
            if (deeplyNestedObject[key] === false) {
                console.log(key, 'is', deeplyNestedObject[key]);
                goStatus = false;
            }
        }
    }
    // if i want to parse through them all how do I do it?
    return goStatus;
}

let systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true
    },
    transmitter: true,
    receiver: true
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true
    }
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: false
    },
    thrusters: true,
    propellant: true
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true
  }
};

console.log(allSystemsGo(systems)); // => false