//Ejemplo de clase es6
class Operaciones {
   constructor(x, y) {
      this.x = x
      this.y = y
      this.dolar = 635
   }
   calcular() {  
      return this.x + this.y
   }
}
//Ejemplo de herencias
class Extras extends Operaciones{
  
  calcular(){
   return super.calcular() * this.dolar
  }
}

export default {Operaciones,Extras}