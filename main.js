console.log('hello world');


function summ(a = 0, b = 0){
    return a + b; 
}


function diff (a, b){
    return a - b
}


function sayHi(){
    return new Promise(res => {
        setTimeout(() => res('hi'), 1000)
    })
}