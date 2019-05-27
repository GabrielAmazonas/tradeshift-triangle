const validateTriangle = require("./Helpers/validateTriangle");

const equilateralState = {
    firstSide : 3,
    secondSide: 3,
    thirdSide: 3
}

const isoscelesState = {
    firstSide : 4,
    secondSide: 4,
    thirdSide: 3
}

const scaleneState = {
    firstSide : 5,
    secondSide: 4,
    thirdSide: 3
}

test('Validates equilateral state ', () => {
    const {
        isValidTriangle,
            triangleType
    } = validateTriangle(equilateralState)

    expect(isValidTriangle).toBe(true);
    expect(triangleType).toBe('Equilateral')
});

test('Validates Isosceles state ', () => {
    const {
        isValidTriangle,
        triangleType
    } = validateTriangle(isoscelesState)

    expect(isValidTriangle).toBe(true);
    expect(triangleType).toBe('Isosceles')
});

test('Validates Isosceles state ', () => {
    const {
        isValidTriangle,
        triangleType
    } = validateTriangle(scaleneState)

    expect(isValidTriangle).toBe(true);
    expect(triangleType).toBe('Scalene')
});