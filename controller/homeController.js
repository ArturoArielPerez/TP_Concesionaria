const fs = require('fs');
let concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

let home = {
    bienvenida: function(req,res){
        res.write('Bienvenidos a DH-Automotores\n');
        res.write('----------------------------');
        res.write('\n\n');
        res.write('Estas son nuestras sucursales');
        res.write('\n\n');
        
        concesionarias.forEach((concesionaria)=>{
            res.write(concesionaria.sucursal);
            res.write('\n');
        })
       
        
        res.end();
    }

}

module.exports = home;