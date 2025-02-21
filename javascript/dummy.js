function createFunction(){
  function multiplyBy2(num){
    return num*2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction(3);
// const result = generatedFunc(3);
console.log(generatedFunc); // 6