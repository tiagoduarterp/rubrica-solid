let soma = 0
let totalTema = 0
let totalEstrutura = 0
let totalLinguagem = 0
let attempty  = ''

function createTr(value,group) {
  let tr = ''
  for (const key in value) {
    tr += `<tr>
                <td class="td-grade rubrica-table-td">
                    <input type="radio" onclick="setGrade(value,name)" name="`+group+`" value="`+ value[key].nota + `">
                    <span>`+ value[key].nota + `</span>
                </td>
                <td class="td-rubrica rubrica-table-td">
                   `+ value[key].titulo + `
                </td>
                <td class="td-rubrica-descripton rubrica-table-td">
                    `+ value[key].descricao + `
                </td>
              </tr>
              `
  }
  return tr
}

function createTable() {
  let corpo = ''
  for (const key in itens) {
    corpo += `<div class="rubrica-display">
                <div class="rubrica-theme">
                    <table class="rubrica-table">
                        <thead>
                            <tr class="rubrica-table-tr">
                                <th class="th-title" colspan="3">
                                `+ key.toLocaleUpperCase() + `
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          `+ createTr(itens[key],key) + `
                        </tbody>
                      </table>
                </div>
                </div>
                `
  }
  return corpo
}

let content = 
              '<div id="rubrica_modal" class="rubrica-container">'+
                '<div class="rubrica">'+
                 ' <div class="rubrica-box">'+
                   ' <div class="rubrica-content">'
                      + createTable() + 
                    '</div>'+
                      '<div class="rubrica-footer">'+
                        '<div class="rubrica-box-footer-1">'+
                          '<div>'+
                           ' <button onClick="clearButtons()" class="btn clear-button">Limpar</button>'+
                          '</div>'+
                       ' </div>'+
                        '<div class="rubrica-box-footer-2">'+
                         ' TOTAL NOTA: '+
                          '<input type="text" id="total" class="input-total" readonly="false" value="0">'+
                        '</div>'+
                        '<div class="rubrica-box-footer-3">'+
                         ' <div class="rubrica-buttons-send">'+
                           ' <button class="btn-cancel-rubrica" onClick="closeRubrica()"> cancelar</button>'+
                            '<button class="btn btn-success" onClick="registerRubrica()"> Registrar </button>'+
                          '</div>'+
                        '</div>'+
                     ' </div>'+
                  '</div>'+
                '</div>'+
              '</div>'
              
let createButton = function () {
  $(window).on("load", function () {
    let lista = $('#manualgradingform').find('div').first().find('input').first().val()
    let splits = lista.split(',');
    //let area = $('[id=q1]').length
    let count = 0
    for (const section of $('[id=q1]')) {
      let b = `<div class="atto_group other_group" style="display: none;" hidden="hidden">
                  <button type="button" class="" tabindex="-1" title="Rubrica" onClick="openRubrica(` + splits[count] + `)">
                    <i  class="fa fa-pencil fa-fw color-rubrica-pencil" title="Rubrica" aria-label="Rubrica"></i>
                  </button>
               </div>`
      count++
      let el = $(section).find('.editor_atto_toolbar')
      $(el).append(b)
    }
  });
}


let openRubrica = function (id) {
  attempty = id
  $('body').append(content)
}
let closeRubrica = function () {
  attempty = ''
  $('body').find('#rubrica_modal').remove()
}
if (window.location.pathname == '/mod/quiz/report.php') {
  createButton()
}



/* Funcionalidades */

function setGrade(value,group){

 if(group == 'tema'){
    totalTema = parseFloat(value)
 }
 if(group == 'estrutura'){
    totalEstrutura = parseFloat(value)
 }
 if(group == 'linguagem'){
    totalLinguagem = parseFloat(value)
 }
 soma = totalTema + totalEstrutura + totalLinguagem
 document.getElementById('total').value = soma
}


function clearButtons(){
  for (const key in itens) {
    let button = document.getElementsByName(key);
    for(var i=0;i<button.length;i++)
    button[i].checked = false;
  }
  document.getElementById('total').value = 0
}

function searchInfo(obj,grade){
  for (const key in obj) {
    if(obj[key].nota == grade){
      return obj[key]
    }
  }
}

function registerRubrica(){
  
  let tema = searchInfo(itens.tema, totalTema)
  let estrutura  = searchInfo(itens.estrutura, totalEstrutura)
  let linguagem  =searchInfo(itens.linguagem, totalLinguagem)
  let result =`
          <p><strong>Avaliado :&nbsp;</strong>Tema&nbsp; |&nbsp; <b>Nota :</b> `+tema.nota+`&nbsp; &nbsp;|&nbsp; &nbsp;<b>Devolutiva:</b>&nbsp;&nbsp;`+tema.titulo+`</p>
          <p><strong>Avaliado :&nbsp;</strong>Estrutura&nbsp; |&nbsp; <b>Nota :</b> `+estrutura.nota+`&nbsp; &nbsp;|&nbsp; &nbsp;<b>Devolutiva:</b>&nbsp;&nbsp;`+estrutura.titulo+`</p>
          <p><strong>Avaliado :&nbsp;</strong>Linguagem&nbsp; |&nbsp; <b>Nota :</b> `+linguagem.nota+`&nbsp; &nbsp;|&nbsp; &nbsp;<b>Devolutiva:</b>&nbsp;&nbsp;`+linguagem.titulo+`</p>     
          `
  let el = document.getElementById('q'+attempty+':1_-comment_ideditable')
  el.querySelector('p').innerHTML = result
  document.getElementById('q'+attempty+':1_-mark').value = soma

  closeRubrica()
}



/* 
function verifyValues(){
  let j = 0
  let total = 4
  let button = document.getElementsByName('tema');
  for(var i=0;i<button.length;i++){

    if(button[i].checked == false){
      j++
    }
  }
  return j == total ? false : true
} */



