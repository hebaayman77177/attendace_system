
function getTime(date) {
    return new Date(0, 0, 0, date.getHours(), date.getMinutes(), 0)
}

exports.getTime = getTime;