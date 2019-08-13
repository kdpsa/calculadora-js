function operacao(op) {
    var txta = document.querySelector('input#txta')
    var txtb = document.querySelector('input#txtb')
    var res = document.querySelector('div#res')
    var n1 = Number(txta.value)
    var n2 = Number(txtb.value)
    var s;
    switch (op) {
        case 'soma':
            s = (n1 + n2)
            break
        case 'sub':
            s = (n1 - n2)
            break;
        case 'mult':
            s = (n1 * n2)
            break;
        case 'div':
            if (n2 == 0) {
                s = '<strong>Número não divisível por 0</strong>.'
            } else {
                s = (n1 / n2)
            }
            break;
    }
    res.innerHTML = `Resultado: ${s}`
}