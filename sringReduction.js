//  ab => c
//  bc => a
//  ca => b
//  ac => b
//  ba => c
//  abcb 
//   a != b => ccb
//   c != b => ca
//   c != a => b

function reducer(ab){

  switch(ab){
    case 'ab':{
      return 'c'
    }
    case 'bc': {
      return 'a'
    }
    case 'ca': {
      return 'b'
    }
    case 'ac': {
      return 'b'
    }
    case 'cb': {
      return 'b'
    }
    case 'ba': {
      return 'c'
    }
    default: {
      return ab
    }
  }
}

function checkStr(str){
  const length = str.length;
  for(let i = 0; i < length-1; i++){
      if(str[i] === str[1+1]){
        return true;
      }else {
        return false
      }
    }
}

function StringReduction(str) { 

  // code goes here  
  if(checkStr(str)){
    console.log('cant reduce')
    return str.length
  }else {
  //     let ab = str.slice(0,2)
  // if(checkStr(ab)){
  //   ab = str.slice(1,3)
  //   const c = reducer(ab)
  //   const newStr = str.replace(ab, c)
  //   StringReduction(newStr)
  // }
  }

}
   
// keep this function call here 
// @ts-ignore
console.log(StringReduction(readline()));
