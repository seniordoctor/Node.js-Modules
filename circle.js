const circleArea = radius => {
    let area = Math.PI * (radius * radius)
    console.log(`yarıçapı:  ${radius} olan dairenin alanı: ${area}`)
};

const circleCircumference = radius => {
    let circumference = 2 * Math.PI * radius
    console.log(`yarıçapı:  ${radius} olan dairenin çevresi: ${circumference}`)
};

module.exports = {
    circleArea,
    circleCircumference
}

// object destructing
// const circleArea = r => {
//     return Math.PI *r* r;
//   };
  
//   const circleCircumference = r => {
//     return 2 *Math.PI* r;
//   };
  
//   module.exports = {
//     circleArea,
//     circleCircumference
//   };