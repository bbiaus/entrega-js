let i = 0;
let t = 0;

let history = document.getElementById("history");

login();
function login() {
  do {
    let usuario = prompt("Ingrese su nombre de usuario");
    switch (usuario) {
      case "admin":
        t += 1;
        i += 3;
        break;

      default:
        history.innerText = "Usuario incorrecto, intente nuevamente";
        i++;
        break;
    }
  } while (i < 3);

  //en default la idea seria que te de 3 intentos pero no se como hacer un do-while dentro del if
  if (t === 1) {
    let contraseña = prompt("Ingrese su contraseña");
    switch (contraseña) {
      case "admin":
        history.innerText = "Acceso permitido";
        alert("Bienvenido a La Cueva");
        t += 1;
        break;

      default:
        alert("Contraseña incorrecta, acceso bloqueado temporalmente");
        break;
    }
  } else {
    alert("Usuario incorrecto, acceso bloqueado temporalmente");
  }
}

//en este caso la idea era ponerle una imagen en la pagina dependiendo el resultado, pero busque en internet y vi que no era tan facil asique por ahora dejo los alert nomas

if (t != 2) {
  login();
}

let life = 100;
let cat = 0;
let remo = false;
let userName;
let pathOneTaken = false;
let pathTwoTaken = false;
let optLeftTaken = false;
let optRightTaken = false;
const scoreBoard = [];

startGame();

function startGame() {
  userName = prompt("Nombre de tu personaje");
  history.innerText =
    "Lee la historia aqui, y elegi las opciones que creas conveniente, escribiendolas tal cual estan escritas en las opciones.";
  startPoint();
}

function startPoint() {
  history.innerText =
    "SI VOLVES DE UNA ZONA FUTURA IGNORA EL SIGUIENTE MENSAJE \n Te levantas en una cueva oscura, con dolor de cabeza, no recordas nada más que tu nombre " +
    userName +
    ". Tu vista se acostumbra a la oscuridad y ves 3 pasillos, elegí uno. (" +
    life +
    " HP)";
  choose();
}

function choose() {
  let opcion = prompt("izquierda, centro, derecha");
  switch (opcion) {
    case "izquierda":
      if (pathOneTaken == false) {
        life -= 15;
        history.innerText =
          "Caminando descalz@ te das cuenta de las ratas amontonadas al lado tuyo, mientras algunas mastican tus pies adormecidos por el frio. Finalmente te liberas de ellas y llegas a un nuevo lugar. (" +
          life +
          " HP)";

        opt1();
      } else {
        alert("Ya tomaste este camino, elegi otro.");
        choose();
      }
      break;

    case "centro":
      if (pathTwoTaken == false) {
        life -= 10;
        history.innerText =
          "Avanzas por el pasillo oscuro mientras este se hace cada vez mas chico, las piedras de las paredes raspan y algunas inclusive cortan tu piel. (" +
          life +
          " HP)";
        opt2();
      } else {
        alert("Ya tomaste este camino, elegi otro.");
        choose();
      }
      break;

    case "derecha":
      history.innerText =
        "Mientras avanzas, escuchas cada vez más fuerte un sonido, como una brisa de aire, una salida? (" +
        life +
        " HP)";
      opt3();
      break;

    default:
      alert("Opción invalida");
      choose();
  }
}

//camino de la izquierda
function opt1() {
  history.innerText =
    "Te apoyas en la pared a respirar e intentar olvidar la imagen de las ratas comiendote vivo, cuando te das cuenta que estas cansado, si bien llevas despiert@ no más de 20 minutos. En la misma sala un nuevo pasillo parece ir más allá. ¿Qué haces?";
  let opcion = prompt("continuar, descansar");
  switch (opcion) {
    case "continuar":
      history.innerText =
        "Te sentis mas depejad@ que antes, el dolor causado por las ratas aún perdura pero por suerte no empeora. (" +
        life +
        " HP)";
      cont();
      break;

    case "descansar":
      life = 0;
      history.innerText =
        "Te sentas en las frias piedras, apoyad@ en la pared. Mientras cerras los ojos el dolor y frio desaparecen. Te despertas 40 minutos despues, sin poder moverte, cuando te das cuenta de las pequeñas grietas al otro lado emanando un gas, las ratas te alcanzaron y esta vez van a terminar lo que empezaron. (" +
        life +
        " HP)";
      youDied();
      break;

    default:
      alert("Opción invalida");
      opt1();
  }
}

function cont() {
  history.innerText =
    "Tu estomago suena mientras llegas a un nuevo espacio abierto. Parece ser que las únicas dos opciones son subir por uno de los caminos, o bajar por el otro.";
  let opcion = prompt("subir, bajar");
  switch (opcion) {
    case "subir":
      life -= 15;
      history.innerText =
        "Mientras subís, podes sentir una brisa de aire, así como tambien la humedad en las piedras, en la desesperación de salir apresurad@ pisas mal y resbalas en el musgo, golpeandote la rodilla contra las piedras, auch. Te levantas y seguis adelante, todo para descubrir que la esperada salida esta sellada, solo un pequeño orificio permite la entrada de aire y las precipitaciones. Estás obligad@ a volver y tomar el camino hacia abajo. (" +
        life +
        " HP)";
      downOne();
      break;

    case "bajar":
      downOne();
      break;

    default:
      alert("Opción invalida");
      cont();
  }
}

function downOne() {
  history.innerText =
    "Escuchas un ruido pErtuRbaDor mientras descendes, rocas chocando entre si, hay alguien más? Terminas de bajar, y pisas suelo firme, mientras levantas la mirada para darte cuenta que en frente tuyo hay una oscuridad absoluta, a la cual tu vista no se acosumbra. El ruido proviene del fondo de esta oscuridad, y al mismo tiempo que gritas '¿Quién esta ahí?', los sonidos cesan, y las piedras ya no chocan. Tus opciones son acercarte a la oscuridad, o correr al inicio ya que no hay una salida clara.";
  let opcion = prompt("correr, acercarme");
  switch (opcion) {
    case "correr":
      life -= 15;
      history.innerText =
        "Subis lo más rapido posible para volver al inicio, tropezandote muliples veces, escapando del temible y oscuro silencio que dejas atras. Solo al llegar al inicio te das cuenta de la cantidad de golpes que te diste, pero al menos estas viv@. (" +
        life +
        " HP)";
      startPoint();
      break;

    case "acercarme":
      cat += 1;
      history.innerText =
        "Te acercas con cuidado mientras sentis los latidos de tu corazon acelerandose, no importa cuanto fuerces la vista, la oscuridad no te deja ver nada. Sentis algo moviendose entre tus pies, tu instinto lo asimila con las ratas nuevamente y das una patada para alejarlo. Algo choca contra el pasillo desde donde viniste, parece una rata... pero ahora maulla, amigo felino? \n Corres a verlo y es un gatito del tamaño de tu mano. Parece asustado pero lo levantas, y tras mirarlo fijamente lo acomodas en el bolsillo de tu sweater, donde asoma la cabeza curioso. Revisas más tranquil@ el final de la sala pero parece no tener ninguna salida, por lo que volves al inicio para probar las otras opciones. (" +
        life +
        " HP)";
      pathOneTaken = true;
      startPoint();
      break;

    default:
      alert("Opción invalida");
      downOne();
  }
}

//camino del centro
function opt2() {
  history.innerText =
    "Con un ultimo esfuerzo logras pasar por lo mas estrecho del camino y tropezas al salir del mismo, casi cayendo al vacio del pozo al frente tuyo. Observas una soga atada a una roca que baja por el mismo. Probas tu suerte bajando o volves hacia atras?";
  let opcion = prompt("bajar, volver");
  switch (opcion) {
    case "bajar":
      history.innerText =
        "Logras descender san@ y salv@. Y observas dos caminos en frente tuyo. (" +
        life +
        " HP)";
      downTwo();
      break;

    case "volver":
      history.innerText =
        "Decidis no arriesgarte a la resistencia de la cuestionable soga y volves al incio para probar otro camino. Esta vez logras no rasparte tanto contra las paredes.";
      pathTwoTaken = true;
      startPoint();
      break;

    default:
      alert("Opción invalida");
      opt2();
  }
}

function downTwo() {
  history.innerText =
    "En el silencio de la cueva escuchas levemente un sonido intermitente, pero no logras distinguir por cual de los dos caminos proviene. Haces ta te ti y elegis la...";
  let opcion = prompt("izquierda, derecha");
  function izq() {
    history.innerText =
      "El sonido deja de escucharse, sin embargo observas algo al final del pasillo, parece un cuerpo muerto. Algo se mueve entre su ropa desgastada, te acercas a ver o volves al otro camino?";
    let opc = prompt("acercarme, volver");
    if (opc == "acercarme") {
      history.innerText =
        "Te acercas cuidadosamente al cuerpo, pero tropezas con una tanza y se escucha un fuerte estruendo de donde viniste, por suerte nada malo te sucede. Procedes al cuerpo y mientras desabrochas la camisa del desconocido, una pequeña garra se asoma y rasjuña tu mano. Te alejas para procesar lo que acaba de pasar, y volves nuevamente para ver un pequeño gatito escondido, al cual agarras con cuidado y ahora llevas en el bolsillo de tu sweater. Procedes a volver por donde viniste, ahora el pasillo derecho esta sellado, debe haber sido la explosion de antes. Estas obligado a trepar por la soga y volver al inicio.";
      cat += 1;
      pathTwoTaken = true;
      startPoint();
    } else if (opc == "volver") {
      history.innerText = "Decidis volver y elegir tu camino nuevamente";
      downTwo();
    } else {
      alert("Opción invalida");
      izq();
    }
  }
  switch (opcion) {
    case "izquierda":
      izq();
      break;

    case "derecha":
      history.innerText =
        "El sonido se escucha mas claramente, parecen olas chocando contra la costa. Corres a ver si hay una salida, pero lo unico que encontras son restos de una balsa y un remo tirado, el cual recojes y llevas con vos, puede llegar a ser util. Acto seguido volves por donde viniste ya que no habia otra salida.";
      remo = true;
      history.innerText =
        "Podes probar el camino de la izquierda o volver donde empezaste";
      let opcTwo = prompt("izquierda, volver");
      if (opcTwo == "izquierda") {
        izq();
      } else {
        history.innerText =
          "Decidiste volver al inicio, por lo que trepas la soga y elegis un nuevo camino";
        startPoint();
      }
      break;

    default:
      alert("Opción invalida");
      downTwo();
  }
}

//camino de la derecha
function opt3() {
  history.innerText =
    "Una vez que el pasillo termina, llegas a un nuevo lugar, donde ya no se escucha el sonido... que curioso. En frente tuyo parece haber tres nuevos caminos, y decidis continuar por la/el...";
  let opcion = prompt("izquierda, centro, derecha");
  switch (opcion) {
    case "izquierda":
      if (optLeftTaken == false) {
        history.innerText =
          "Al avanzar escuchas un grito al final del pasillo, por lo que te quedas inmovil por unos segundos, luego de escuchar el eco de un golpe seguido de un silencio abrumador decidis...";
        let opc = prompt("continuar, volver");
        switch (opc) {
          case "continuar":
            history.innerText =
              "Avanzas aterrorizad@ por lo que puedas encontrar, cuanto mas te acercas, mas claro se escucha la voz de una mujer esforzandose por hablar, rogando por ayuda. Finalmente llegas al final del pasillo y el espacio se abre, a tus pies una antorcha prendida, la levantas y todo se vuelve mas claro, una mujer ensagrentada agoniza contra la pared al fondo de la cueva. Una vez que tu mente asimila lo que esta viendo, es momento de decidir si ayudarla o escapar.";
            let opcTwo = prompt("ayudar, escapar");
            switch (opcTwo) {
              case "ayudar":
                life = 0;
                history.innerText =
                  "Decidis acercarte y ayudar, dejas la antorcha en el suelo e intentas levantar a la mujer, cuando de la nada intenta apuñalarte, esta traumada, no sabe quien es quien. Por suerte reaccionaste a tiempo y no tenes mas que un rasjuño, le pedis que se calme, solo queres ayudarla y salir con vida. \n Logras levantarla y mientras caminas hacia la salida algo la arranca de tus brazos, confundido corres por tu vida, pero ya es demasiado tarde, sea lo que sea que esta ahi te alcanza, te arrastra de las piernas y en la caida te golpeas la cabeza contra las rocas quedando inconciente... (" +
                  life +
                  " HP)";
                youDied();
                break;

              case "escapar":
                history.innerText =
                  "Corres por tu vida, asustado de lo que sea que pueda estar ahi junto a esa mujer, se escucha de fondo nuevamente un grito, mucho mas fuerte que el anterior pero que sucumbe en un silencio casi al instante. La culpa te carcome, tal vez podrias haberla ayudado.. ya no importa, es demasiado tarde, es hora de decidir que otro camino tomar.";
                optLeftTaken = true;
                opt3();
                break;

              default:
                alert("Opción invalida");
                break;
            }
            break;

          case "volver":
            history.innerText =
              "Decidis volver haciendole caso a tu instinto, no viste tantas peliculas de terror al pedo.";
            optLeftTaken = true;
            opt3();
            break;

          default:
            alert("Opción invalida");
        }
      } else {
        alert("Ya tomaste este camino, elegi otro.");
        opt3();
      }
      break;

    case "centro":
      history.innerText =
        "Seguis por el centro, el sonido de la brisa de aire parece volver a escucharse, olas chocando, y distintas voces discutiendo de fondo. Llegas al final para observar la costa, una balsa, y solo un hombre, arrodillado, arrepentido. Nota tu presencia y te advierte que la balsa es suya, no va a compartirla a no ser que tengas algo para ofrecer.";
      center();
      function center() {
        let opc = prompt(
          "ofrecer gato, ofrecer remo, atacar, volver al inicio"
        );
        switch (opc) {
          case "ofrecer gato":
            if (cat > 0) {
              cat -= 1;
              history.innerText =
                "Le entregas un pequeño gato al hombre, lo que resulta ser un error ya que no solo lo asesina y lo come, sino que no es suficiente para satisfacerlo, por lo que aún no te admite en su balsa";
              center();
            } else {
              alert("No tenes ningun gato");
              center();
            }
            break;

          case "ofrecer remo":
            if (remo == true) {
              history.innerText =
                "El hombre acepta que lo acompañes, principalmente para salir mas facilmente de la costa, el viaje va a ser mas sencillo para los dos con un remo cada uno";
              youWin();
            } else {
              alert("No tenes un remo");
              center();
            }
            break;

          case "atacar":
            history.innerText =
              "Sean cual sean tus motivos, estas dispuesto a matar a este hombre con tal de escapar. Sin ser obvio te acercaste mientras hablaban, lo suficiente para atacarlo sin que tuviera tiempo de pensar, acertas un golpe tras otro, lo empujas contra la costa, agarras una roca y cuando estas a punto de dar el golpe final, recibis una puñalada directa en el estomago, y otra puñalada en la axila... El hombre te quita de encima suyo, se aleja y mientras intentas sentarte en la costa con tu ultimo respiro, lo observas empujando la balsa, alejandose entre las olas.";
            youDied();
            break;

          case "volver al inicio":
            history.innerText =
              "Decidis volver al inicio y seguir explorando la cueva";
            startPoint();
            break;
        }
      }
      break;

    case "derecha":
      if (optRightTaken == false) {
        history.innerText =
          "Elegis continuar por la derecha, caminas un largo trecho por las angostas paredes hasta que llegas a una sala con 3 jarrones, posados uno al lado del otro, y una maza frente de ellos. Una voz en la sombras te obliga a que tomes la maza, rompas dos jarrones y abras el ultimo.";
        choice();
        function choice() {
          let opcion = prompt("escapar, tomar la maza");
          switch (opcion) {
            case "escapar":
              life = 0;
              history.innerText =
                "Te das la vuelta y corres lo mas rapido posible, cuando de repente algo perfora tu cuello, en tus ultimos momentos no podes ni siquiera ver que es, solo usar tus manos para parar el sangrado, lo que no es suficiente. Finalmente te ahogas en tu propia sangre mientras la sombra se acerca con la maza en mano. (" +
                life +
                " HP)";
              youDied();
              break;

            case "tomar la maza":
              history.innerText =
                "Recoges la maza, y estas listo para elegir que jarrones romper, y cual abrir, mientras sentis como la sombra te observa.";
              let destroy = prompt(
                "Abris el jarron: izquierdo, central, derecho"
              );
              switch (destroy) {
                case "izquierdo":
                  cat += 1;
                  history.innerText =
                    "Destruis tanto el jarron central como el derecho, y te percatas que hay sangre tanto en las piedras como en la maza. Procedes cuidadosamente a abrir el jarron izquierdo, y un alivio recorre tu cuerpo cuando es solo un pobre gatito, el cual guardas en el bolsillo de tu sweater. Revisas los otros jarrones, en los cuales habia una rata y una serpiente respectivamente. La sombra luce satisfecha y te deja ir. \n Retrocedes nuevamente hacia donde te encontrabas antes";
                  opt3();
                  break;

                case "central":
                  life -= 10;
                  history.innerText =
                    "Destruis tanto el jarron izquierdo como el derecho, y te percatas que hay sangre tanto en las piedras como en la maza. Procedes cuidadosamente a abrir el jarron central, cuando de repente una rata salta del mismo y te muerde la mano, para luego seguir su camino. La sombra se rie y te deja ir. Revisas los otros jarrones, en los cuales habia un gatito y una serpiente respectivamente. (" +
                    life +
                    " HP) \n Retrocedes nuevamente hacia donde te encontrabas antes";
                  opt3();
                  break;

                case "derecho":
                  life = 0;
                  history.innerText =
                    "Destruis tanto el jarron izquierdo como el central, y te percatas que hay sangre tanto en las piedras como en la maza. Procedes cuidadosamente a abrir el jarron derecho, cuando de repente una serpiente sale del mismo y te muerde la mano, para luego seguir su camino. La sombra se rie y te dice que no hay nada que puedas hacer, el veneno es demasiado fuerte. (" +
                    life +
                    " HP)";
                  youDied();
                  break;
              }

            default:
              alert("Opción invalida");
              choice();
              break;
          }
        }
      } else {
        alert("Ya tomaste este camino, elegi otro.");
        opt3();
      }
      break;

    default:
      alert("Opción invalida");
      opt3();
  }
}

//reiniciar el juego
function youDied() {
  alert("YOU DIED");
  reboot();
}

function reboot() {
  let opcion = confirm("Comenzar nuevamente?");
  switch (opcion) {
    case true:
      cat = 0;
      life = 100;
      remo = false;
      pathOneTaken = false;
      pathTwoTaken = false;
      optLeftTaken = false;
      optRightTaken = false;
      startGame();
      break;

    case false:
      alert("Tu aventura termina");
      break;
  }
}

function youWin() {
  alert("YOU LEFT THE CAVE ALIVE");
  const scoreValue = cat * 30 + life;
  let score = "Score: " + scoreValue;
  alert(score);
  scoreBoard.push({ Nombre: userName, Score: scoreValue, Gatitos: cat });
  scoreBoard.sort((a, b) => (a.score < b.score ? 1 : -1));
  console.table(scoreBoard);
  reboot();
}
