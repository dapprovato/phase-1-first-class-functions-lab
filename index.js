const returnFirstTwoDrivers = function(drivers) {
    const copyOfDrivers = drivers.slice(0, 2)
        return copyOfDrivers
}

const returnLastTwoDrivers = function(drivers) {
    const copyOfDrivers = drivers.slice(2)
        return copyOfDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    function createFareMultiplier(num) {
        return num * number
    }
    return createFareMultiplier
}

function fareDoubler(fare) {
    const fareCost = createFareMultiplier(2)
        return fareCost(fare)
}

function fareTripler(tripleFare) {
    const fareTripled = createFareMultiplier(3)
        return fareTripled(tripleFare)
}

function selectDifferentDrivers(drivers, callBack) {
    return callBack(drivers);
}