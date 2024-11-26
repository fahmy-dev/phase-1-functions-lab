// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    return Math.abs(blocks - hq);
}

function distanceFromHqInFeet(feet) {
    const blocks = distanceFromHqInBlocks(feet);
    return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
  }

  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0;
    }    
    else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
} 