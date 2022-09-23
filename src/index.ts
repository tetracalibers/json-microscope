import jsonFormat from 'json-format'
const config_jsonFormat = {
  type: 'space',
  size: 2
}

export const toJson = (source: object): string =>
  jsonFormat(source, config_jsonFormat)

export const logJson = (source: object) => {
  console.log(toJson(source))
}

export const fromJson = (source: object) => {
  return JSON.parse(JSON.stringify(source))
}
