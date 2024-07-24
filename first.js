
function solution(A) {
  A.sort((a, b) => a - b);

  let rooms = 0;
  let i = 0;
  let N = A.length;

  while (i < N) {
    rooms++;
    let roomSize = A[i];
    let count = 0;

while (i < N && count < roomSize) {
  count++;
  i++;
}
  }

  return rooms;
}