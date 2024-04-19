const { ModelData } = require("../db/databse");

class DataService {
    constructor() {

    }
    async find() {
      const rta = await ModelData.find();
      console.log("🚀 ~ DataService ~ find ~ rta:", rta)
      return rta;
    }
  
    async create(data) {
      const newTodo = await ModelData.create(data);
      return { 
        create: true
      }
    }
  
    async findOne(id) {
      const material = await ModelData.find({_id: id});
      console.log("🚀 ~ file: service.material.js:32 ~ MaterialService ~ findOne ~ material:", material)
      if(!material) {
        throw new Error('Ups, user not found');
      }
      return material[0];
    }
  
    async update(id, changes) {
      const rta = await ModelData.findByIdAndUpdate(id, changes);
      return rta;
    }
  
    async delete(id) {
      const rta = await ModelData.findByIdAndDelete(id);
      // console.log('delete, rta!!',rta)
      return {
        delete: true,
        id,
      }
    }
}
  
module.exports = DataService;