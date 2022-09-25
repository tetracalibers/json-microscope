# json-microscope

Collection of JSON conversion tools to help debug object structure

## Install

```
npm i --save-dev json-microscope
```

or

```
yarn add -D json-microscope
```

## import

### for browser

```ts
import { toJson, logJson, fromJson } from 'json-microscope'
```

### for node

`dumpJson` is included only in node mode.

```ts
import { toJson, logJson, fromJson, dumpJson } from 'json-microscope/node'
```

## API References

### toJson(obj: Object) => string

Converts an object into an easy-to-read formatted JSON string.

### logJson(obj: Object) => void

The object is formatted for easy viewing and displayed in the terminal.

### fromJson(obj: Object) => any

Converts imported objects from .json files to JS objects.

### dumpJson(filePath: string, data: any) => Promise<void>

Output objects to file in formatted JSON format
