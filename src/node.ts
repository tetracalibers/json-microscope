import { toJson, fromJson, logJson } from './common'

const dumpJson = async (filePath: string, data: any) => {
  const fs = await import('fs-extra')
  await fs.outputFile(filePath, toJson(data))
}

export { toJson, fromJson, logJson, dumpJson }
