const Question1 = (x) => {
    for (let i = 1; i <= x; i++){
        let data = "";

        if(i % 3 === 0 && i % 15 !== 0){
            data += "fish";
        }else if (i % 5 === 0 && i % 15 !== 0){
            data += "bash";
        }else if(i % 15 === 0){
            data += "fish bash";
        }else{
            data += i;
        }

        console.log(data)
    }
}

Question1(30)