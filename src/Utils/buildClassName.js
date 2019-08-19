export function buildClassName(...className) {
  let blockName = '';

  className.forEach(name => blockName += name ?  `${name} ` : '');
  return blockName;
}