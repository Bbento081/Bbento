    let txtn1 = document.querySelector('button')
    let res1  = document.querySelector('div#res1')
    let res2 = document.querySelector('div#res2')
    let res3 = document.querySelector('div#res3')
    txtn1.addEventListener('click', clicar)


    function clicar(){
        let item = prompt('Qual o poduto que você deseja comprar ?')
        let n1 = Number(prompt(`Qual o valor do ${item} ?` ))
        let n2 = Number(prompt(`Qual o valor que você deu para pagar o ${item}`))
        let s = n2 - n1
        s.toFixed(2)
        res1.innerHTML = `Você comprou um ${item} no valor de ${n1} R$`
        res2.innerHTML = `Pagou ${n2} R$ por ele `
        res3.innerHTML = `E no final seu troco foi de ${s} R$.`
        
        if (s < 0){
            res3.innerHTML = `Você não terá troco, pois pagou ${n2} R$ em um produto que custa ${n1} </br> Saldo negativo de ${s} R$`
        }
    }