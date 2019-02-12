var climbStairs = function (n) {
    let cache = {}
    return climber(cache, n)
};

function climber(c, n) {
    if (c[n]) {
        return c[n]
    }

    if (n < 0) return 0;

    if (n === 0) return 1;

    let oneStep = c[n - 1] ? c[n - 1] : null
    let twoStep = c[n - 2] ? c[n - 2] : null

    if (!oneStep) c[n - 1] = climber(c, n - 1)
    if (!twoStep) c[n - 2] = climber(c, n - 2)

    return (oneStep || climber(c, n - 1)) + (twoStep || climber(c, n - 2))
}

console.log(climbStairs(45))