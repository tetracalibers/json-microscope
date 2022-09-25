import { toJson, fromJson, logJson } from './common'

const dumpJson = async (filePath: string, data: any) => {
  const isNode =
    typeof process !== 'undefined' && typeof require !== 'undefined'

  const path = filePath.endsWith('.json') ? filePath : filePath + '.json'

  if (isNode) {
    const fs = await import('fs-extra')
    await fs.outputFile(path, toJson(data))
  } else {
    console.error(
      '[ERROR in dumpJson (within "json-microscope")] This method is only available in the Node.js execution environment.'
    )
  }
}

export { toJson, fromJson, logJson, dumpJson }
