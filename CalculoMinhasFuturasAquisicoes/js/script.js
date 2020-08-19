//Coletando elementos do HTML
const entradaTarefa = document.querySelector('.entrada_tarefa')
const botaoAdiciona = document.querySelector('.botao_tarefa')
const listaTarefa = document.getElementById('lista_tarefas')
const mensagemErro = document.querySelector('.erro')
const botaoMarca = document.querySelector('.botao_marca')
const botaoDesmarca = document.querySelector('.botao_desmarca')
const botaoLimpa = document.querySelector('.botao_limpa')

//Adicionando função ao botão de 'Adicionar tarefa'
botaoAdiciona.addEventListener('click', function() {
    
    //Limpando entrada da tarefa dos espaços vazios
    const tarefa = entradaTarefa.value.trim()
    
    //Condição que verifica se entrada está vazia e, se verdadeira, retorna mensagem de erro
    if (tarefa.length === 0) {
        return mensagemErro.innerHTML = 'Digite alguma tarefa, por favor'
    }

    //Adicionando tarefa a cada vez que o usuário clicar em 'Adicionar tarefa' e ela for válida
    listaTarefa.innerHTML += `
    <div class="tarefa_unitaria">
        <div class="tarefa_unitaria_informacao">
            <li>
                <label class="container_check">
                    ${entradaTarefa.value} 
                    <input type="checkbox" class="tarefa_adicionada" onclick="marcarTarefa(this)"></input>
                    <span class="check"></span>
                </label>
            </li>
        </div>
        <div class="tarefa_unitaria_botao"  onclick="removeTarefa(this)">
            <button class="botao_fechar">Excluir</button>
        </div>
     </div>`   
    
    //Limpando campo de entrada após inserção de nova tarefa na lista de tarefas
    entradaTarefa.value = ''
})

//Função do botão de remover tarefa unitária
function removeTarefa (item) {
    item.parentNode.remove()
}

//Função de marcar tarefa como feita e de desmarcar tarefa anteriormente marcada de forma unitária
function marcarTarefa (item) {

    //Se a tarefa não estiver marcada, ao clicar, adiciona sublinhado
    if (!item.parentNode.classList.contains('sublinhado')){
        item.parentNode.classList.add('sublinhado')
    }
    //Se a tarefa já estiver marcada, ao clicar, remove sublinhado
    else {
        item.parentNode.classList.remove('sublinhado')
        item.checked = false
    }
}

//Adicionando função de limpar mensagem de erro e a entrada quando o usuário clicar na entrada para digitar nova tarefa
entradaTarefa.addEventListener('focus', function() {
    mensagemErro.textContent = ''
    entradaTarefa.value = ''
})

//Adicionando função de marcar todas as tarefas como feitas no botão 'Marcar todas'
botaoMarca.addEventListener('click', function (){
    const todasTarefas = document.querySelectorAll('.tarefa_adicionada')
    for (let i = 0; i < todasTarefas.length; i++) {
        todasTarefas[i].checked = true
        todasTarefas[i].parentNode.classList.add('sublinhado')

    }
})

//Adicionando função de desmarcar todas as tarefas no botão 'Desmarcar todas'
botaoDesmarca.addEventListener('click', function (){
    const todasTarefas = document.querySelectorAll('.tarefa_adicionada')
    for (let i = 0; i < todasTarefas.length; i++) {
        todasTarefas[i].checked = false
        todasTarefas[i].parentNode.classList.remove('sublinhado')
    }
})

//Adicionando função de limpar todas as tarefas no botão 'Limpar todas'
botaoLimpa.addEventListener('click', function() {
    listaTarefa.innerHTML= ''
})
