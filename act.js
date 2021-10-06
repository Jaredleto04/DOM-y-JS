class Producto{
    constructor(codigo, nombre, precio, cantidad){
      this.codigo=codigo;
      this.nombre=nombre;
      this.precio=precio;
      this.cantidad=cantidad;
    }
    info(){
      return this.codigo + "- " + this.nombre + 
        " $" + this.precio;
    }
    infoHtml(){
      return `   
        <div class ='productoCard' id='cod${this.codigo}'>
          <h3>${this.codigo} - ${this.nombre}</h3>
          <p>(${this.cantidad}) $ ${this.precio}</p>
        </div>
      `;
    }
  }
  
  class Inventario{
    constructor(){
      this.datos=new Map();
    }
    agregar(nuevo){
      this.datos.set(nuevo.codigo,nuevo)
      console.log(nuevo)
    }
    llenarMenu(){
      return `
        <option value='1'>producto 1</option>
        <option value='2'>Libreta 1</option>
        <option value='3'>Pluma bic</option>
        <option value='4'>Lapiz</option>
        <option value='5'>Sacapuntas</option>
    `;
    }
    buscar(codigo){
      return this.datos.get('1');
    }
  }
class Interfaz{
    agregarProducto(nuevo){
      const lista=document.getElementById('listaProductos');
      let producto=document.createElement('div');
      producto.innerHTML=nuevo.infoHtml();
      lista.appendChild(producto);
    }
    mensaje(mensaje){
      const cont=document.getElementById('container');
      const app=document.getElementById('app');
      
      const msg=document.createElement('div');
      msg.className='alerta';
      msg.appendChild(document.createTextNode(mensaje));
      
      cont.insertBefore(msg,app);
      setTimeout( function(){
          document.querySelector('.alerta').remove();
      }  ,3000);
    }
  }
  console.log('iniciando...');
  let almacen=new Inventario();
  let ui=new Interfaz();
 
 let btnAdd=document.getElementById('btnAdd');
  btnAdd.addEventListener('click',()=>{
    console.log('...nuevo...');
      let codigo=document.getElementById('txtCodigo').value;
    let nombre=document.getElementById('txtNombre').value;
    let precio=document.getElementById('txtPrecio').value;
    let cantidad=document.getElementById('txtCantidad').value;
    let nuevo=new Producto(codigo,nombre,precio,cantidad);
    almacen.agregar(nuevo)
    console.log(nuevo.info());
    ui.mensaje('Se agrego el producto ' + nuevo.nombre);
  });
 let btnCargar=document.getElementById('btnCargar');
  btnCargar.addEventListener('click',()=>{
let mnuProds=document.getElementById('mnuProds');
    mnuProds.innerHTML=almacen.llenarMenu();
 
  });
 let mnuProds=document.getElementById('mnuProds');
  mnuProds.addEventListener('change',()=>{
      let producto=almacen.buscar(mnuProds.value);
    if (producto!=null)
      ui.agregarProducto(producto);
 
  });