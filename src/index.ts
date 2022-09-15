import "./styles.css";

let btnEnv = document.getElementById("btnEnviar");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let numero3 = document.getElementById("numero3");


btnEnv.addEventListener("click", () => {
  let dato1: number = numero1.value;
  let dato2: number = numero2.value;
  let dato3: number = numero3.value;
  if (dato1 > dato2 && dato2 > dato3) {
    console.log("El primer numero el " + dato1 + " es el mayor");
  } else if (dato2 > dato1 && dato2 > dato3) {
    console.log("El segundo numero el " + dato2 + " es el mayor");
  } else {if (dato3 > dato1 && dato3 > dato2) {
    console.log("El tercer numero el " + dato3 + " es el mayor");
  }
});
