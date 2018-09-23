
// TODO para cada elemento en json , if bicicleta == si, entonces transformas su dirección a latitud y longitud y se agrega un marker!s
L.mapbox.accessToken = 'pk.eyJ1IjoidGhlbHVja3lhdXRob3IiLCJhIjoiY2pt,ZWc0cDl1MG1veTN2bXphdnVnejVzcCJ9.1Yf2MjsxrzlgZgjlYfJZKg';
var  accidentes = [];
accidentes = require("./datos");
for( var i = 0;  i < accidentes.length; i++)
{
    var j = accidentes[i];
    if(j.CON_BICICLETA === "SI")
    {
        var direccion = j[i].Direccion;
        
    }
}//https://api.mapbox.com/{endpoint}?access_token=your-access-token

