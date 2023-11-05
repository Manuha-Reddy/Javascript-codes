function find(str){
  var words = str.split(' ');
  var longestword = '';
  for(let i = 0; i < words.length ; i++){
   if( words[i].length > longestword.length){
     longestword = words[i]
   }
  }
  return longestword;
}
  document.write(find("Manuha Reddy is an confidence girl"));
