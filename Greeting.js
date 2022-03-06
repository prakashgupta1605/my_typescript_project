var Greeting = /** @class */ (function () {
    function Greeting(greetingMessage) {
        this.greetingMessage = "NO";
        this.greetingMessage = greetingMessage;
    }
    Greeting.prototype.greet = function (name) {
        return this.greetingMessage.concat(" ").concat(name);
    };
    Greeting.prototype.hello = function () {
        return "Hello";
    };
    return Greeting;
}());
var obj = new Greeting("Hey");
console.log(obj.greet("Prakash"));
var myVar1 = ["s", "a"];
for (var _i = 0, myVar1_1 = myVar1; _i < myVar1_1.length; _i++) {
    var myVar1Key = myVar1_1[_i];
    console.log(myVar1Key);
}
var nums = [10, 20];
var nums1 = new Array(10, 20);
console.log(nums);
for (var numsKey in nums) {
    console.log(nums[numsKey]);
}
for (var _a = 0, nums1_1 = nums1; _a < nums1_1.length; _a++) {
    var number = nums1_1[_a];
    console.log(number);
}
