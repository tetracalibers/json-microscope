import { dumpJson, toJson } from '../node'

test('dumpJsonが正常に動作', async () => {
  const fs = await import('fs')
  const path = await import('path')

  const dummyObj = {
    name: 'tomixy'
  }
  const dummyDir = path.join(__dirname, './tmp')
  const dummyPath = path.join(dummyDir, './dumpJson.test')

  // 実行
  const response = await dumpJson(dummyPath, dummyObj)

  // 作成されたファイルを取得
  const writtenFiles = fs.readdirSync(dummyDir)
  const writtenData = fs.readFileSync(dummyPath + '.json', 'utf-8').toString()

  // テスト
  expect(response).toBeUndefined //1.関数の返り値
  expect(writtenFiles.length).toBe(1) //2.作成されたファイル数
  expect(writtenData).toBe(toJson(dummyObj)) //3.作成されたファイルの内容

  // 後片付け
  fs.unlinkSync(dummyPath + '.json') //作成したファイルの削除
  fs.rmdirSync(dummyDir) //作成したディレクトリの削除
})
