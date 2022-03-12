const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Tasks', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

var stigeSchema = new mongoose.Schema({
 Description: {
     type:String,
 },
 Completed:{
     type:Boolean
 }
});



var tasks = mongoose.model('tasks',stigeSchema);

    // const task1 = new tasks({
    // Description : "this is task1",
    // Completed : true
    // });
    // task1.save().then((err,save)=>{
    //     if(err){
    //         console.error(err);
    //     }else{
    //         console.log(save);
    //     }
    // });

    // const task2 = new tasks({
    //     Description : "this is task2",
    //     Completed : false
    //     });
    //     task2.save().then((err,save)=>{
    //         if(err){
    //             console.error(err);
    //         }else{
    //             console.log(save);
    //         }
    //     });

    //     const task3 = new tasks({
    //         Description : "this is task3",
    //         Completed : true
    //         });
    //         task3.save().then((err,save)=>{
    //             if(err){
    //                 console.error(err);
    //             }else{
    //                 console.log(save);
    //             }
    //         });

    //         const task4 = new tasks({
    //             Description : "this is task4",
    //             Completed : false
    //             });
    //             task4.save().then((err,save)=>{
    //                 if(err){
    //                     console.error(err);
    //                 }else{
    //                     console.log(save);
    //                 }
    //             });

//task displaying not completed 

   tasks.find({Completed : false})
       .exec()
       .then(function(result){
           if(result){
               console.log(result);
           }else
           {
               console.log("data not available");
           }
        });



// task updation
        tasks.updateMany({Completed : false},{Completed:true})
             .exec()
             .then(function(result){
                 if(result){
                     console.log(result);
                 }else{
                     console.log("data not updated");
                 }
             })

// task deletion

       tasks.find({Description:"this is task1"},(err,save)=>{
           if(err){
               console.log(err);
           }else{
                tasks.deleteOne({_id:save._id},(err,hlo)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("deleted");
                    }
                })
                     
            }});

app.listen("3000",()=>{
    console.log("server is running on port 3000");
});
