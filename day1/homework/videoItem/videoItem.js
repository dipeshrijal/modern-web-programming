const items = Array.from(document.querySelectorAll('[data-time]'));

let hello = items.filter(item => item.innerHTML.includes("ECMA6"))
    .map(item => item.getAttribute('data-time'))
    .map((x)=>(parseInt(x.split(":")[0]*60)) + parseInt(x.split(":")[1]))
    .reduce((a,b) => a + b);


console.log(hello);
