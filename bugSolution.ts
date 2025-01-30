function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(String(a));
  const numB = typeof b === 'number' ? b : parseFloat(String(b));

  if(isNaN(numA) || isNaN(numB)) {
    return 0; // or throw an error
  }
  return numA + numB;
}

const result = addSafe("1", 2); // Returns 3
const result2 = addSafe("abc", 2); //Returns 0
const result3 = addSafe(1,2); //Returns 3