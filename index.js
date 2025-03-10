

// Code your solution here
const batteryBatches = [3, 4, 3, 3, 4, 5, 3, 2, 2, 2]; 


const totalBatteries = batteryBatches.reduce((acc, batch) => acc + batch, 0);


console.log(totalBatteries);