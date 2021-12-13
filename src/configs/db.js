const mongoose = req("mongoose")

module.exports =() => {
    return mongoose.connect("mongodb://localhost:27017/learningRedis")
    
}