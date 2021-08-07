// 1) responsabilidade única - uma classe só tem uma unica responsabilidade.
// 2) aberto para extensao fechado para modificaçao
// 3) Liskov 
// 4) Interface Segregation
// 5) Injeçao de Dependencia


class Log {
    log(mensagem){
      console.log('Log',mensagem);
   }
  } 
  
  class EditorDefault {
    constructor(){
  
    }
    buttonRubrica(){
      
    }
  }
  
  class HtmlMount{
    populateHtmlWithVariable(html, corpo, filter) {
        return html.replace(filter, corpo);
    }
    createQuadro(){
        this.query('body').append(this.quadro);
        return this;
      }      
  }

  class Template extends HtmlMount{
      constructor(quadro, itensAvaliativos,criterioAvaliativos, criterioTemaAvaliativo){
        super()
        this.quadro = quadro;
        this.query = $;
        this.itensAvaliativos = itensAvaliativos;
        this.criterioAvaliativos = criterioAvaliativos;
        this.criterioTemaAvaliativo = criterioTemaAvaliativo;
      }
      getItensAvaliativos(index=0){
        return (index) ? this.itensAvaliativos[index] : this.itensAvaliativos;
      }
      getCriteriosAvaliativos(){
        return this.criterioAvaliativos;
      }
      getCriterioTemaAvaliativo(){
        return this.criterioTemaAvaliativo;
      }   
      populateItensAvaliativos(){
        let corpo = '';
        for (let key in this.getItensAvaliativos()) {
            let bodyCriterio = this.getCriteriosAvaliativos();
            let valor = this.getItensAvaliativos(key);
            bodyCriterio = this.populateHtmlWithVariable(bodyCriterio,this.populateCriterioTemaAvaliativo(valor), '##TR##');

            corpo += this.populateHtmlWithVariable(bodyCriterio, key, '##CRITERIO##');
        }
        this.quadro = this.populateHtmlWithVariable(this.quadro, corpo, '##CRITERIO##');

      }
      populateCriterioTemaAvaliativo(itensTema){
          let criterioTemaAvaliativo ="";
          for ( let rubrica in itensTema){
            criterioTemaAvaliativo += this.populaItemCriterioTemaAvaliativo(itensTema[rubrica]);
          }
          return criterioTemaAvaliativo;
        
      }
      populaItemCriterioTemaAvaliativo(itenTema) {
            let criterioTemaAvaliativo = this.getCriterioTemaAvaliativo()
            criterioTemaAvaliativo = this.populateHtmlWithVariable(criterioTemaAvaliativo, itenTema.nota ,'##NOTA##');
            criterioTemaAvaliativo = this.populateHtmlWithVariable(criterioTemaAvaliativo, itenTema.titulo ,'##TITULO##');
            criterioTemaAvaliativo = this.populateHtmlWithVariable(criterioTemaAvaliativo, itenTema.descricao ,'##DESCRICAO##');
            criterioTemaAvaliativo = this.populateHtmlWithVariable(criterioTemaAvaliativo, itenTema.nota ,'##NOTA##');
            return criterioTemaAvaliativo;
      }


  }

  class rubricaComponent{
  
    constructor(query, log, listRubrica){
      this.query = query
      this.log = log
      this.listRubrica = listRubrica
    }
    registerRubrica(){
    
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
    closeRubrica(){
      $('body').find('#rubrica_modal').remove()
    }
    setGrade(){
      this.log.log('Setando nota')
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
    clearButtons(){
      for (const key in itens) {
        let button = document.getElementsByName(key);
        for(var i=0;i<button.length;i++)
        button[i].checked = false;
      }
      document.getElementById('total').value = 0
    }
    searchInfo(obj,grade){
      for (const key in obj) {
        if(obj[key].nota == grade){
          return obj[key]
        }
      }
    }
    createTr(value,group){
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

    createPopupQuadro(){
        this.templateComponent.createQuadro();
        return this;
    }
    populaQuadro(){
        this.templateComponent.populateItensAvaliativos();
        return this;
    }
  }
  
  class Rubrica extends rubricaComponent{
    constructor(dom, log, templateComponent){
      super()  
      this.log = log;
      this.query = $;
      this.templateComponent = templateComponent;
    }
    newRubrica(){
      this.populaQuadro().createPopupQuadro();
    }
  }
  
  let rubrica = new Rubrica (this, new Log(), new Template(QUADRO_HTML, ITENS_AVALIATIVOS_JSON, TEMA_AVALIATIVO, CRITERIO_TEMA_AVALIATIVO));

  /* 
  rubrica.newRubrica();
   */