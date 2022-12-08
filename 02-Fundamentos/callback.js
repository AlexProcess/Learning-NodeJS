

setTimeout(  () => {
    console.log('Hola mundo');
}, 1000 );

const getUserById = ( id, callback) => {
    
    
    const usuario = {
        id,
        nombre: 'Alex',
    };


    setTimeout(()=> {
        console.log(usuario);
    }, 1500)


}

getUserById( 10, ( usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});
