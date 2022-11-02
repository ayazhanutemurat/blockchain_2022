'use strict';

const express = require('express');
const { urlencoded } = require('express');
const { fake_api } = require('../services/fake_api');
var urlencodedParser = urlencoded({ extended: false })
const router = express.Router();

router.get('/makeOrder', 
    async function(req, res) {
        res.render('create-order', {
            title: 'About page',
            siteName: 'star'
        })
    }
);

router.post('/orderDetails', urlencodedParser,
    async function(req, res) {
        req.body.status = 'On Picking';
        req.body.sum = req.body.packs * 15500;
        req.body.weight = req.body.packs * 5;
        req.body.client = {name: "Askar", surname: "Aituov", email:"askar@gmail.com", phone: "+77077077777", address: "Tole bi 59", creditCard: {PAN:"4*8889"}}
        console.log(req.body)
        const fa = await fake_api(req.body)
        fa.createdAt = fa.createdAt.substr(0, 10) 
        console.log(fa)
        res.render( 'order-details',{title: 'Order Details', siteName: 'Order Details', data: fa})
}
);

module.exports = router;
