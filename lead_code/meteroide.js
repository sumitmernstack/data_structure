
function asteroidCollision(asteroids) {
    var stack = [];
    
    for (var i = 0; i < asteroids.length; i++) {
        var asteroid = asteroids[i];
        var isDestroyed = false;

        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            var top = stack[stack.length - 1];
            
            if (Math.abs(asteroid) > Math.abs(top)) {
                stack.pop(); // remove the top asteroid from the stack
            } else if (Math.abs(asteroid) === Math.abs(top)) {
                stack.pop(); // remove the top asteroid from the stack
                isDestroyed = true; // both asteroids are destroyed
                break;
            } else {
                isDestroyed = true; // the current asteroid is destroyed
                break;
            }
        }

        if (!isDestroyed) {
            stack.push(asteroid);
        }
    }
    
    return stack;
}

// Example usage:
var asteroids = [5, 10, -5];
console.log(asteroidCollision(asteroids)); // Output: [5, 10]
