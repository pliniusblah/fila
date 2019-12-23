const Fila = () => {
  let data = [];
  let tam = -1;

  const add = (value) => {
    tam++;
    data[tam] =  value;

    return value;
  }

  const remove = () => {
    if(tam < 0){
      return [];
    }

    tam--;
    data.splice(0, 1);

    return data;
  }

  const print = () =>{ 
    return console.log(data);
  };
  
  return {
    add,
    remove,
    print
  }
}

const A = Fila();

console.log(A.add(1));
console.log(A.add(2));
console.log(A.add(3));
console.log(A.add(3));
console.log(A.add(3));
console.log(A.add(5));
console.log(A.add(3));
console.log(A.add(5));
console.log(A.print());
console.log(A.remove());
console.log(A.remove());
console.log(A.remove());
console.log(A.remove());
console.log(A.remove());
console.log(A.remove());
console.log(A.add(9));
console.log(A.add(7));
console.log(A.print());