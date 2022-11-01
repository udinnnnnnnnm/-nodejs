const Course = require("../models/Course");

class ViewsController {
    
    index(req, res, next) {
    
        Course.find({})
           
            .then(courses =>{

                courses = courses.map(course => course.toObject())
                console.log(courses)

                res.render('home' , { courses })

            })




            .catch(next);
            
           



        
    
    }
    show(req,res) {
        res.send('views detail');
    }
}
module.exports = new ViewsController;