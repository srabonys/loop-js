// odd numbers

for(i = 0; i < 20; i++){
    if(i%2===1){
        console.log(i);
    }
}

/*same jinish
for(i = 0; i < 20; i++){
    if(i % 2 !=== 0){
        console.log(i);
    }
}
same-----------
for (let i = 1; i < 20; i+2){
console.log(i);
}

/*output-PS C:\Projects(js)\loop-js> node ./defferent.js
1
3
5
7
9
11
13
15
17
19*/

//give me the list numbers between 1 to 30 divisible by 5

for(let i = 1; i <=30; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

/*output-PS C:\Projects(js)\loop-js> node ./defferent.js
5
10
15
20
25
30------*/

//give me the sum of numbers between 1 to 20 divisible by 3

let total = 0;
for(let i = 1; i <=20; i++){
    if(i % 3 === 0){
        console.log(i);
        total = total + i;
        console.log('total', total)
    }
}

console.log('total of the numbers', total)

/*output---PS C:\Projects(js)\loop-js> node ./defferent.js
3
total 3
6
total 9
9
total 18
12
total 30
15
total 45
18
total 63
total of the numbers 63*/

