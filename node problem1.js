process.stdin.resume();
process.stdin.setEncoding('utf-8');

var time;
process.stdin.on('data', (chunk) => {
    time = parseInt(chunk);
});

process.stdin.on('end', () => {
    let hours = Math.floor(time/3600);
    time %= 3600;

    let minutes = Math.floor(time/60);
    time %= 60;

    let seconds = time;

    console.log(`Hours = ${hours}, minute = ${minutes}, seconds = ${seconds}`);
});

