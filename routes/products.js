const express = require('express');
const Trending = require('../models/products');

const router = express.Router();

router.post('/addTrendingads', (req, res, next) => {
    
        Trending.create({
            name:req.body.name,
            price:req.body.price,
            type:req.body.type,
            imaget: req.body.imaget
        }).then((trending) => {
            res.json({ status: "trending ads add success!" });
        }).catch(next);
    })

router.get('/',(req, res, next) => {
    Trending.find({},(err,trendingads)=>{
        if(err){
            res.json(next)
        }
        res.json(trendingads)
    });
})
        
module.exports = router;
