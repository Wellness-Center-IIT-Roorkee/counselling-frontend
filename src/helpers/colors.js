export const color_variables = Array.from(document.styleSheets)
  .filter(
    sheet =>
      sheet.href === null || sheet.href.startsWith(window.location.origin)
  )
  .reduce(
    (acc, sheet) =>
      (acc = [
        ...acc,
        ...Array.from(sheet.cssRules).reduce(
          (def, rule) =>
            (def =
              rule.selectorText === ':root'
                ? [
                    ...def,
                    ...Array.from(rule.style).filter(name =>
                      name.startsWith('--')
                    ),
                  ]
                : def),
          []
        ),
      ]),
    []
  );

export const getCssPropertyValue = key => {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(key);
};

export const camelize = str => {
  return str
    .replace(/--/g, '')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/-/g, '');
};

const variables_properties = {};

color_variables.forEach(
  elem =>
    (variables_properties[camelize(elem)] = getCssPropertyValue(elem).trim())
);

export { variables_properties };
