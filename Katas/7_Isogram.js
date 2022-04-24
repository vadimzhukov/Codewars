function isIsogram(str){
  
    const set = new Set(str.toUpperCase().split(''))
    
    return set.size == str.length
   
  }
  
isIsogram("Dermatoglyphics")
isIsogram("isogram")
isIsogram("aba")
isIsogram("moOse")
isIsogram("")