let allClass = document.getElementsByTagName(`p`)

console.log(allClass);

for (let i = 0; i < allClass.length; i++) {
    allClass[i].innerText = `hello oktenweb`
    
}

let allDivs = document.getElementsByTagName(`div`);

for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].style.backgroundColor = `red`
}