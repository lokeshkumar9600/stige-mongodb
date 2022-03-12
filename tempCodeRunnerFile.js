tasks.find({Completed : false})
//        .exec()
//        .then(function(result){
//            if(result){
//                console.log(result);
//            }else
//            {
//                console.log("data not available");
//            }
//         });



// // task updation
//         tasks.updateMany({Completed : false},{Completed:true})
//              .exec()
//              .then(function(result){
//                  if(result){
//                      console.log(result);
//                  }else{
//                      console.log("data not updated");
//                  }
//              })