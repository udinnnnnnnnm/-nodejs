

const mongoose = require('mongoose');



async function connect() {
        try{
            await mongoose.connect('mongodb://localhost:27017/catZoom', {
                useNewUrlParser: true,
                useUnifiedTopology:true,
                useCreateIndex:true,
            
            }
             
              
            );
            
                
            console.log('Connect successfull');

 

        }  catch(error) {

            console.log('Connect failu!!!');

        }
    }


        module.exports = { connect };