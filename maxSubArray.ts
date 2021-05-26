function MaxSubarray(arr) { 
  
  // code goes here  
  const length = arr.length
  const subArray = []
  for (let i = 0; i < length; i++){
    for(let k = 0; k < length; k++){
      if (i >= (length - k)){
        continue;
      }
        subArray.push(arr.slice(i, (length - k)))
      
    }
  }
  let maxArray = 0;
  for(let i = 0; i < (subArray.length -1); i++){
    const current = subArray[i].reduce((total, num)=> total + num, 0)
    if(maxArray < current){
      maxArray = current;
    }
  }
  return maxArray; 

}
   
// keep this function call here 
// @ts-ignore
console.log(MaxSubarray(readline()));
