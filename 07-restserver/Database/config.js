const mongoose = require('mongoose');


const dbConnection = async() => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('base de datos online');

    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la BBDD');
    }
}



module.exports = {
    dbConnection
}