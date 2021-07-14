const express = require('express');
const router = express.Router();

const {list,detail,sale} = require('../controllers/productsController')


/* /products */
router.get('/',list);
router.get('/detail/:id',detail);
router.get('/sale',sale)



module.exports = router;