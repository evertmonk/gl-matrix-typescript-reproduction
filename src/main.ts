import { mat4 } from 'gl-matrix';

const test: mat4 = mat4.create();
test.set([
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1
]);

console.log(test);