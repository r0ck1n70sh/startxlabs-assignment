process.stdin.resume();
process.stdin.setEncoding('utf-8');

var arr = "";
process.stdin.on('data', (chunk) => {
    arr += chunk;
});

process.stdin.on('end', () => {
    arr = arr.split("\n");
    var T = parseInt(arr.shift());

    console.log(arr);
    for(let i=0; i<T; i++){
        let [L, R] = arr[i].split(" ").map(i => parseInt(i));

        if(L==0)
            L=1;

        let sum = (R*(R+1))/2 - (L*(L-1))/2;

        if(L==R)
            sum = L;

        if(sum & 1)
            console.log(`Odd`);
        else
            console.log(`Even`);
    }
});


