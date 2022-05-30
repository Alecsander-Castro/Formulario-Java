class App {
    novoCadastro (){
        event.preventDefault();
        let nome = document.querySelector("input[name='nome']").value;
        let sobrenome = document.querySelector("input[name='sobrenome']").value;
        let email = document.querySelector("input[name='email']").value;
        let casa = document.querySelector("select[name='casa']").value;
        let cadastro = new Cadastro(nome, sobrenome,email,casa);
        this.listaCadastro(cadastro)
        this.limparCampo()
    }

    criarBotaoRemover (){
        let botaoRemover = document.createElement("button")
        botaoRemover.setAttribute("onclick" , "aplicativo.remover()")
        botaoRemover.setAttribute("class" , "button3")
        botaoRemover.innerText = "Remover"
        return botaoRemover;
    }

    limparCampo(){
        document.querySelector("input[name='nome']").value = "";
        document.querySelector("input[name='sobrenome']").value = "";
        document.querySelector("input[name='email']").value = "";
        document.querySelector("select[name='casa']").value = "empty";
    }

    listaCadastro (cadastro){
        let novaLista = document.createElement("li")
        let propiedadesCadastro ="Nome: " + cadastro.nome + " |" + " Sobrenome: " + cadastro.sobrenome + " |" + " E-mail: " + cadastro.email + " |" + " Casa: " + cadastro.casa
        novaLista.setAttribute("class" , "lista")
        novaLista.innerHTML += propiedadesCadastro
        let botaoRemover = this.criarBotaoRemover()
        novaLista.appendChild(botaoRemover)
        document.getElementById("propiedades").appendChild(novaLista)
    }
    
    remover(){
        let liRemover = event.target.parentNode
        document.getElementById("propiedades").removeChild(liRemover)
    }
}

