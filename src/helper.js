function genTicket(n) {
    let arr = new Array(n);
    for(let i=0;i<n;i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}

function sumTicket(arr) {
    let total = arr.reduce((sum, curVal) => sum+curVal,0);
    return total;
}

export {genTicket, sumTicket}