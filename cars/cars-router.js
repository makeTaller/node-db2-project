const express = require('express');
const db = require('../data/connections')

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		res.json(await db("cars"))
	} catch(err) {
		next(err)
	}
})


//     try{
//         res.json(await db("cars").insert(body).where({vin}))
//     }
// })

router.post("/", async (req, res, next) => {
	try {
		const [vin] = await db("cars").insert(req.body)
		const newCar = await db("cars").where({ vin }).first()

		res.status(201).json(newCar)
	} catch(err) {
		next(err)
	}
})
module.exports = router