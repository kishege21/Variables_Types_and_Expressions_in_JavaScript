let age = 2020-1989
let ww2 = 1945-1939
let tesla = 76*875.53
let secondsOfDay = 60*60*24
let hungarians = 9773e+6/7.594e+9
let bigger = 9.597e+6/78866
let participants = 654%7

let trueOrFalse = 5===5
undefined
trueOrFalse
true
trueOrFalse = 100<50
false
trueOrFalse = 'Hello' !== 'world'
true
trueOrFalse = 1>2
false
trueOrFalse = "blue".lenght === "green"-lenght
VM1795:1 Uncaught ReferenceError: lenght is not defined
    at <anonymous>:1:41
(anonymous) @ VM1795:1
trueOrFalse = "blue".lenght === "green".lenght
true
trueOrFalse = 3<4 && (5>6 || 7<8)
true

let names = ["Niki", "Rofi", "Jozsi"]
undefined
names
(3) ["Niki", "Rofi", "Jozsi"]
names[2].lenght>5
false
names.push("Tofi")
4
names[0] = "Nikcsi"
"Nikcsi"
names.length>4
false


let post = {
    colors: ["blue", "yellow", "purple"]
}
undefined
post
{colors: Array(3)}
post.hasManyColors = ["orange"]
["orange"]
post
{colors: Array(3), hasManyColors: Array(1)}
if (post.hasManyColors.length>3) {
    console.log(true)} else {
        console.log(false)}
VM6113:3 false
undefined