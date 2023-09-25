function subsituiPares(array){
    if (array.length === 0) {
        console.log("Conjunto de números vazios!");        
    } else{
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 0) {
            console.log("Você já é zero!");
            } else if (array[i] % 2 === 0){
            array[i] = 0;
            console.log(`Substituindo ${array[i]} por 0...`);
        }   
    }
    return array;
}
}
let arr = [1, 3, 4, 6, 10, 33, 23, 90];
console.log(subsituiPares(arr));
console.log(subsituiPares([]));