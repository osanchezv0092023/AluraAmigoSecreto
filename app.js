// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let NombreAmigo;
let Lista = document.getElementById("listaAmigos");
let ListaFinal = document.getElementById("resultado");

/************************************************************************************/
function agregarAmigo()
{                                                                                //300
//    console.log(NombreAmigo);
    NombreAmigo = document.getElementById("amigo").value;
//    console.log(NombreAmigo);
    if (NombreAmigo.trim() == "")
    {                                                                            //400
        alert("Por favor, inserte un nombre");
    }                                                                            //400
    else
    {                                                                            //400
//      alert("no vacios");
//      console.log(NombreAmigo);
//      console.log (amigos);
        if (amigos.includes(NombreAmigo))
        {                                                                        //500
            alert("El nombre ya existe, intente de nuevo");
            LimpiaCaja();
            return agregarAmigo;
        }                                                                        //500
        else
        {                                                                        //500
            amigos.push(NombreAmigo);
//            console.log (amigos);
//            let lista = document.getElementById("listaAmigos");
            Lista.innerHTML = "";
            
            amigos.forEach
            (                                                                    //600
                function(amigo)
                {                                                                //700
                    let li = document.createElement("li");
                    li.textContent = amigo;
                    Lista.appendChild(li);
                }                                                                //700
            );                                                                   //600
        LimpiaCaja();
        }                                                                        //500
    }                                                                            //400
}                                                                                //300

/************************************************************************************/
function sortearAmigo()
{                                                                                //800
    if (amigos.length === 0)
    {                                                                            //900
        alert("No existen datos para sortear");
    }                                                                            //900
    else 
    {                                                                            //900
//        alert("vamos a chambear");
//        document.getElementById("listaAmigos").value = '';
        Lista.innerHTML = "";        
        let Indice = Math.floor(Math.random() * amigos.length);
//        console.log(Indice);
        let Ganador = amigos[Indice];
//        console.log(Ganador);
        ListaFinal.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = "El amigo secreto sorteado es: " + Ganador;
        ListaFinal.appendChild(li);
    }                                                                            //900
}                                                                                //800

/************************************************************************************/
function LimpiaCaja()
{                                                                                //100
    document.getElementById("amigo").value = '';
    NombreAmigo= '';
//    document.getElementById("listaAmigos").value = '';
}                                                                                //100

/************************************************************************************/
function GeneraNumeroAleatorio()
{                                                                                //200
    return Math.floor(Math.random()*10)+1;
}                                                                                //200