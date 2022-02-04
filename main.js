let a=prompt("vvedite chislo")
let nashe=document.querySelector('.bel1')
let kvad=document.querySelector('.bel2')
let minus=document.querySelector('.bel3')
let okryg=document.querySelector('.bel4')
let ostat=document.querySelector('.bel5')
nashe.value=a
    kvad.addEventListener("click",function(){
        kvad.value=a**2
    })
    minus.addEventListener("click",function(){
        minus.value=a*-1
    })
    okryg.addEventListener("click",function(){
        okryg.value=Math.round(a/3)
    })
    ostat.addEventListener("click",function(){
        ostat.value=a%10
    })