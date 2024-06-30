function calculateDistance(pointA: string, pointB: string) {

    const [x1, y1] = pointA.split(',').map(Number);
    const [x2, y2] = pointB.split(',').map(Number);

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    return distance.toFixed(2);
}

export  {
    calculateDistance
};