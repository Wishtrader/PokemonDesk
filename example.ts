// Task 1
function concat(a:string, b:string):string {
  return a + b;
}

concat('Hello ', 'World');

// Task 2


interface IndexInterface {
  howIDoIt: string;
  simeArray:[string, string, number];
  withData: [any];
  name?: string;
}

const myHometask: IndexInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

myHometask.name = 'NoName'

// Task 3

interface MyArray<T> {
	[n: number]: T;
  reduce(fn: (el: T) => T): T[];
}

  const tsArray: Array<number> = [1,2,3,4,5];

	tsArray.reduce(): T;
