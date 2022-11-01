const Course = require("../models/Course");

const { muntipleMongooseToOject } = require('../../util/mongoose');




class SiteController {
    
    index(req, res, next) {

        Course.find({})
           
            .then(courses =>{
                console.log({})



                res.render('home' , { 
                    
                    courses:muntipleMongooseToOject(courses) })


            
            }

            )




            .catch(next);
            
    }
      
       
    
    show(req,res) {
        res.send('views detail 222');
    }
}
module.exports = new SiteController;