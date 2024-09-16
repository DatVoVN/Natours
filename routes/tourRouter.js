const express = require('express');
const tourController = require('../controllers/tourController');
const router = express.Router();
// PARAMS MIDDLEWARE ( Nó chỉ xử lý trong cái param mình chọn trong cái tuyến đường mình chọn và giá trị val chính là param)
// router.param('id', tourController.checkID);
//ROUTE
router
  .route('/')
  .get(tourController.getAllTour)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
module.exports = router;
