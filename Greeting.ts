export class Greeting{
    greetingMessage: string = "NO";
    constructor(greetingMessage: string) {
        this.greetingMessage = greetingMessage;
    }

    public greet(name: string): string{
        return this.greetingMessage.concat(" ").concat(name);
    }
    hello(): string{
        return "Hello";
    }

}

let obj = new Greeting("Hey");
console.log(obj.greet("Prakash"));

let myVar1: string[] = ["s","a"];
for (const myVar1Key of myVar1) {
    console.log(myVar1Key);
}

var nums: number[] = [10,20];
var nums1 = new Array(10,20);
console.log(nums);

for (const numsKey in nums) {
    console.log(nums[numsKey]);
}

for (const number of nums1) {
    console.log(number);
}


