
import './App.css'

function App() {
  return elementos;


}
const elementos = (
  <>
    {
  /* <p>La  suma es: {suma(40,70)}</p>
  <p>El area de un cuadrado de 5x5 es: {areaC(5,5)}</p>
  <p>El area de un triangulo de Base 2 y altura 10 es: {areaT(2,10)} </p>
  <p>El area de un circulo de radio 5 es : {areaCirculo(5)}</p>
  <p>El area de un rectangulo de base 25 y altura 10 es: {areaCuadrado(25,10)}</p> */}
    <p>{menu()}</p>
  </>
)

function suma(a, b) {
  return a + b;
}


function areaR(a, b) {
  return a * b
}

function areaT(b, h) {
  return b * h / 2
}

function areaCirculo(r) {
  return 3.1416 * (r * r)
}
function areaCuadrado(b) {
  return b * b
}

function menu() {
  var elegir = parseInt(prompt("Calcular Areas\n1- Area Cuadrado\n2- Area Rectangulo\n3- Area Circulo\n4- Area Triangulo"));

  switch (elegir) {
    case 1:
      var a = parseInt(prompt("Ingresa un lado"));
      return areaCuadrado(a);
      break;

    case 2:
      var a = parseInt(prompt("Ingresa base"));
      var b = parseInt(prompt("Ingresa altura"));
      return areaR(a, b);
      break;
    case 3:
      var r = parseInt(prompt("Ingresa un radio "));

      return areaCirculo(r);
      break;

    case 4:
      var b = parseInt(prompt("Ingresa base"));
      var h = parseInt(prompt("Ingresa altura"));
      return areaT(b, h);
      break;
  }

}
export default App
