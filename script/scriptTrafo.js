document.addEventListener("DOMContentLoaded", function() {

  const submitForm = document.getElementById("trafoData");

  submitForm.addEventListener("submit", function(event) {
      event.preventDefault();
      runCalculation();
  });
});

function runCalculation()
{
  const getFreq = document.getElementById('inputfreq').value;
  const freq = parseFloat(getFreq)
  const getPower = document.getElementById('inputP').value; 
  const power = parseFloat(getPower)
  const getVP = document.getElementById('inputVP').value;
  const primVolt = parseFloat(getVP)
  const getVS = document.getElementById('inputVS').value;
  const secoVolt = parseFloat(getVS)

  const getVOC = document.getElementById('inputVOC').value; 
  const VOC = parseFloat(getVOC)
  const getIOC = document.getElementById('inputIOC').value;
  const IOC = parseFloat(getIOC)
  const getPOC = document.getElementById('inputPOC').value;
  const POC = parseFloat(getPOC)

  const getVSC = document.getElementById('inputVSC').value;
  const VSC = parseFloat(getVSC)
  const getISC = document.getElementById('inputISC').value; 
  const ISC = parseFloat(getISC)
  const getPSC = document.getElementById('inputPSC').value;
  const PSC = parseFloat(getPSC)

  let powerFactorOC = (POC / (VOC * IOC)).toFixed(3)
  console.log("PF = "+ powerFactorOC)

  const cosPFOC = (Math.acos(powerFactorOC) * (180/Math.PI)).toFixed(3)
  console.log(cosPFOC)

  const iperVOC = (IOC/VOC)
  console.log(iperVOC)

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

  // Driver code
  let polarOC=[iperVOC, -cosPFOC];
  // Function to convert polar
  // coordinates to equivalent
  // cartesian coordinates
  ConvertToCartesianOC(polarOC);

  console.log("YE = " + realNumberOC + " " + imaginaryNumberOC + "j")

  let rC = (1/realNumberOC).toFixed(4);
  let xM = Math.abs((1/imaginaryNumberOC).toFixed(4));

  console.log("RC = " + rC)
  console.log("XM = " + xM)

  let powerFactorSC = (PSC / (VSC * ISC)).toFixed(3)
  console.log("PF = " + powerFactorSC)

  const cosPFSC = (Math.acos(powerFactorSC) * (180/Math.PI)).toFixed(3)
  console.log(cosPFSC)

  const vperISC = (VSC/ISC)
  console.log(vperISC)

  let polarSC=[vperISC, cosPFSC]
  ConvertToCartesianSC(polarSC);
  console.log("ZSE = " + realNumberSC + " " + imaginaryNumberSC + "j")
  console.log("REQ = " + realNumberSC)
  console.log("XEQ = " + imaginaryNumberSC)

  const outPFOC = document.getElementById('outputPFOC');
  const outYE = document.getElementById('outputYE');
  const outRC = document.getElementById('outputRC');
  const outXM = document.getElementById('outputXM');
  const outPFSC = document.getElementById('outputPFSC');
  const outZSE = document.getElementById('outputZSE');
  const outREQ = document.getElementById('outputREQ');
  const outXEQ = document.getElementById('outputXEQ');

  outPFOC.value = powerFactorOC
  outYE.value = realNumberOC + " " + imaginaryNumberOC + "j"
  outRC.value  = rC
  outXM.value = xM
  outPFSC.value = powerFactorSC
  outZSE.value = realNumberSC + " " + imaginaryNumberSC + "j"
  outREQ.value = realNumberSC
  outXEQ.value = imaginaryNumberSC
}