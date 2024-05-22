const PersamaanKata = (x) => {
    x = x.replace(/\s/g, '').toLowerCase();

    for(let a = 0;  a < x.length / 2; a++){
        if (x[a] !== x[x.length - 1 - a]) {
            return false;
        }
    }
    return true
}

console.log(PersamaanKata("malam"))
console.log(PersamaanKata("hallo"))