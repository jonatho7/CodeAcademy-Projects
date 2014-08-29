var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
$('.line1').text( xhr.status );
$('.line2').text( xhr.statusText );