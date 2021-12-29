/**************CARDS de NUESTROS PROFES**************/

let divProfes = document.getElementById("divProfes")

fetch ('../nuestrosProfes.json')
    .then(promesa => promesa.json())
    .then(datosProfes => {
        datosProfes.forEach(nuestrosProfes =>
            divProfes.innerHTML +=`
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
            `
            );
    })
    .catch(error => console.error(error))

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
    password,
    repeatPassword
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
    this.password = password;
    this.repeatPassword = repeatPassword;
  }

  devolverDatos() {
    return `${this.nombre} - ${this.apellido} - ${this.DNI} - ${this.email} - ${this.nombreDeUsuario} - ${this.sexo} - ${this.fechaDeNacimiento} - ${this.mobil} - ${this.ciudad} - ${this.provincia} - ${this.codigoPostal} - ${this.password} - ${this.repeatPassword}`;
  }
}

let jugadores = [];

let BtnForm = document.getElementById("ButtonFormSubmit");
if(BtnForm){
  const validacion = (e) => {
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

    if(nombre.value === ""){
      $('#faltaNombre').show();
      nombre.focus();
      return false;
    }else{
      $('#faltaNombre').hide();
      nombre.focus();
    }

    if(apellido.value === ""){
      $('#faltaApellido').show();
      apellido.focus();
      return false;
    }else{
      $('#faltaApellido').hide();
      apellido.focus();
    }

    if(numeroDeDocumento.value === ""){
      $('#faltaDocumento').show();
      numeroDeDocumento.focus();
      return false;
    }else{
      $('#faltaDocumento').hide();
      numeroDeDocumento.focus();
    }

    if(email.value === ""){
      $('#faltaEmail').show();
      email.focus();
      return false;
    }else{
      $('#faltaEmail').hide();
      email.focus();
    }
    if (!emailValido(email.value)) {
      $('#errorEmail').show();
      email.focus();
      return false; 
    }else{
      $('#errorEmail').hide();
      email.focus();
    }

    if(nombreDeUsuario.value === ""){
      $('#faltaNombreDeUsuario').show();
      nombreDeUsuario.focus();
      return false;
    }else{
      $('#faltaNombreDeUsuario').hide();
      nombreDeUsuario.focus();
    }
    if (!usuarioValido(nombreDeUsuario.value)){
      $("#errorNombreDeUsuario").show();
      nombreDeUsuario.focus();  
      return false;
    }else{
      $('#errorNombreDeUsuario').hide();
      nombreDeUsuario.focus();
    }

    if(sexo.value === ""){
      $('#faltaSexo').show();
      sexo.focus();
      return false;
    }else{
      $('#faltaSexo').hide();
      sexo.focus();
    }

    if(fechaDeNacimiento.value === ""){
      $('#faltaFechaDeNacimiento').show();
      fechaDeNacimiento.focus();
      return false;
    }else{
      $('#faltaFechaDeNacimiento').hide();
      fechaDeNacimiento.focus();
    }

    if(mobil.value === ""){
      $('#faltaMobil').show();
      mobil.focus();
      return false;
    }else{
      $('#faltaMobil').hide();
      mobil.focus();
    }

    if (!mobilValido(mobil.value)){
      $("#errorMobil").show();
      mobil.focus();  
    }else{
      $('#errorMobil').hide();
      mobil.focus();
    }

    if(ciudad.value === ""){
      $('#faltaCiudad').show();
      ciudad.focus();
      return false;
    }else{
      $('#faltaCiudad').hide();
      ciudad.focus();
    }

    if(provincia.value === ""){
      $('#faltaProvincia').show();
      provincia.focus();
      return false;
    }else{
      $('#faltaProvincia').hide();
      provincia.focus();
    }

    if(codigoPostal.value === ""){
      $('#faltaCodigoPostal').show();
      codigoPostal.focus();
      return false;
    }else{
      $('#faltaCodigoPostal').hide();
      codigoPostal.focus();
    }

    if(contraseña.value === ""){
      $('#faltaContraseña').show();
      contraseña.focus();
      return false;
    }else{
      $('#faltaContraseña').hide();
      contraseña.focus();
    }
    if (!contraseñaValido(contraseña.value)){
      $("#errorContraseña").show();
      contraseña.focus();  
    }else{
      $('#errorContraseña').hide();
      contraseña.focus();
    }

    if(repeatContraseña.value === ""){
      $('#faltaRepeatContraseña').show();
      repeatContraseña.focus();
      return false;
    }else{
      $('#faltaRepeatContraseña').hide();
      repeatContraseña.focus();
    }
    if (!repeatContraseñaValido(repeatContraseña.value)){
      $("#errorRepeatContraseña").show();
      repeatContraseña.focus();  
    }else{
      $('#errorRepeatContraseña').hide();
      repeatContraseña.focus();
    }
    
    if(invalidCheck.value === ""){
      $('#faltaAceptar').show();
      invalidCheck.focus();
      return false;
    }else{
      $('#faltaAceptar').hide();
      invalidCheck.focus();
    }
    return true;
  }

  const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  const usuarioValido = nombreDeUsuario => {
    return /^[a-z0-9_-] {5,10}$/.test(nombreDeUsuario);
    }
  const mobilValido = mobil => {
    return /^[0-9]{10}$/.test(mobil);
    }
  const contraseñaValido = contraseña => {
    return /^.*(?=.{8,}) (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/.test(contraseña);
    }
  const repeatContraseñaValido = repeatContraseña => {
    return /^.*(?=.{8,}) (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/.test(repeatContraseña);
    }
  
  BtnForm.addEventListener("click", validacion);
}

document.getElementById ("ButtonFormSubmit").addEventListener('click',() => {
  fetch ("")
  then (response => response.json())
  then(data=> {
    nuevoUsuario.innerHTML = Object.entries(data).filter(usuario => usuario[0] !="password","repeatPassword").map
    (usuario => usuario= `
      <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        <div class="card-header">${usuario.nombre}.toUpperCase() ${usuario.apellido}.toUpperCase()</div>
        <div class="card-body">
          <p class="card-text">Número de documento: ${usuario.documento}</p>
          <p class="card-text">Email: ${usuario.email}</p>
          <p class="card-text">Nombre de usuario: ${usuario.nombreDeUsuario}</p>
          <p class="card-text">Sexo: ${usuario.sexo}</p>
          <p class="card-text">Fecha de nacimiento: ${usuario.fechaDeNacimiento}</p>
          <p class="card-text">Móbil: ${usuario.mobil}</p>
          <p class="card-text">Ciudad:${usuario.ciudad}</p>
          <p class="card-text">Provincia: ${usuario.provincia}</p>
          <p class="card-text">Código Postal: ${usuario.codigoPostal}</p>
        </div>
      </div>
    `
    ).join(" ")
  })
})


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
    alert("A usted le quedan " + attempt + " intentos;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
      
        
         