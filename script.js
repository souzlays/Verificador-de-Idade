function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'criança-homem.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.png')
            }else {
                img.setAttribute('src', 'homem-idoso.png')
            }

        }else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src','criança-mulher.png')
            }else if (idade < 21) {
                img.setAttribute('src','mulher-jovem.png')
            }else if (idade < 50) {
                img.setAttribute('src','mulher-adulta.png')
            }else {
                img.setAttribute('src','mulher-idosa.png')
            }
        }
        
        
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img);
       
    }

}