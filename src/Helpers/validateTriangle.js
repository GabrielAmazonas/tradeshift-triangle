function validateTriangle(state) {
    const { firstSide, secondSide, thirdSide } = state

    // The sum of two sides must be greather than the last side
    const firstValidation = (firstSide + secondSide) > thirdSide
    const secondValidation = (firstSide + thirdSide) > secondSide
    const thirdValidation = (thirdSide + secondSide) > firstSide

    const isValidTriangle = firstValidation && secondValidation && thirdValidation

    let triangleType = ""

    if(isValidTriangle)
    {
        if(firstSide === secondSide && firstSide === thirdSide)
        {
            triangleType = "Equilateral"
        }
        else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide)
        {
            triangleType = "Isosceles"
        } else
        {
            triangleType = "Scalene"
        }

    }

    return {
        isValidTriangle,
        triangleType
    }
}

module.exports = validateTriangle;