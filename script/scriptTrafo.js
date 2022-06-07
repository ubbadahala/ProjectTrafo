/* eslint-disable no-unused-vars */
import { ConvertToCartesianOC, ConvertToCartesianSC, realNumberOC, imaginaryNumberOC, realNumberSC, imaginaryNumberSC } from './polarCartesian.js'

function runCalculation () {
  const getFreq = document.getElementById('inputfreq').value
  const getPower = document.getElementById('inputP').value
  const getVP = document.getElementById('inputVP').value
  const getVS = document.getElementById('inputVS').value

  const freq = parseFloat(getFreq)
  const power = parseFloat(getPower)
  const primVolt = parseFloat(getVP)
  const secoVolt = parseFloat(getVS)

  const getVOC = document.getElementById('inputVOC').value
  const getIOC = document.getElementById('inputIOC').value
  const getPOC = document.getElementById('inputPOC').value

  const VOC = parseFloat(getVOC)
  const IOC = parseFloat(getIOC)
  const POC = parseFloat(getPOC)

  const getVSC = document.getElementById('inputVSC').value
  const getISC = document.getElementById('inputISC').value
  const getPSC = document.getElementById('inputPSC').value

  const VSC = parseFloat(getVSC)
  const ISC = parseFloat(getISC)
  const PSC = parseFloat(getPSC)

  const powerFactorOC = (POC / (VOC * IOC)).toFixed(3)
  console.log('PF = ' + powerFactorOC)

  const cosPFOC = (Math.acos(powerFactorOC) * (180 / Math.PI)).toFixed(3)
  console.log(cosPFOC)

  const iperVOC = (IOC / VOC)
  console.log(iperVOC)

  // Driver code
  const polarOC = [iperVOC, -cosPFOC]
  ConvertToCartesianOC(polarOC)

  console.log('YE = ' + realNumberOC + ' ' + imaginaryNumberOC + 'j')

  const rC = (1 / realNumberOC).toFixed(4)
  const xM = Math.abs((1 / imaginaryNumberOC).toFixed(4))

  console.log('RC = ' + rC)
  console.log('XM = ' + xM)

  const powerFactorSC = (PSC / (VSC * ISC)).toFixed(3)
  console.log('PF = ' + powerFactorSC)

  const cosPFSC = (Math.acos(powerFactorSC) * (180 / Math.PI)).toFixed(3)
  console.log(cosPFSC)

  const vperISC = (VSC / ISC)
  console.log(vperISC)

  const polarSC = [vperISC, cosPFSC]
  ConvertToCartesianSC(polarSC)

  console.log('ZSE = ' + realNumberSC + ' ' + imaginaryNumberSC + 'j')
  console.log('REQ = ' + realNumberSC)
  console.log('XEQ = ' + imaginaryNumberSC)

  const outPFOC = document.getElementById('outputPFOC')
  const outYE = document.getElementById('outputYE')
  const outRC = document.getElementById('outputRC')
  const outXM = document.getElementById('outputXM')
  const outPFSC = document.getElementById('outputPFSC')
  const outZSE = document.getElementById('outputZSE')
  const outREQ = document.getElementById('outputREQ')
  const outXEQ = document.getElementById('outputXEQ')

  outPFOC.value = powerFactorOC
  outYE.value = realNumberOC + ' ' + imaginaryNumberOC + 'j'
  outRC.value = rC + ' Ω'
  outXM.value = xM + ' Ω'
  outPFSC.value = powerFactorSC
  outZSE.value = realNumberSC + ' ' + imaginaryNumberSC + 'j' + ' Ω'
  outREQ.value = realNumberSC + ' Ω'
  outXEQ.value = imaginaryNumberSC + ' Ω'
}

export default runCalculation
