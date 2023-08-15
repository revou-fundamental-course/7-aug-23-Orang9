const alas1 = document.getElementById('alas1')
const alas2 = document.getElementById('alas2')
const tinggi = document.getElementById('tinggi')
const sisiB = document.getElementById('sisiB')
const sisiC = document.getElementById('sisiC')
const hitung1 = document.getElementById('hitung1')
const output1 = document.getElementById('output1')
const hitung2 = document.getElementById('hitung2')
const output2 = document.getElementById('output2')

hitung1.addEventListener('click',function() {
    let a = alas1.value;
    let t = tinggi.value;
    let l = 0.5*a*t;
    output1.innerHTML = `L = ${l}`;
})

hitung2.addEventListener('click',function() {
    let a = alas2.value;
    let b = sisiB.value;
    let c = sisiC.value;
    let k = Number(alas2.value) +Number(sisiB.value) +Number(sisiC.value);
    output2.innerHTML = `K = ${k}`; 
})
