// array
let array = ['string', 1, true];
console.log(array);

// outros tipos de array
let array1 = ['string', 1, true, ['array2'], ['array3'], ['array4']];
console.log(array1[0]);

//forEach
array1.forEach(function(item, index){console.log(item, index)});

//push adiciona no final
array.push('novo item');

//pop exclui o final
array.pop();
console.log(array);

//shift exclui no inicio
array.shift();
console.log(array);

//unshift add no inicio
array.unshift('tole');
console.log(array);

//indexOf retorna o indicio no array
console.log(array.indexOf(true));

//splice remove ou substitui um item pelo indice
array.splice(0,1);
console.log(array);

//slice retorna uma parte de array existente
let novoArray = array1.slice(1,3)
console.log(novoArray);

//objeto
let object = {String: 'string', Number: 1, Boolean: true, Array:['array'], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object);

var string = object.String;
console.log(string);

var arrayInterno = object.Array;
console.log(arrayInterno);

var {String, Boolean, objectInterno} = object;
console.log(String, Boolean, objectInterno);