function reff(callback){
  callback();
}
function reff1(){
document.write("hello world");
}
reff(reff1);
