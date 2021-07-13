const path = require('path');


module.exports = {
    list : (req,res) => {
        return res.sendFile(path.join(__dirname,'..','views','productList.html'))
    },
    detail : (req,res) => {
        return res.sendFile(path.join(__dirname,'..','views','productDetail.html'))
    }
}