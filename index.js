// Code your solution in this file!
let hQ = 42
let free = 400
let cent = .02

function distanceFromHqInBlocks(start) {
    console.log(start)
    if (start < hQ) {
        return hQ - start
    }
    return start - hQ
}
function distanceFromHqInFeet(feet) {
    let result = ((feet - hQ) * 264)
    if (feet < hQ) {
        let result2 = ((hQ - feet) * 264)
        return result2
    }
    return result
}
function distanceTravelledInFeet(start, destination) {
    let result = ((destination - start) * 264)
    if (destination < start) {
        let result2 = ((start - destination) * 264)
        return result2
    }
    return result
}
function calculatesFarePrice(start, destination) {
    //should return free if the feet are <= 400
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= free) {
        return 0;
    } else if (distance > free && distance <= 2000) {
        return cent * (distance - free);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

    
    
    
    
    
    
        // if ((destination - start) * x < free) {
    //     let result = (0)
    //     return result
    // }

    // let result2 = 'charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)'
    // if ((start - destination) * x - free * cent) {
    // let result2 = (2.56)
    //     return result2
    // } 
