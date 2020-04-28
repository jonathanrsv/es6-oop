class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._listaNegociacoes = new ListaNegociacoes();

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"))
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes)
    }
    
    adiciona(event){
        event.preventDefault();
        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._mensagemView.update(this._mensagem);
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario()
        this._negociacoesView.update(this._listaNegociacoes)
        console.log(this._listaNegociacoes.negociacoes)

    }

    _criaNegociacao() {
        let helper = new DateHelper();
        return new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
      }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus()
    }
}