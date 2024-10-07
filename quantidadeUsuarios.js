import { getCSS } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: commonJs.getCSS('--bg-color'),
        paper_bgcolor: commonJs.getCSS('--bg-color'),
        title:{
            text:'Redes sociais com mais usuários',
            x:0,
            font:{
                color:commonJs.getCSS('--primary-color'),
                size:30,
                font:commonJs.getCSS('--font')
            }
        },
        xaxis:{
            tickfont:commonJs.tickConfig,
            title:{
                text:'Nome da redes',
                font:{
                    color:commonJs.getCSS('--secondary-color')
                }
            }
        },
        yaxis:{
            tickfont:commonJs.tickConfig,
            title:{
                text:'Bilhoẽs de usuários ativos',
                font:{
                    color:commonJs.getCSS('--secundary-color')
                }
            }

        }

    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()
