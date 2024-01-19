/*
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal 

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


function season(wins, loses){
    return wins - loses
}

let finalSeason = season(80, 20)

function level(finalSeason){
    if (finalSeason <= 10){
        return "Ferro"
    } else if (finalSeason >= 11 && finalSeason <= 20){
        return "Bronze"
    } else if (finalSeason >= 21 && finalSeason <= 50){
        return "Prata"
    } else if (finalSeason >= 51 && finalSeason <= 80){
        return "Ouro"
    } else if (finalSeason >= 81 && finalSeason <= 90){
        return "Diamante"
    } else if (finalSeason >= 91 && finalSeason <= 100){
        return "Lendário"
    } else if (finalSeason >= 101){
        return "Imortal"
    } else {
        return "Error! You will be banned!"
    }
}

let levelResult = level(finalSeason)
console.log(`O herói tem o saldo de vitórias de ${finalSeason} e está no nível de ${levelResult}`)
