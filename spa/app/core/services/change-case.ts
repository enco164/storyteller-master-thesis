export namespace ChangeCase {
  export function camelCase (obj) {
    if (typeof obj === 'string') {
      return toCamelCase(obj);
    }

    return changeKeys(toCamelCase, obj);
  }

  export function snakeCase(obj) {
    if (typeof obj === 'string') {
      return toSnakeCase(obj);
    }

    return changeKeys(toSnakeCase, obj);
  }
}

function toSnakeCase(str) {

  if (!str) {
    return '';
  }

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/([a-z])([A-Z])/g, (m, a, b) => a + '_' + b.toLowerCase())
    .replace(/[^A-Za-z0-9]+|_+/g, '_')
    .toLowerCase();

}

function toCamelCase(str) {

  if (!str) {
    return '';
  }

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/[^A-Za-z0-9]+/g, '$')
    .replace(/([a-z])([A-Z])/g, (m, a, b) => a + '$' + b)
    .toLowerCase()
    .replace(/(\$)(\w)/g, (m, a, b) => b.toUpperCase());

}

function changeKeys(transformer, obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) =>
      typeof item === 'string'
        ? transformer(item)
        : changeKeys(transformer, item));
  }

  if (typeof obj === 'object' && obj !== null) {
    const objectKeys = Object.keys(obj);
    return objectKeys
      .map(key => transformer(key))
      .reduce((object, transformedKey, index) => {
        const objValue = obj[objectKeys[index]];
        object[transformedKey] = changeKeys(transformer, objValue);
        return object;
      }, {});
  }

  return obj;
}
