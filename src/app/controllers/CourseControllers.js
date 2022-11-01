const Course = require("../models/Course");
const { mongooseToOject } = require('../../util/mongoose');





class CourseController {

    show(req,res, next) {
        
         Course.findOne({ slug: req.params.slug })

            .then(course => {
                // res.json(course)

                    // console.log(course)vb

                res.render('courses/show.handlebars' , {


                    course : course
                    //  course: mongooseToOject(course) 
                    
                    
                    })
                
                }
            )

            .catch(next);


    }




    create(req, res, next) {

        res.render('../.././res/views/courses/create.handlebars')
    }

    store(req, res, next) {
        

         req.body.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAi9uR9Jky21hRk4jSTCb0fS57rxg`
        const course = new Course( req.body)
        course
        .save()
        .then(() => res.redirect('back'))
        .catch(next)





    }

    edit(req, res, next) {
      

        Course.findById(req.params.id)

            .then(course =>{

                // console.log(Course.findById(req.params.id))


                res.render('../../res/views/courses/edit.handlebars', {


                    course: mongooseToOject(course)



                })

            }

            )
            .catch(next);
            // console.log(req.params.id)

    };

    delete(req, res, next) {
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    

    restore(req, res, next) {
        Course.restore({ _id: req.params.id } )
        .then(() => {
        
            res.redirect('back')
        }
        )
        .catch(next);

    }

    update(req, res, next) {

        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
    }
    forceDelete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

        

 


}
module.exports = new CourseController;