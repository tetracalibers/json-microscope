# json-microscope

Collection of JSON conversion tools to help debug object structure

## API References

### toJson(obj: Object) => string

Converts an object into an easy-to-read formatted JSON string.

### logJson(obj: Object) => void

The object is formatted for easy viewing and displayed in the terminal.

### dumpJson(obj: Object)(filePath: string) => void

Writes objects to a file in easy-to-read formatted JSON format.

### fromJson(obj: Object) => any

Converts imported objects from .json files to JS objects.
