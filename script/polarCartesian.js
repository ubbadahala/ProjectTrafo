// Function to convert degree to radian
function ConvertDegToRad(degree)
{
    const pi = Math.PI;
    return (degree * (pi / 180.0));
}

// Function to convert the polar
// coordinate to cartesian
function ConvertToCartesianOC(polar)
{
    // Convert degrees to radian
    polar[1] = ConvertDegToRad(
    polar[1]);

    // Applying the formula:
    // x = rcos(theta), y = rsin(theta)
    let cartesian
    = [ ((polar[0] * Math.cos(polar[1]) + Number.EPSILON) * 100) / 100,
    ((polar[0] * Math.sin(polar[1]) + Number.EPSILON) * 100) / 100 ];



    // Print cartesian coordinates
    realNumberOC = parseFloat((cartesian[0]).toFixed(7));
    imaginaryNumberOC = parseFloat((cartesian[1]).toFixed(7));
    
    console.log(realNumberOC)
    console.log(imaginaryNumberOC)
}

function ConvertToCartesianSC(polar)
{
    // Convert degrees to radian
    polar[1] = ConvertDegToRad(
    polar[1]);

    // Applying the formula:
    // x = rcos(theta), y = rsin(theta)
    let cartesian
    = [ ((polar[0] * Math.cos(polar[1]) + Number.EPSILON) * 100) / 100,
    ((polar[0] * Math.sin(polar[1]) + Number.EPSILON) * 100) / 100 ];



    // Print cartesian coordinates
    realNumberSC = parseFloat((cartesian[0]).toFixed(7));
    imaginaryNumberSC = parseFloat((cartesian[1]).toFixed(7));
    
    console.log(realNumberSC)
    console.log(imaginaryNumberSC)
}

export {ConvertDegToRad, ConvertToCartesianOC, ConvertToCartesianSC }