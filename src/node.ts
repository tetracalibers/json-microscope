import { toJson, fromJson, logJson } from './common'
import { outputFile } from 'fs-extra'

const dumpJson = async (filePath: string, data: any) => {
  await outputFile(filePath, toJson(data))
}

export { toJson, fromJson, logJson, dumpJson }
