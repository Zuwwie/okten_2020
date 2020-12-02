function wakeup(energy,cb) {
    setTimeout(() => {
        console.log(`Проснувся`);
        energy-=10
        console.log(energy);
        cb(null,energy)
    }, 2000);
}

function gogo(energy,cb) {
    setTimeout(() => {
        console.log(`Пішов їсти`);
        console.log(energy);
        cb(null,energy);
    }, 200);
}

function eat(cb) {
    setTimeout(() => {
        console.log(`Хаваю`);
        cb();
    }, 500);
}
function learn(cb) {
    setTimeout(() => {
        console.log(`Тіпа вчусь`);
        cb();
    }, 500);
}
function serial(cb) {
    setTimeout(() => {
        console.log(`Втикаю серіали`);
        cb();
    }, 1000);
}
function owu(cb) {
    setTimeout(() => {
        console.log(`Тіпр лекція`);
        cb();
    }, 3000);
}

function dota() {
    setTimeout(() => {
        console.log(`Розвалюю раків`);
    }, 2090);
}

let ene =5;
wakeup(ene,() => {
    gogo(ene,()=> {
        eat(()=> {
            learn(()=> {
                serial(()=> {
                    owu(()=>
                    dota())
                })
            })
        })
    });
});