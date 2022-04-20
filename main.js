/*let i = 0;
let t = 0;

do {
  let usuario = prompt("Ingrese su nombre de usuario");
  switch (usuario) {
    case "Admin1":
      t++;
      i += 3;
      break;

    case "Admin0":
      t++;
      i += 3;
      break;

    default:
      console.log("Usuario incorrecto, intente nuevamente");
      i++;
      break;
  }
} while (i < 3);

//en default la idea seria que te de 3 intentos pero no se como hacer un do-while dentro del if
if (t == 1) {
  let contraseña = prompt("Ingrese su contraseña");
  switch (contraseña) {
    case "1234":
      console.log("Acceso permitido");
      alert("Bienvenido a la interfaz de administrador");
      t++;
      break;

    default:
      alert("Contraseña incorrecta, acceso bloqueado temporalmente");
  }
} else {
  alert("Usuario incorrecto, acceso bloqueado temporalmente");
}
//en este caso la idea era ponerle una imagen en la pagina dependiendo el resultado, pero busque en internet y vi que no era tan facil asique por ahora dejo los alert nomas
//esta no seria la idea de mi proyecto real, tenia pensado hacer algun juego tipo elegi tu propia aventura pero bueno, de ultima arranca de esta manera
*/

let t = 2;

if (t == 2) {
  let life = 100;
  let cat = 0;
  
  /*fix()
  function fix(){
    let fixed = prompt("Solucion temporal al bug. Primero abri la consola de desarrollador, y despues escribí 'restart' para que se rompa el codigo y se arregle el bug (apreta F5), despues escribi 'continuar'");
    switch (fixed){
        case "restart":
            errorIntencionado()
            break;
        
        case "continuar":
            break;    
    }
  }*/

  const name = prompt("Nombre de tu personaje");
  alert(
    "Lee la historia en la consola de desarrollador, y elegi las opciones que creas conveniente, escribiendolas tal cual estan escritas en las opciones."
  );

  startPoint();

  function startPoint() {
    console.log("SI VOLVES DE UNA ZONA FUTURA IGNORA EL SIGUIENTE MENSAJE");
    console.log(
      "Te levantas en una cueva oscura, con dolor de cabeza, no recordas nada más que tu nombre, " +
        name +
        ". Tu vista se acostumbra a la oscuridad y ves 3 pasillos, elegí uno. (" +
        life +
        " HP)"
    );
    choose();
  }

  function choose() {
    let opcion = prompt("izquierda, centro, derecha");
    switch (opcion) {
      case "izquierda":
        life -= 10;
        console.log(
          "Caminando descalz@ te das cuenta de las ratas amontonadas al lado tuyo, mientras algunas mastican tus pies adormecidos por el frio. Finalmente te liberas de las ratas y llegas a un nuevo lugar. (" +
            life +
            " HP)"
        );
        opt1();
        break;

      case "centro":
        life -= 5;
        console.log(
          "Avanzas por el pasillo oscuro mientras este se hace cada vez mas chico, las piedras de las paredes raspan y algunas inclusive cortan tu piel, pero logras llegar al otro lado. (" +
            life +
            " HP)"
        );
        opt2();
        break;

      case "derecha":
        console.log(
          "Mientras avanzas, escuchas cada vez más fuerte un sonido, como una brisa de aire, una salida? (" +
            life +
            " HP)"
        );
        opt3();
        break;

      default:
        alert("Opción invalida");
        choose();
    }
    console.clear();
  }

  function opt1() {
    console.log(
      "Te apoyas en la pared a respirar e intentar olvidar la imagen de las ratas comiendote vivo, cuando te das cuenta que estas cansado, si bien llevas despiert@ no más de 20 minutos. En la misma sala un nuevo pasillo parece ir más allá. ¿Qué haces?"
    );
    let opcion = prompt("continuar, descansar");
    switch (opcion) {
      case "continuar":
        console.log(
          "Te sentis mas depejad@ que antes, el dolor causado por las ratas aún perdura pero por suerte no empeora. (" +
            life +
            " HP)"
        );
        cont();
        break;

      case "descansar":
        life -= 90;
        console.log(
          "Te sentas en las frias piedras, apoyad@ en la pared. Mientras cerras los ojos el dolor y frio desaparecen. Te despertas 40 minutos despues, sin poder moverte, cuando te das cuenta de las pequeñas grietas al otro lado emanando un gas, las ratas te alcanzaron y esta vez van a terminar lo que empezaron. (" +
            life +
            " HP)"
        );
        desc();
        break;

      default:
        alert("Opción invalida");
        console.clear();
        opt1();
    }
    console.clear();
  }

  function desc() {
    alert("YOU DIED, BUT PAINLESS.");
    reboot();
  }

  function cont() {
    console.log(
      "Tu estomago suena mientras llegas a un nuevo espacio abierto. Parece ser que las únicas dos opciones son subir por uno de los caminos, o bajar por el otro."
    );
    let opcion = prompt("subir, bajar");
    switch (opcion) {
      case "subir":
        life -= 15;
        console.log(
          "Mientras subís, podes sentir una brisa de aire, así como tambien la humedad en las piedras, en la desesperación de salir apresurad@ pisas mal y resbalas en el musgo, golpeandote la rodilla contra las piedras, auch. Te levantas y seguis adelante, todo para descubrir que la esperada salida esta sellada, solo un pequeño orificio permite la entrada de aire y las precipitaciones. Estás obligad@ a volver y tomar el camino hacia abajo. (" +
            life +
            " HP)"
        );
        down();
        break;

      case "bajar":
        down();
        break;

      default:
        alert("Opción invalida");
        console.clear();
        cont();
    }
    console.clear();
  }

  function down() {
    console.log(
      "Escuchas un ruido pErtuRbaDor mientras descendes, rocas chocando entre si, hay alguien más? Terminas de bajar, y pisas suelo firme, mientras levantas la mirada para darte cuenta que en frente tuyo hay una oscuridad absoluta, a la cual tu vista no se acosumbra. El ruido proviene del fondo de esta oscuridad, y al mismo tiempo que gritas '¿Quién esta ahí?', los sonidos cesan, y las piedras ya no chocan. Tus opciones son acercarte a la oscuridad, o correr al inicio ya que no hay una salida clara."
    );
    let opcion = prompt("correr, acercarme");
    switch (opcion) {
      case "correr":
        life -= 15;
        console.log(
          "Subis lo más rapido posible para volver al inicio, tropezandote muliples veces, escapando del temible y oscuro silencio que dejas atras. Solo al llegar al inicio te das cuenta de la cantidad de golpes que te diste, pero al menos estas viv@. (" +
            life +
            " HP)"
        );
        startPoint();

      case "acercarme":
        cat += 1;
        console.log(
          "Te acercas con cuidado mientras sentis los latidos de tu corazon acelerandose, no importa cuanto fuerces la vista, la oscuridad no te deja ver nada. Sentis algo moviendose entre tus pies, tu instinto lo asimila con las ratas nuevamente y das una patada para alejarlo. Algo choca contra el pasillo desde donde viniste, parece una rata... pero ahora maulla, amigo felino?"
        );
        console.log(
          "Corres a verlo y es un gatito del tamaño de tu mano. Parece asustado pero lo levantas, y tras mirarlo fijamente lo acomodas en el bolsillo de tu sweater, donde asoma la cabeza curioso. Revisas más tranquil@ el final de la sala pero parece no tener ninguna salida, por lo que volves al inicio para probar las otras opciones. (" +
            life +
            " HP)"
        );
        startPoint();
    }
    console.clear();
  }

  //function opt2() {}

  function reboot() {
    let opcion = confirm("Comenzar nuevamente?");
    switch (opcion) {
      case true:
        console.clear();
        cat *= 0;
        life += 100;
        startPoint();
        break;

      case false:
        alert("Tu aventura termina");
        console.clear();
        break;
    }
  }
}
