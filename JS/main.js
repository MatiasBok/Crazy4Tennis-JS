/**************CARDS de NUESTROS PROFES**************/

let divProfes = document.getElementById("divProfes");
if (divProfes) {
  fetch("../nuestrosProfes.json")
    .then((promesa) => promesa.json())
    .then((datosProfes) => {
      datosProfes.forEach(
        (nuestrosProfes) =>
          (divProfes.innerHTML += `
            <div class="col-lg-4 col-md-3 col-sm-12">
              <div class="card h-30" id="nuestrosProfes${nuestrosProfes.id}">
                  <img src="../assets/cv/${nuestrosProfes.img}" class="card-img-top">
                  <div class="card-body">
                      <h5 class="card-title">${nuestrosProfes.nombre}</h5>
                      <p class="card-text">${nuestrosProfes.experiencia}</p>
                      <div class="texto-card">
                        <h6>Disponibilidad</h6>
                        <p class="card-text">${nuestrosProfes.diasDisponibles}</p>
                        <p class="card-text">${nuestrosProfes.horariosDisponibles}</p>
                      </div>
                  </div>
              </div>
            </div> 
            `)
      );
    })
    .catch((error) => console.error(error));
}

/***************RESERVAS***************/

class Jugador {
  /*por convención las clases van siempre en mayúscula*/
  constructor(
    nombre,
    apellido,
    DNI,
    email,
    nombreDeUsuario,
    sexo,
    fechaDeNacimiento,
    mobil,
    ciudad,
    provincia,
    codigoPostal,
    contraseña,
    repeatContraseña
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.DNI = DNI;
    this.email = email;
    this.nombreDeUsuario = nombreDeUsuario;
    this.sexo = sexo;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.mobil = mobil;
    this.ciudad = ciudad;
    this.provincia = provincia;
    this.codigoPostal = codigoPostal;
    this.contraseña = contraseña;
    this.repeatContraseña = repeatContraseña;
  }

  devolverDatos() {
    return `${this.nombre} - ${this.apellido} - ${this.DNI} - ${this.email} - ${this.nombreDeUsuario} - ${this.sexo} - ${this.fechaDeNacimiento} - ${this.mobil} - ${this.ciudad} - ${this.provincia} - ${this.codigoPostal} - ${this.contraseña} - ${this.repeatContraseña}`;
  }
}

let jugadores = [];

let BtnForm = document.getElementById("ButtonFormSubmit");
if (BtnForm) {
 
  function validacion(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const numeroDeDocumento = document.getElementById("numeroDeDocumento");
    const email = document.getElementById("email");
    const nombreDeUsuario = document.getElementById("nombreDeUsuario");
    const sexo = document.getElementById("sexo");
    const fechaDeNacimiento = document.getElementById("fechaDeNacimiento");
    const mobil = document.getElementById("mobil");
    const ciudad = document.getElementById("ciudad");
    const provincia = document.getElementById("provincia");
    const codigoPostal = document.getElementById("codigoPostal");
    const contraseña = document.getElementById("contraseña");
    const repeatContraseña = document.getElementById("repeatContraseña");
    const invalidCheck = document.getElementById("invalidCheck");

    if (nombre.value === "") {
      $("#faltaNombre").show();
      nombre.focus();
      return false;
    } else {
      $("#faltaNombre").hide();
      nombre.focus();
    }

    if (apellido.value === "") {
      $("#faltaApellido").show();
      apellido.focus();
      return false;
    } else {
      $("#faltaApellido").hide();
      apellido.focus();
    }

    if (numeroDeDocumento.value === "") {
      $("#faltaDocumento").show();
      numeroDeDocumento.focus();
      return false;
    } else {
      $("#faltaDocumento").hide();
      numeroDeDocumento.focus();
    }

    if (email.value === "") {
      $("#faltaEmail").show();
      email.focus();
      return false;
    } else {
      $("#faltaEmail").hide();
      email.focus();
    }
    if (!emailValido(email.value)) {
      $("#errorEmail").show();
      email.focus();
      return false;
    } else {
      $("#errorEmail").hide();
      email.focus();
    }

    if (nombreDeUsuario.value === "") {
      $("#faltaNombreDeUsuario").show();
      nombreDeUsuario.focus();
      return false;
    } else {
      $("#faltaNombreDeUsuario").hide();
      nombreDeUsuario.focus();
    }

    if (sexo.value === "") {
      $("#faltaSexo").show();
      sexo.focus();
      return false;
    } else {
      $("#faltaSexo").hide();
      sexo.focus();
    }

    if (fechaDeNacimiento.value === "") {
      $("#faltaFechaDeNacimiento").show();
      fechaDeNacimiento.focus();
      return false;
    } else {
      $("#faltaFechaDeNacimiento").hide();
      fechaDeNacimiento.focus();
    }

    if (mobil.value === "") {
      $("#faltaMobil").show();
      mobil.focus();
      return false;
    } else {
      $("#faltaMobil").hide();
      mobil.focus();
    }

    if (!mobilValido(mobil.value)) {
      $("#errorMobil").show();
      mobil.focus();
    } else {
      $("#errorMobil").hide();
      mobil.focus();
    }

    if (ciudad.value === "") {
      $("#faltaCiudad").show();
      ciudad.focus();
      return false;
    } else {
      $("#faltaCiudad").hide();
      ciudad.focus();
    }

    if (provincia.value === "") {
      $("#faltaProvincia").show();
      provincia.focus();
      return false;
    } else {
      $("#faltaProvincia").hide();
      provincia.focus();
    }

    if (codigoPostal.value === "") {
      $("#faltaCodigoPostal").show();
      codigoPostal.focus();
      return false;
    } else {
      $("#faltaCodigoPostal").hide();
      codigoPostal.focus();
    }

    if (contraseña.value === "") {
      $("#faltaContraseña").show();
      contraseña.focus();
      return false;
    } else {
      $("#faltaContraseña").hide();
      contraseña.focus();
    }  

    if (repeatContraseña.value === "") {
      $("#faltaRepeatContraseña").show();
      repeatContraseña.focus();
      return false;
    } else {
      $("#faltaRepeatContraseña").hide();
      repeatContraseña.focus();
    }

    if (invalidCheck.checked === false) {
      $("#faltaAceptar").show();
      invalidCheck.focus();
      return false;
    } else {
      $("#faltaAceptar").hide();
      invalidCheck.focus();
    }
    return true && verificarContraseñas();;

  };

  BtnForm.addEventListener("click", (e) => {
    e.preventDefault();
    const FormDatos = document.getElementById("crearUsuario");
    const ContenedorUsers = document.getElementById("nuevoUsuario");
    if(validacion(e)){
      ContenedorUsers.innerHTML = "";
      ContenedorUsers.innerHTML = `

      <div class="container">
      <div class="row">
        <div class="col-lg-7 cardFormulario">
          <div class="card cardFormRes">
            <div class="card-header">
              <h4 class= "cardtit">Datos del usuario</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-7">
                  <div class="form-group">
                    <label class="titSecc" for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" value="${nombre.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="apellido">Apellido</label>
                    <input type="text" class="form-control" id="apellido" value="${apellido.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="numeroDeDocumento">Número de documento</label>
                    <input type="text" class="form-control" id="numeroDeDocumento" value="${numeroDeDocumento.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="email">Email</label>
                    <input type="text" class="form-control" id="email" value="${email.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="nombreDeUsuario">Nombre de usuario</label>
                    <input type="text" class="form-control" id="nombreDeUsuario" value="${nombreDeUsuario.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="sexo">Sexo</label>
                    <input type="text" class="form-control" id="sexo" value="${sexo.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="fechaDeNacimiento">Fecha de Nacimiento</label>
                    <input type="text" class="form-control" id="fechaDeNacimiento" value="${fechaDeNacimiento.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="mobil">Móbil</label>
                    <input type="text" class="form-control" id="mobil" value="${mobil.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="ciudad">Ciudad</label>
                    <input type="text" class="form-control" id="ciudad" value="${ciudad.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="provincia">Provincia</label>
                    <input type="text" class="form-control" id="provincia" value="${provincia.value}" disabled>
                  </div>
                  <div class="form-group">
                    <label class="titSecc" for="codigoPostal">Código Postal</label>
                    <input type="text" class="form-control" id="codigoPostal" value="${codigoPostal.value}" disabled>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>

      `
  
      FormDatos.reset();
    }else{
      e.preventDefault();
      
    }
  });

}

const emailValido = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const mobilValido = (mobil) => {
  return /^[0-9]{10}$/.test(mobil);
};
const contraseñaValido = (contraseña) => {
  return /^.*(?=.{8,}) (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/.test(contraseña);
};
const repeatContraseñaValido = (repeatContraseña) => {
  return /^.*(?=.{8,}) (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/.test(repeatContraseña);
};


function verificarContraseñas() {
  contraseña = document.getElementById("contraseña");
  repeatContraseña = document.getElementById("repeatContraseña");

  // Verificamos si las constraseñas no coinciden
  if (contraseña.value != repeatContraseña.value) {
    // Si las contraseñas no coinciden mostramos un mensaje
    document.getElementById("error").style.display="block";
    return false;

  } else {
    // Si las contraseñas coinciden ocultamos el mensaje de error
    document.getElementById("error").style.display="none";

    // Mostramos un mensaje mencionando que las Contraseñas coinciden
    document.getElementById("ok").style.display="block";

    return true;
  }
}

/**********VALIDACIÓN DE FORMULARIO DE INGRESO**********/

var attempt = 3; // Variable to count number of attempts.

function validate() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "JohnDoe" && password == "ABC12345!") {
    alert("Ingreso éxitoso");

    window.location = "ingresar.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("Contraseña incorrecta. A usted le quedan " + attempt + " intentos;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
