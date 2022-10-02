var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost", //Indicamos el host de la BD
    user: "root",        //El usuario
    password: "", //Su contraseña
    database:"alumnos"   //Y la BD  a la que conectaremos
});

con.connect(function(err){
    if(err) throw err; // Si la conexion falla habra un error e indicara en donde esta el error
    console.log('Connected');// Mostrara este mensaje en la terminal
    var sql = "INSERT INTO egresados(id,materias,carrera,correo) VALUES(1,'español','sistemas','RicarOroGon@tec.edu.mx')";  //Esta linia indica el query de la BD en la cual Insertaremos los datos
    // Esta linea indicara si hay un error al crear la tabla
    con.query(sql,function(err,result){
        if (err)throw err;
        console.log('Datos Ingresados satisfactoriamente');  //Mostrara el resultada en la consola

    });

    // Esta linea indica que cerramos la conexion
    con.end(function(err){
        if (err) throw err;
        else console.log('Closing connection');
    });
});