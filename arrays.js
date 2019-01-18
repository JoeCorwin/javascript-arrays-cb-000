chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return arrays = array.unshift(element)

}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}
