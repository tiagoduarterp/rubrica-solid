var QUADRO_HTML = `<div id="rubrica_modal" class="rubrica-container">
<div class="rubrica">
 <div class="rubrica-box">
   <div class="rubrica-content">
        ##CRITERIO##
    </div>
      <div class="rubrica-footer">
        <div class="rubrica-box-footer-1">
          <div>
           <button onClick="clearButtons()" class="btn clear-button">Limpar</button>
          </div>
       </div>
        <div class="rubrica-box-footer-2">
          TOTAL NOTA:
          <input type="text" id="total" class="input-total" readonly="false" value="0">
        </div>
        <div class="rubrica-box-footer-3">
         <div class="rubrica-buttons-send">
           <button class="btn-cancel-rubrica" onClick="closeRubrica()"> cancelar</button>
            <button class="btn btn-success" onClick="registerRubrica()"> Registrar </button>
          </div>
        </div>
     </div>
  </div>
</div>
</div>`;

var TEMA_AVALIATIVO = `<div class="rubrica-display">
<div class="rubrica-theme">
    <table class="rubrica-table">
        <thead>
            <tr class="rubrica-table-tr">
                <th class="th-title" colspan="3">
                   <div class="criterio"> ##CRITERIO##</div>
                </th>
            </tr>
        </thead>
        <tbody>
            ##TR##
        </tbody>
      </table>
</div>
</div>`;

var CRITERIO_TEMA_AVALIATIVO = ` <tr>
  <td class="td-grade rubrica-table-td">
      <input type="radio" onclick="setGrade(value,name)" name="##GRUPO_SELECAO_NOTA##" value="##NOTA##">
      <span>##NOTA##</span>
  </td>
  <td class="td-rubrica rubrica-table-td">
    ##TITULO##
  </td>
  <td class="td-rubrica-descripton rubrica-table-td">
      ##DESCRICAO##
  </td>
</tr>`;

const ITENS_AVALIATIVOS_JSON = {
    tema: {
      rubrica_1: {
        nota: 40,
        descricao: 'Aborda o tema com excelência: expõe sua opinião o tema, apoiando-se nos textos da coletânea.',
        titulo: 'Supera as Expectativas',
      },
      rubrica_2: {
        nota: 25,
        descricao: 'Aborda o tema satisfatoriamente: expõe sua opinião sobre o tema, mas demonstrando uma leitura superficial dos textos e da própria proposta de tema de redação.',
        titulo: 'Atende as Expectativas',
      },
      rubrica_3: {
        nota: 10,
        descricao: 'Apenas tangencia o tema: discorre sobre assuntos relacionados ao tema, demonstrando uma leitura demasiadamente superficial dos textos.',
        titulo: 'Fica áquem das expectativas',
      },
      rubrica_4: {
        nota: 0,
        descricao: 'Redação redigida fora do tema proposto.',
        titulo: 'Não atende as expectativas',
      },
    },
    estrutura: {
      rubrica_1: {
        nota: 35,
        descricao: 'O aluno apresenta um texto coeso e coerente, em que há manutenção do tema, progressão da sua ideia essencial, boa organização global e não- contradição interna ou externa. O texto atende plenamente ao esperado para um artigo de opinião, apresentando posicionamento do aluno, argumentação e contra- argumentação.',
        titulo: 'Supera as Expectativas',
      },
      rubrica_2: {
        nota: 25,
        descricao: 'O aluno apresenta um texto satisfatoriamente coeso e coerente, em que há manutenção e progressão do tema, mas com algum problema de organização global. Não há contradição interna nem externa. Uso adequado de um gênero de texto argumentativo. O texto atende satisfatoriamente a um artigo de opinião, apresentando posicionamento do aluno e argumentação.',
        titulo: 'Atende as Expectativas',
      },
      rubrica_3: {
        nota: 15,
        descricao: 'O aluno apresenta um texto pouco coeso e coerente, sem continuidade e progressão da ideia essencial do tema, com problemas de organização global e também com alguma contradição interna e/ou externa. Uso pouco adequado de um gênero de texto argumentativo, com um posicionamento e argumentação pouco articulados.',
        titulo: 'Fica áquem das expectativas',
      },
      rubrica_4: {
        nota: 0.5,
        descricao: 'O aluno apresenta um texto sem coesão e sem coerência, em que não há continuidade e progressão da ideia essencial do tema. Há ainda problemas gerais de organização global do texto, com contradição interna e externa. Não atende o esperado para um artigo ou mesmo um texto de opinião.',
        titulo: 'Não atende as expectativas',
      },
    },
    linguagem: {
      rubrica_1: {
        nota: 25,
        descricao: 'Uso adequado da norma-padrão, sem erros de concordância, ortografia, pontuação, emprego de gírias ou marcas evidentes da oralidade.',
        titulo: 'Supera as Expectativas',
      },
      rubrica_2: {
        nota: 15,
        descricao: 'Uso adequado da norma, mas com dois ou três erros de concordância ou pontuação ou ortográficos que não comprometem a leitura do texto. Não faz uso de gírias e marcas evidentes da oralidade.',
        titulo: 'Atende as Expectativas',
      },
      rubrica_3: {
        nota: 10,
        descricao: 'Uso pouco adequado da norma, com vários erros de concordância, pontuação ou ortográficos que comprometem a leitura do texto, desviando a atenção do corretor mais para a forma do que para o conteúdo. O texto apresenta gírias e marcas evidentes da oralidade.',
        titulo: 'Fica áquem das expectativas',
      },
      rubrica_4: {
        nota: 5,
        descricao: 'Uso inadequado da norma, com vários erros de concordância, pontuação e ortográficos que comprometem muito a leitura do texto, desviando a atenção do corretor totalmente para a forma, em detrimento do conteúdo. Uso de marcas evidentes da oralidade.',
        titulo: 'Não atende as expectativas',
      },
      rubrica_5: {
        nota: 0,
        descricao: 'Texto com problemas gravíssimos, inviabilizando a compreensão do tema abordado, desviando totalmente a atenção do leitor para os diversos erros.',
        titulo: 'Não atende as expectativas',
      },
    }
  }