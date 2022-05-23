class Usuario
{
  constructor ( nombre, apellido )
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = []
    this.mascotas = []
  }
 
 
getFullName ()
{
  return `Nombre: ${ this.nombre }  Apellido: ${ this.apellido }`;
}
 
addMascota ( nuevaMascota )
{
  return this.mascotas.push( nuevaMascota );
}
 
countMascotas ()
{
  return this.mascotas.length;
}
 
addBook ( nombre, autor )
  {
    this.libros.push(
      {
        "nombre": nombre, "autor": autor
      } );
  }
 
}
 
const usuario = new Usuario( 'Coder', 'House' );
 
usuario.addMascota( 'Perro' )
usuario.addMascota( 'Gato' )
 
usuario.addBook( 'Harry Potter', 'J.K.Rowling' )
 
const fullName = usuario.getFullName()
 
console.log( fullName )
console.log( 'Total de mascotas: ', usuario.countMascotas() )
