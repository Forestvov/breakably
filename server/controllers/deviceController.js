const uuid = require('uuid')
const path = require('path')
const ApiError = require("../erorr/ApiError");
const {Device} = require("../models/models");

class deviceController {
	async create(req, res) {
		try {
			const {name, price, brandId, typeId, info} = req.body
			const {img} = req.files
			let fileName = uuid.v4() + ".jpg"
			await img.mv(path.resolve(__dirname, '..', 'static', fileName))
			
			const device = await Device.create({name, price, brandId, typeId, img: fileName})
			
			return res.json(device)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}
	async getAll(req, res) {
		const {brandId, typeId} = req.body
		let device
		if(!brandId && !typeId) {
		
		}
		if(brandId && !typeId){
		
		}
		if(!brandId && typeId) {
		
		}
		if(brandId && typeId){
		
		}
		
		return res.json(device)
	}
	async getOn(req, res) {
	
	}
}

module.exports = new deviceController()