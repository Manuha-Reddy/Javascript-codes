function vowels(str){
var count = '0'
for(let i = 0; i < str.length; i++){
var char = str[i].toLowerCase();
 if ( char === 'a' || char === 'e' || char === "i" || char === "o" ||  char === "u"){
   count ++;
}
}
 return count;
}
document.write(vowels("Hello world"));
