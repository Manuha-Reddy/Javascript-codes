function palindrome(str){
  const rs = str.split('').reverse().join('');
  if(str === rs){
    return true;
  } else {
    return false;
  }
}

document.write(palindrome("madam") + '<br>');
document.write(palindrome("abdb") + '<br>');
document.write(palindrome("ab") + '<br>');
document.write(palindrome("a") + '<br>');
