const fs = require('fs');
let concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

let sucursales = {
    sucursal: function(req,res){
        res.write('Contamos con estas sucursales\n');
        res.write('------------------------------');
        res.write('\n\n');
        concesionarias.forEach((concesionaria)=>{
            res.write(`
                Sucursal: ${concesionaria.sucursal}
                Direccion: ${concesionaria.direccion}
                Telefono: ${concesionaria.telefono}
            
            `)
        })
        res.end();
    },
    espefico: function (req, res){
        let idSucursal = req.params.sucursal;

        concesionarias.forEach((concesionaria) =>{
            if(concesionaria.sucursal == idSucursal){
                res.write(`
Concesionaria: ${concesionaria.sucursal}
Direccion: ${concesionaria.direccion}
Telefono: ${concesionaria.telefono}
                
                `);

         concesionaria.autos.forEach(auto => {
                    res.write(`
Marca: ${auto.marca}
Modelo: ${auto.modelo}
Año: ${auto.anio}
Color: ${auto.color}
                    `);
                });
                res.end();
            }
        });
        res.end('NO EXISTE LA CONCESIONARIA');
    }
}

module.exports = sucursales;