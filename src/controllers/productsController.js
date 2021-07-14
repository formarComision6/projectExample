const path = require('path');
const products = require('../data/dbProducts');


module.exports = {
    list : (req,res) => {
        //return res.sendFile(path.join(__dirname,'..','views','productList.html'));
        return res.send(products)
    },
    detail : (req,res) => {
        //return res.sendFile(path.join(__dirname,'..','views','productDetail.html'))
    
        let producto = products.find(producto => producto.id === +req.params.id);
        
        return res.send(producto)
    },
    sale : (req,res) => {
        let ofertas = products.filter(product => product.category === "in-sale");
        return res.send(ofertas)
    }
}