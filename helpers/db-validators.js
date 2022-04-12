const Role = require('../models/role');
const { Usuario } = require('../models');

const esRoleValido = async(rol = 'USER_ROLE') => {

    const existeRol = await Role.findOne({ rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async( telefono = '' ) => {

    // Verificar si el telefono existe
    const existeEmail = await Usuario.findOne({ telefono });
    if ( existeEmail ) {
        throw new Error(`El telefono: ${ telefono }, ya está registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el telefono existe
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}


/**
 * Validar colecciones permitidas
 */
const coleccionesPermitidas = ( coleccion = '', colecciones = []) => {

    const incluida = colecciones.includes( coleccion );
    if ( !incluida ) {
        throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
    }
    return true;
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    coleccionesPermitidas
}

