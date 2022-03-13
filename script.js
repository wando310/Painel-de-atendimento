let slc = (e)=>{return document.querySelector(e)}
let slcAll = (e)=>{return document.querySelectorAll(e)}

const senhas = ['BRN12','NTJ23','MJE45','FFB67','REQ78', 'RTY89','WWD56']
const guiches = ['01', '02', '03', '04', '05', '06', '07']


//Add ao Dom
function chamada() {
    senhas.map(item => {
        const liSenha = document.createElement('li')
        liSenha.innerHTML = `<span>${item}</span>`
        document.querySelector('.chamada .ul-senha').appendChild(liSenha)
    })
    guiches.map(item => {
        const liGuiche = document.createElement('li')
        liGuiche.innerHTML = `<span>${item}</span>`
        slc('.chamada .ul-guiche').appendChild(liGuiche)
    })
}

chamada()

//Selecionando e removendo item
slc('.btn').addEventListener('click', selectLinha)

let count = 0
function selectLinha() {

    slc('.audio').play()

    if (count > 6) {
        slc('.span-senha').innerHTML = '---'
        slc('.span-guiche').innerHTML = '---'
        return
    }
    slc('.span-senha').innerHTML = senhas[count]
    slc('.span-guiche').innerHTML = guiches[count]

    slcAll('.ul-senha li span')[count].classList.add('active')
    slcAll('.ul-guiche li span')[count].classList.add('active')

    const set1 = setInterval(() => {
        slc('.span-senha').style.opacity = '0'
        slc('.span-guiche').style.opacity = '0'
    }, 1000);
    const set2 = setInterval(() => {
        slc('.span-senha').style.opacity = '1'
        slc('.span-guiche').style.opacity = '1'
    }, 2000);   

    count++
}