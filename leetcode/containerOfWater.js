function maxArea(height) {
    let area = 0

    for (let h = 0; h < height.length; h++){
        let len = height.length - 1

        while (len > h) {
            let x = height[h] < height[len] ? height[h] : height[len]
            let y = len - h
            
            if (x * y > area) {
                area = x * y
            }
            len--
        }
    }

    return area
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))