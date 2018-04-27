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
//Uso de const
  calcularIva(){
    var precio = 80672
    const iva = 0.19
    return Math.round(precio*iva)    
  }
//Ejemplo de let
  calcularNumeros(){
  for (let index = 0; index < 10; index++) {
    console.log(index)   
  }
}

//Uso de Map
  calcularRetenciones(){
    let retenciones = [{"nombre":"ganado","valor":0.08,"precio":42000},
                       {"nombre":"trigo","valor":0.04,"precio":96000},
                       {"nombre":"arroz","valor":0.10,"precio":54000}]
                       
    retenciones.map((retencion)=> {
      console.log(retencion.precio * retencion.valor)
    })
  }

  calcular(){ 
   return super.calcular() * this.dolar
  }

  /*Destructuring*/
  ObtenerLibro(){    
  const libros = {
    title: 'ego',
    author: 'rhyan holiday',
    publisher: {
    name: 'Penguin'
    }
}
  const {name} = libros.publisher;
  return name; 
  }
}



export {Operaciones,Extras}