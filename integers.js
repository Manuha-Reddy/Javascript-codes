function getrange(x,y){
  if (x >= y){
    return [];
  }
  else {
    return [x].concat(getrange(x+1, y));
  }
}
document.write(getrange(2,5));
