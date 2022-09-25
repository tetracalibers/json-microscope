import * as jsonFormat from 'json-format'

export const toJson = (source: object): string =>
  jsonFormat(source, {
    type: 'space',
    size: 2
  })

export const logJson = (source: object) => {
  console.log(toJson(source))
}

export const fromJson = (source: object) => {
  return JSON.parse(JSON.stringify(source)).default
}
