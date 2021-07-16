module.exports = {
    index : (req,res) => {
        return res.render('home',{
            title : "BerenjeNET",
            nombre : "Eric",
            peliculas : ['Iroman','Spideram','Antman'],
            enOferta : true,
            genero : 'acción'
        })
    }
}