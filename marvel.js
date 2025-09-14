let baseDeConhecimento = [
    {
        identificacao: "inicio",
        descricao: "O seu personagem é um herói?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "genero",
                confianca: true,
                justificativa: "O usuário informou que seu personagem é um herói"
            },
            {
                opcao: "não",
                redireciona: "humano",
                confianca: true,
                justificativa: "O usuário informou que seu personagem NÃO é herói"
            },
            {
                opcao: "não sei",
                redireciona: "humano",
                confianca: false,
                justificativa: "O usuário não sabe se é herói"
            }
        ]
    },
    {
        identificacao: "genero",
        descricao: "O seu personagem é do sexo masculino?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "vingadores",
                confianca: true,
                justificativa: "O usuário informou que seu personagem é do sexo masculino."
            },
            {
                opcao: "não",
                redireciona: "poderes",
                confianca: true,
                justificativa: "O usuário informou que seu personagem NÃO é do sexo masculino."
            },
            {
                opcao: "não sei",
                redireciona: "vingadores",
                confianca: false,
                justificativa: "O usuário informou que não sabe qual o genero do personagem."
            }
        ]
    },
    {
        identificacao: "humano",
        descricao: "O seu personagem é humano?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "eletricidade",
                confianca: true,
                justificativa: "O usuário informou que o personagem é um humano."
            },
            {
                opcao: "não",
                redireciona: "realidade",
                confianca: true,
                justificativa: "O usuário informou o personagem NÃO é humano."
            },
            {
                opcao: "não sei",
                redireciona: "eletricidade",
                confianca: false,
                justificativa: "O usuário não sabe dizer se o personagem é um humano ou não."
            }
        ]
    },
    {
        identificacao: "vingadores",
        descricao: "Faz parte dos Vingadores? (Equipe base)",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "misticos",
                confianca: true,
                justificativa: "O usuário disse que o personagem faz parte dos Vingadores."
            },
            {
                opcao: "não",
                redireciona: "imortal",
                confianca: true,
                justificativa: "O usuário informou que o personagem NÃO faz parte dos Vingadores."
            },
            {
                opcao: "não sei",
                redireciona: "imortal",
                confianca: false,
                justificativa: "O usuário informou que não sabe se o personagem é membro dos Vingadores."
            }
        ]
    },
    {
        identificacao: "poderes",
        descricao: "Tem poderes?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "irmao",
                confianca: true,
                justificativa: "O usuário confimou que o personagem tem poderes."
            },
            {
                opcao: "não",
                redireciona: "laminas",
                confianca: true,
                justificativa: "O usuário informou que o personagem que pensou NÃO tem poderes"
            },
            {
                opcao: "não sei",
                redireciona: "laminas",
                confianca: false,
                justificativa: "O usuário não sabe se o personagem tem algum poder"
            }
        ]
    },
    {
        identificacao: "eletricidade",
        descricao: "Tem poderes ou armas eletricas?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "vilao homem aranha",
                confianca: true,
                justificativa: "O usuário disse que o personagem tem seus poderes ou armas com tipo eletrico"
            },
            {
                opcao: "não",
                redireciona: "governante",
                confianca: true,
                justificativa: "O usuário garantiu que as armas ou os poderes do personagem NÃO são eletricos"
            },
            {
                opcao: "não sei",
                redireciona: "governante",
                confianca: false,
                justificativa: "O usuário não sabe se o personagem tem poder ou arma eletrica"
            }
        ]
    },
    {
        identificacao: "realidade",
        descricao: "Governa uma realidade ou dimensão propria?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "inferno",
                confianca: true,
                justificativa: "O usuário informou que o personagem é o governante de uma outra realidade ou dimensão"
            },
            {
                opcao: "não",
                redireciona: "espaco",
                confianca: true,
                justificativa: "O usuário disse que quem ele escolheu NÃO governa realidades ou dimensões diferentes"
            },
            {
                opcao: "não sei",
                redireciona: "inferno",
                confianca: false,
                justificativa: "O usuário falou que não sabe se o personagem controla uma outra realidade ou dimensão"
            },
        ]
    },
    {
        identificacao: "misticos",
        descricao: "Tem poderes misticos ?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "terra",
                confianca: true,
                justificativa: "O usuário informou que seu personagem tem poderes misticos"
            },
            {
                opcao: "não",
                redireciona: "100anos",
                confianca: true,
                justificativa: "O usuário informou que seu personagem NÃO possui poderes misticos."
            },
            {
                opcao: "não sei",
                redireciona: "terra",
                confianca: false,
                justificativa: "O usuário informou que não tem conheciemento se o personagem tem poderes misticos"
            },
        ]
    },
    {
        identificacao: "imortal",
        descricao: "O personagem é imortal?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "nordico",
                confianca: true,
                justificativa: "O usuário informou que seu personagem é imortal"
            },
            {
                opcao: "não",
                redireciona: "teias",
                confianca: true,
                justificativa: "O usuário informou que seu personagem não é imortal"
            },
            {
                opcao: "não sei",
                redireciona: "nordico",
                confianca: false,
                justificativa: "O usuário disse que não sabe se o personagem é imortal ou não"
            },
        ]
    },
    {
        identificacao: "irmao",
        descricao: "Tem um irmão rapido?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Wanda Maximoff",
                confianca: true,
                justificativa: "O usuario marcou que a personagem tem sim um irmão muito rapido"
                
            },
            {
                opcao: "não",
                resposta: "Capitã Marvel",
                confianca: true,
                justificativa: "O usuario marcou que não, a personagem NÃO tem um irmão que é rapido"
            },
        ]
    },
    {
        identificacao: "laminas",
        descricao: "Usa lâminas ou adagas caracteristicas?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Elektra",
                confianca: true,
                justificativa: "O usuario informou que a personagem tem algum tipo de lâmina ou adaga"
            },
            {
                opcao: "não",
                resposta: "Viuva Negra",
                confianca: true,
                justificativa: "O usuario marcou que a personagem NÃO usa armas brancas"
            },
        ]
    },
    {
        identificacao: "vilao homem aranha",
        descricao: "É um vilão famoso do Homem-Aranha?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Electro",
                confianca: true,
                justificativa: "O usuário escolheu a opção de que o personagem é um vilão do Homem Aranha"
            },
            {
                opcao: "não",
                resposta: "Chicote-Negro",
                confianca: true,
                justificativa: "O usuário marcou que o personagem NÃO é um vilão famoso do Homem Aranha"
            },
        ]
    },
    {
        identificacao: "governante",
        descricao: "É um governante de uma nação na Terra?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Doutor Destino",
                confianca: true,
                justificativa: "O usuario informou que o vilão governa um país"
            },
            {
                opcao: "não",
                resposta: "Duende Verde",
                confianca: true,
                justificativa: "O usuario marcou que o personagem NÃO governa uma nação"
            },
        ]
    },
    {
        identificacao: "inferno",
        descricao: "Vive em uma dimensão de bolso semelhante ao Inferno?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Mephisto",
                confianca: true,
                justificativa: "Foi informado que o vilão vivia numa dimensão como o Inferno"
            },
            {
                opcao: "não",
                resposta: "Dormammu",
                confianca: true,
                justificativa: "O vilão NÃO é de uma realidade como o Inferno"
            },
        ]
    },
    {
        identificacao: "espaco",
        descricao: "Tem origens no espaço ou em outro planeta?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "devorador",
                confianca: false,
                justificativa: "O usuário disse que o personagem possui origens fora da Terra com em um outro planeta ou no espaço"
            },
            {
                opcao: "não",
                redireciona: "ia",
                confianca: true,
                justificativa: "O usuário disse que o personagem NÃO tem origens fora da Terra com em um outro planeta ou no espaço"
            },
            {
                opcao: "não sei",
                redireciona: "ia",
                confianca: false,
                justificativa: "O usuário estava indeciso se o personagem é fora da Terra com de um outro planeta"
            },
        ]
    },
    {
        identificacao: "terra",
        descricao: "Tem origens na Terra?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Doutor Estranho",
                confianca: true,
                justificativa: "O usuario marcou que o personagem tem origens na Terra"
            },
            {
                opcao: "não",
                resposta: "Thor",
                confianca: true,
                justificativa: "O usuario marcou que o herói não é da Terra"
            },
        ]
    },
    {
        identificacao: "100anos",
        descricao: "Tem mais de 100 anos de idade?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Captão America",
                confianca: true,
                justificativa: "O usuario disse que o personagem tem SIM mais de 100 anos"
            },
            {
                opcao: "não",
                resposta: "Homem de Ferro",
                confianca: true,
                justificativa: "O usuario infomrou que o personagem ainda não tem 100 anos"
            },
        ]
    },
    {
        identificacao: "nordico",
        descricao: "O seu personagem é nordico?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Odin",
                confianca: true,
                justificativa: "Foi garantido que o personagem é nordico"
            },
            {
                opcao: "não",
                resposta: "Wolverine",
                confianca: true,
                justificativa: "O usuario informou que o personagem não era nordico"
            },
        ]
    },
    {
        identificacao: "teias",
        descricao: "O seu personagem usa teias?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Homem-Aranha",
                confianca: true,
                justificativa: "O usuario informou que o personagem usa teias de aranha"
            },
            {
                opcao: "não",
                resposta: "Demolidor",
                confianca: true,
                justificativa: "O usuario afirmou que o personagem NÃO usa teias"
            },
        ]
    },
    {
        identificacao: "devorador",
        descricao: "É um devorador de mundos?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Galactus",
                confianca: true,
                justificativa: "O usuario afirmou que o personagem é um devorador de mundos"
            },
            {
                opcao: "não",
                resposta: "Thanos",
                confianca: true,
                justificativa: "O usuario disse que o personagem NÃO devora mundos"
            },
        ]
    },
    {
        identificacao: "ia",
        descricao: "O seu personagem é uma IA do mal?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Ultron",
                confianca: true,
                justificativa: "O usuario marcou que o personagem é uma IA"
            },
            {
                opcao: "não",
                resposta: "Wendigo",
                confianca: true,
                justificativa: "O usuario marcou que o personagem NÃO é uma IA"
            },
        ]
    },
];



function selecionaPergunta(identificadorPergunta) {
    for (let index = 0; index < baseDeConhecimento.length; index++) {
        const element = baseDeConhecimento[index];
        if (element.identificacao == identificadorPergunta) {
            return element;
        }
    }
}

async function lerEntrada(mensagem) {
    process.stdout.write(mensagem);
    let buffer = "";
    const stdin = process.stdin;
    stdin.resume();
    stdin.setEncoding('utf8');
    
    return new Promise((resolve) => {
        stdin.on('data', function(data) {
            buffer += data;
            stdin.pause();
            resolve(buffer.trim());
        });
    });
}

let pergunta = selecionaPergunta("inicio");

let respostaFinal = null
let explicacao = []
let confianca = 100
let qtdIndecisoes = 0
while(respostaFinal == null) {
    console.log(pergunta.descricao);
    pergunta.opcoes.forEach(possivelResposta => {
        console.log(possivelResposta.opcao);
    });
    let resposta = await lerEntrada("-> ");

    let respostasPossiveis = pergunta.opcoes;
    for (let index = 0; index < respostasPossiveis.length; index++) {
        let respostaPossivelAtual = respostasPossiveis[index];
        if (resposta == respostaPossivelAtual.opcao) {
            if(!("resposta" in respostaPossivelAtual)){
                if(!respostaPossivelAtual.confianca){
                    qtdIndecisoes++
                }
                confianca = confianca - (qtdIndecisoes * (10));
            }

            if("justificativa" in respostaPossivelAtual){
                explicacao.push(respostaPossivelAtual.justificativa)
            }

            if ("redireciona" in respostaPossivelAtual) {
                pergunta = selecionaPergunta(respostaPossivelAtual.redireciona)
            } else {
                respostaFinal = respostaPossivelAtual.resposta;
            }
        }
    }
}

console.log("O seu personagem é: " + respostaFinal);
if(confianca < 0){
    confianca = 0;
}
console.log("Nivel de confiança: " + confianca + "%");
console.log(explicacao)

