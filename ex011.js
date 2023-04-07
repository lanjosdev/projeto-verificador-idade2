//ano atual do sistema client
let data = new Date();
let anoAtual = data.getFullYear();

//seto os elementos de interação
let campoNasc = document.getElementById('campoAno');
let campoResul = document.querySelector('div#resul');
let descrResul = document.querySelector('div#resul p');
let imgResul = document.querySelector('.img');
let btnVerifica = document.querySelector('#submit');

//incluindo ação/evento de Click no botão "VERIFICAR"
btnVerifica.onclick = function verificar() {
    let anoNasc = campoNasc.value;
    let genderRadios = document.getElementsByName('genero'); //vai pegar + de 1 radio (lista com radio "masculino" e "feminino")
    let genero;
    // let selecionado = false;
    // // for(let idxRadio of generos) {
    //     // if(idxRadio.type === 'radio' &&)
    // if(genderRadios[0].checked || genderRadios[1].checked) { //verficacao se radio foi marcado... sqn
    //     selecionado = true;
    // }    

    //Verficação campo nascimento
    if(anoNasc.length == 0 || parseInt(anoNasc) > anoAtual) { 
        alert('[ERRO] Verifique o dados e tente novamente!');
        descrResul.innerHTML = 'Preencha os dados acima para ver o resultado!'
        imgResul.classList.remove('visivel');
    } else {
        let idade = anoAtual - anoNasc;
        // let genderRadios = document.getElementsByName('genero'); //vai pegar + de 1 radio (lista)
        
        //Setar vars $genero e $imgResul em caso de Masc OU Fem
        if(genderRadios[0].checked) {
            // genero = 'Homem';
            //Execução em caso "Masculino" (imagens masculinas)
            if(idade >= 0 && idade < 10) {
                genero = 'Criança';
                imgResul.src = './images/crianca_m.png';
            } else if(idade < 21) {
                genero = 'Jovem';
                imgResul.src = './images/jovem_m.png';
            } else if(idade < 50) {
                genero = 'Homem';
                imgResul.src = './images/adulto_m.jpeg';
            } else {
                genero = 'Idoso';
                imgResul.src = './images/idoso_m.jpg';
            }

        } else if(genderRadios[1].checked) {
            // genero = 'Mulher';
            //Execução em caso "Feminino" (imagens femininas)
            if(idade >= 0 && idade < 10) {
                genero = 'Criança';
                imgResul.src = './images/crianca_f.jpg';
            } else if(idade < 21) {
                genero = 'Jovem';
                imgResul.src = './images/jovem_f.webp';
            } else if(idade < 50) {
                genero = 'Mulher';
                imgResul.src = './images/adulto_f.jpg';
            } else {
                genero = 'Idosa';
                imgResul.src = './images/idoso_f.jpeg';
            }
        }

        //Verificação do radios + Imprimir na tela o resultado(desc+genero+idade + img)
        if (genero == undefined) {
            alert('Marque o genero!');
        } else {
            descrResul.innerHTML = `Detectamos <strong>${genero} de ${idade} anos</strong>.`;
            imgResul.classList.add('visivel');
        }
    }
}