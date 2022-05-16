export default class Utilities{
  static convertStringToNumber(value: string = ''){
    console.log(value, value.replace(/[^0-9]/g, ''))
    return +value.replace(/[^0-9]/g, '')
  }
}
