process.stdin.resume();
process.stdin.setEncoding('utf-8');

var arr = "";
process.stdin.on('data', (chunk) => {
    arr += chunk;
})

process.stdin.on('end', () => {
    arr = arr.split("\n");
    let T = parseInt(arr.shift());

    for(let i=0; i<T; i++){
        arr[i] = arr[i].slice(1,-1);
    }
    arr.pop();

    console.log(arr);
    arr.sort((a, b) => {
        if(a.charCodeAt(0) > b.charCodeAt(0))
            return 1;
        else if(a.charCodeAt(0) < b.charCodeAt(0))
            return -1;
        else
            return 0;
    });

    for(let i=0; i<T; i++)
        console.log(`"${arr[i]}"`);
});
