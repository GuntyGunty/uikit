export function buildClassName(...classNames) {
  let className = '';
  console.log(classNames);
  classNames.forEach(name => className += name ? ` ${name}` : '');

  return className;
}