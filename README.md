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

## API References

### toJson(obj: Object) => string

Converts an object into an easy-to-read formatted JSON string.

### logJson(obj: Object) => void

The object is formatted for easy viewing and displayed in the terminal.

### fromJson(obj: Object) => any

Converts imported objects from .json files to JS objects.
