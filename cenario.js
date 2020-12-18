
const imagens = ["Centro.png","FimParaBaixo.png","FimParaCima.png","FimParaDireita.png",
                  "FimParaEsquerda.png", "ParedeHorizontal.png","ParedeVertical.png",
                 "QuinaInferiorDireita.png","QuinaInferiorEsqurda.png","QuinaSuperiorDireita.png",
                 "QuinaSuperiorEsquerda.png","TBaseDireita.png","TBaseEsquerda.png","TBaseInferior.png","TBaseSuperior.png","Fundo.png"]
var labirinto = new [30][40]

function insertSrc(){
}
 var cont =0
function gerarLabirinto(){
    let quadro = document.getElementById("corpo")
    for(var i =0; i<30;i++){
        for (var j=0;j<40;j++) {
            let newElement = document.createElement('img')            
            switch(i){
                case 0:
                    switch(j){
                        case 0:
                            newElement.src = (`img/${imagens[10]}`)
                            break
                        case 39:
                            newElement.src = (`img/${imagens[9]}`)
                            break
                        default:
                            newElement.src = (`img/${imagens[15]}`)
                    }
                    break
                case 29:
                    switch(j){
                        case 0:
                            newElement.src = (`img/${imagens[8]}`)
                            break
                        case 39:
                            newElement.src = (`img/${imagens[7]}`)
                            break
                        default:
                            newElement.src = (`img/${imagens[15]}`)
                    }
                    break
                default:
                    newElement.src = (`img/${imagens[15]}`) 
                }
            quadro.appendChild(newElement)
            //quadro.append(newElement) 
            }
        }    
}
