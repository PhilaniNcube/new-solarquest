export const getRoofDircetion = (azimuth: number): string => {
  if (azimuth >= 0 && azimuth < 90) {
    return 'N'
  } else if (azimuth >= 90 && azimuth < 180) {
    return 'E'
  } else if (azimuth >= 180 && azimuth < 270) {
    return 'S'
  } else if (azimuth >= 270 && azimuth < 360) {
    return 'W'
  } else {
    return 'N'
  }
}


// write a function that returns the the coordinates for a google maps polygon given the lat and lng of the ne and sw corners
export const getPolygonCoordinates = (neLat: number, neLng: number, swLat: number, swLng: number): Array<Array<number>> => {
  return [
    [neLat, neLng],
    [neLat, swLng],
    [swLat, swLng],
    [swLat, neLng],
  ]
}


// write a function that takes in the length and width of a solar panel as well as the area of the roof and returns the number of panels that can fit on the roof
export const getNumberOfPanels = (length: number, width: number, area: number): number => {
  return Math.floor(area / (length * width))
}


// function returns the solar output given a default value of the output and the solar panel power rating
export const getSolarOutput = (solarPanelPowerRating: number, solarOutput: number, defaultPanelRating:number): number => {
  const ratio = solarPanelPowerRating / defaultPanelRating
  let output = solarOutput * ratio

  return Number(output.toFixed(2))
}


// calculate the daily, monthly and yearly electricity usage in kWh given the monthly monthly electricity bill
export const getElectricityUsage = (monthlyElectricityBill: number): { daily: number, monthly: number, yearly: number } => {



  const dailyBill = monthlyElectricityBill / 30


  // calculate the daily electricity usage in kWh based on an tarrif of 2.03 cents per kWh
  const daily = dailyBill / 2.03
  const monthly = daily * 30
  const yearly = monthly * 12

  return { daily, monthly, yearly }
}
