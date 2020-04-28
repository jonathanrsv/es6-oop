class NegociacoesView extends View{



    _template(model){
        return ` 
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
              ${model.negociacoes.map((n) => {
                  return ` 
                    <tr> 
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                  `
              }).join('')}
            <tfoot>
              <td colspan=3></td>
              <td> ${ model.negociacoes.reduce(function(total, n){ 
                  return total + n.volume;
              },0.0) } 
              </td>
            </tfoot>
        </table> 
        `;
    }

    update(model){
        console.log(model)
        this._elemento.innerHTML = this._template(model);
    }
}
