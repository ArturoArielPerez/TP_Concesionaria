const fs = require('fs');
let concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

let autos = {
    listaCompleta: function(req,res){
        res.write('Nuestras sucursales y autos disponibles\n\n');

        concesionarias.forEach(concesionaria =>{
            res.write(`Concesionaria: ${concesionaria.sucursal}`);
            concesionaria.autos.forEach(auto =>{
                res.write(`
                    
                    Marca:${auto.marca}
                    Modelo: ${auto.modelo}
                    Año: ${auto.anio}
                    Color: ${auto.color}
                
                `)
            })
        })
        res.end();
    },
    marca: function(req,res){
        let idMarca = req.params.marca;

        res.write(idMarca);

        concesionarias.forEach(concesionaria =>{
            concesionaria.autos.forEach(auto =>{
                if(auto.marca == idMarca){
                    res.write(`
                        Marca: ${auto.marca}
                        Modelo: ${auto.modelo}
                        Año: ${auto.anio}
                        Color: ${auto.color}
                    `)
                }
            })
        })
        res.end();
    },
    dato: function(req,res){
        let idMarca = req.params.marca;
        let idDato = req.params.dato;
        let autos = [];

        concesionarias.forEach(concesionaria =>{
            concesionaria.autos.forEach(auto=>{
                if(auto.marca == idMarca){
                    if(auto.anio == idDato || auto.color == idDato){
                       autos.push(auto);
                    } 
                }
            });
            
        });

        if(autos.length > 0){
            autos.forEach(auto => {
                res.write(`
        Marca: ${auto.marca}
        Modelo ${auto.modelo}
        Año: ${auto.anio}
        Color: ${auto.color}
        
        `);
            });
        }else{
            res.end('ERROR!!! No se registran autos con estas caracteristicas. Intente nuevamente.');
        }
        
        res.end();
    }
}
    
        
            


module.exports= autos;



