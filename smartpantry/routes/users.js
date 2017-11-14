var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
// var sequenceGenerator = require('./sequenceGenerator');

router.post('/', function(req, res, next) {
  var user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  user.save(function(err, result){
    if(err){
      return res.status(500).json({
        title: 'Error',
        error: err
      });
    }
    res.status(201).json({
      message: 'User Created',
      obj: result
    });
  });
});

// getUsers (res) {
//   User.find()
//         .exec(function (err, messages) {
//             if (err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             res.status(200).json({
//                 message: 'Success',
//                 obj: messages
//             });
//         });
// }
//
// saveUser(res, user){
//
//   user.save(function (err, result) {
//       if (err) {
//           return res.status(500).json({
//               title: 'An error occurred',
//               error: err
//           });
//       }
//       res.status(201).json({
//           message: 'Saved user',
//           obj: result
//       });
//   });
// }
//
// deleteUser(res, user){
//   user.remove(function(err, result) {
//             if (err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             res.status(200).json({
//                 message: 'Deleted user',
//                 obj: result
//             });
//         });
// }
//
// router.post('/', function (req, res, next){
//   var maxUserId = sequenceGenerator.nextId("users");
//
//   var user = new User({
//     id: maxUserId,
//     username: req.body.username,
//     password: req.body.password,
//     pantry: //what goes here?
//   });
//
//   saveUser(res, user);
// });
//
// router.patch('/:id', function (req, res, next) {
//   User.findOne({id: req.params.id}, function (err, user) {
//     if (err || !user){
//       return res.status(500).json({
//         title: 'No User Found!',
//         error: {user: 'User not found'}
//       });
//     }
//
//     var pantryId;
//
//     for(i = 0; i < user.pantries.length; i++){
//       if(user.pantries[i] === req.body.pantry.id){
//         pantryId = i;
//         break;
//       }
//     }
//
//     if(pantryId){
//       user.pantries[pantryId]: user.req.body.pantry;
//     }
//
//     saveUser(res, user);
//   });
// });
//
// router.delete('/id', function (req, res, next){
//   var query = {id: req.params.id};
//
//   User.findOne(query, function (err, user){
//     if(err){
//       return res.status(500).json({
//         title: 'No User Found',
//         error: err;
//       })
//     }
//     if(!user){
//       return res.status(500).json({
//         title: 'No User Found',
//         error: {userId: req.params.id}
//       });
//     }
//
//     deleteUser(res, user);
//   });
// });



// authUser(req, res, username, password){
//   User.findOne()
//         .exec(function (err, messages) { //use where clause
//             if (err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             res.status(200).json({
//                 message: 'Success',
//                 obj: messages
//             });
//         });
// }
//
// getUser(req, res, userId) {
//   User.find()
//         .exec(function (err, messages) {
//             if (err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             res.status(200).json({
//                 message: 'Success',
//                 obj: messages
//             });
//         });
// }
//

//


module.exports = router;















//the end
