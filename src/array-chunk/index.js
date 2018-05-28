// Recursive solution
function chunkTheArray(array, size, chunkedArray = []) {
  if (array.length <= size) {
    chunkedArray.push(array);
    return chunkedArray;
  }

  const chunk = array.slice(0, size);
  array = array.slice(size);

  chunkedArray.push(chunk);
  return chunkTheArray(array, size, chunkedArray);
}

// Optimal solution
function chunk(array, size) {
  let chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
