import { toJson, fromJson, logJson } from './common'
const fs = require('fs-extra')

const dumpJson = async (filePath: string, data: any) => {
  await fs.outputFile(filePath, toJson(data))
}

export { toJson, fromJson, logJson, dumpJson }
