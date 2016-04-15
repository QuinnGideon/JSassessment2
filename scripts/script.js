$(document).ready(function(){
	prompt('Please input your code');
})


var checkCoupon = function (prompt){
  if(prompt === couponcode) {
  console.log('Thank you! Your coupon has been applied');
} else {
  console.log('Sorry, this coupon is not valid');
};
};




