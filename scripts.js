let botao = document.querySelector("#botao")
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarReceita() {
    let textoUsuario = document.querySelector("#caixa").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: "system",
                content: "Você é um gerador de rceitas, responda com três opções de receitas de um modo detalhado e simples para o usuario entender."
            },

            {
                role: "user",
                content: textoUsuario
            }
        
        ]
        })
    })


    console.log(resposta)
}
botao.addEventListener("click", gerarReceita)
