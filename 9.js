/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    oldColor = image[sr][sc];
    if (oldColor !== color) {
        fill(image, sr, sc, color, oldColor);
    }
    return image;
};
// recursive fill adjacent pixels with the same color
var fill = function(image, sr, sc, color, oldColor) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== oldColor) {
        return;
    }
    image[sr][sc] = color;
    fill(image, sr + 1, sc, color, oldColor);
    fill(image, sr - 1, sc, color, oldColor);
    fill(image, sr, sc + 1, color, oldColor);
    fill(image, sr, sc - 1, color, oldColor);
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2));