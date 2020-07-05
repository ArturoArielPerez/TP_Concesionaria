const fs = require('fs');
let concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

let marcas = {
        lista: function(req,res){
            let marcas = [];
            concesionarias.forEach(concesionaria=>{
                concesionaria.autos.forEach(auto=>{
                   if(!marcas.includes(auto.marca)){
                        marcas.push(auto.marca);
                   }
                });
            });

            marcas.forEach(marca => {
                res.write(marca +'\n');
            });

            res.end();
        },
        detalle: function(req,res){
            let idMarcas = req.params.marca;

            res.write(idMarcas);

            concesionarias.forEach(concesionaria =>{
                concesionaria.autos.forEach(auto =>{
                    if(auto.marca == idMarcas){
                        res.write(`
                        
                        Marca: ${auto.marca}
                        Modelo: ${auto.modelo}
                        Año: ${auto.anio}
                        `)
                    }
                })
            })
            res.end();
        }
}

module.exports = marcas;