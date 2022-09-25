import { toJson, fromJson, logJson } from './common'

const isNode = typeof process !== 'undefined' && typeof require !== 'undefined'

const dumpJson = async (filePath: string, data: any) => {
  if (isNode) {
    const fs = await import('fs-extra')
    await fs.outputFile(filePath, toJson(data))
  } else {
    console.error(
      '[ERROR in dumpJson (within "json-microscope")] This method is only available in the Node.js execution environment.'
    )
  }
}

export { toJson, fromJson, logJson, dumpJson }
