const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ok: process.env.TESTE})
})

module.exports = router