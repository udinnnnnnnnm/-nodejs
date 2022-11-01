const Course = require("../models/Course");


class MeController {
 
    storedCourses(req,res ,next) {
       
        Course.find({})
           
            .then(courses =>{

                courses = courses.map(course => course.toObject())

                res.render('me/stored-course' , { courses })


            
            }

            )




            .catch(next);
            
    }

    trashCourses(req,res ,next) {
        Course.findDeleted({})

        
        .then(courses =>{

            courses = courses.map(course => course.toObject())

            res.render('me/trash-course' , { courses })


        
        }

        )




        .catch(next);
        
    }
}
module.exports = new MeController;