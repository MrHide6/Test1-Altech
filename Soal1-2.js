const Ascending = (x) => {
    for ( let a = 0; a < x.length; a++){
        for (let b = a + 1; b < x.length; b++){
            if(x[a] > x[b]){
                let data = x[a];
                x[a] = x[b];
                x[b] = data;
            }
        }
    }
    return x
}

const Descending = (x) => {
    for (let a = 0; a < x.length; a++){
        for(let b = a + 1; b < x.length; b++){
            if(x[a] < x[b]){
                let data = x[a];
                x[a] = x[b]
                x[b] = data
            }
        }
    }
    return x
}

let dataAngka = [10,20,8,9,7,6,2,1]
console.log("Data Setelah Diurutkan Dari terkecil : ",Ascending(dataAngka))
console.log("Data Setelah Diurutkan Dari terbesar :",Descending(dataAngka))