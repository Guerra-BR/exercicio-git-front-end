
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(__) _____-____'
})

$('form').on('submit', function(e){
    e.preventDefault()
    alert('Sua solicitação foi encaminhada com sucesso')
})

$('#servicos a').click (function(){
    const destino = $('#contato')
    const servico = $(this).parent().find('h4').text()

    $('#descricao').val(`Olá, estou aqui para solicitar o Serviço de: ${servico}`)

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})

$('#anonimous').change(function(){
    if(this.checked){
        const mensagem = $('#descricao').val()
        const numero = parseInt(Math.random() * 1000000)
        const nome = $('#pseudonimo').val()

        $('#descricao').val(`Está é a solicitação anônima de número ${numero}\n\n
${mensagem}\n\n
Atenderei pelo pseudônimo de ${nome}\n`)
    } else{
        $('#descricao').val('')
    }
})
