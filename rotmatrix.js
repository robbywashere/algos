let i = 0;
const matrix = [
  ['a','b','c'],
  ['d','e','f']
  ['g','h','i']
];
console.log(matrix);


const m = matrix.reverse();

for (let i = 0; i < m.length; i++) {
  for (let j = 0; j < m.length; j++) {
    const swap = m[i][j];
    m[i][j] = m[j][i];
    m[j][i] = swap;
  }
}



console.log(m)
