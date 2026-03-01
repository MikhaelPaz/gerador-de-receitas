let botao = document.querySelector("#botao")
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarReceita() {
    let textoUsuario = document.querySelector("#caixa").value
    let blocoReceita = document.querySelector(".receita")



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
                content: "Você é um gerador de rceitas, responda com três opções de receitas de um modo detalhado e simples para o usuario entender. Mande as opções de forma separada em paragrafos usando quebra de linhas. Separe também os ingredientes do modo de prparo, utilize quebra de linhas para ficar organizado"
            },

            {
                role: "user",
                content: textoUsuario
            }
        
        ]
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content
     
    blocoReceita.textContent = resultado

}
botao.addEventListener("click", gerarReceita)
