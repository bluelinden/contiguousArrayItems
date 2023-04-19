/**
 * Returns information about a specific run of contiguous identical items within an array
 *
 * @author Blue Linden
 * @param {array} array The array to count contiguous elements within
 * @param {number} atIndex Index of the item to count around
 * @return {object} Object containing .start, .end and .count properties
 */

function contiguousRange(array, atIndex) {
  var startIndex, endIndex

  for (var i = atIndex, len = array.length; i < len; i++) { // iterate forward from the starting point to get end index
    if(array[i] == array[atIndex]) { // if the value of this element and the original element match, this is part of a contiguous run of elements.
      endIndex = i; // just keep on setting the end index higher until it no longer matches
    } else {
      break;
    }
  }

  for(var i = atIndex, len = array.length; i > 0; i--) { // iterate backward from the starting point to get start index
    if(array[i] == array[atIndex]) { // if the value of this element and the original element match, this is part of a contiguous run of elements.
      startIndex = i // just keep on setting the start index lower until it no longer matches
    } else {
      break;
    }
  }

  var indices = {}
  indices.start = startIndex
  indices.end = endIndex 
  return indices;
}
