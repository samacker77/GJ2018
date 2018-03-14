//Expand sidebar on hover
$('.side-panel').hover(function(){
  console.log('hover');
  $('.side-panel').removeClass('col-md-5');
  $('.side-panel').addClass('col-md-12');
}, function(){
  console.log('hover');
  $('.side-panel').addClass('col-md-5');
  $('.side-panel').removeClass('col-md-12');
});

//hilight on hover
$('#description').hover(function(){
  $('.description').addClass('highlight');
$('.description').addClass('black-text');
},function(){
  $('.description').removeClass('highlight');
$('.description').removeClass('black-text');
} );
$('#rules').hover(function(){
  $('.rules').addClass('highlight');
$('.rules').addClass('black-text');
},function(){
  $('.rules').removeClass('highlight');
$('.rules').removeClass('black-text');
} );
$('#contacts').hover(function(){
  $('.contacts').addClass('highlight');
$('.contacts').addClass('black-text');
},function(){
  $('.contacts').removeClass('highlight');
$('.contacts').removeClass('black-text');
} );

//Load text on click
$('#description').on('click', function(){
  $('.title-1').html('');
  $('.text-1').html('Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eu leo feugiat, tristique urna quis, varius magna. Praesent ornare suscipit lacus, ac efficitur mauris hendrerit nec. Sed faucibus malesuada ante, eget gravida enim sollicitudin sed. Nullam vel quam ac velit varius posuere at quis enim. Cras a blandit felis. Duis sodales id tortor pharetra sagittis. Cras laoreet, orci non eleifend pulvinar, arcu orci pretium est, in feugiat lacus nulla eu mauris. Morbi sed efficitur nisi. Vestibulum eu tincidunt lorem. Pellentesque ultrices enim arcu, eget vestibulum nulla luctus ut. Nullam mi felis, auctor vitae ultrices ut, interdum in orci. Nullam consequat eleifend libero, in pretium lectus auctor a.');
  $('.title-2').html('Schedule');
  $('.text-2').html('Venue: NLHC\nStarting Time: 14:30 PM On Saturday, 22nd Of October\nRegistration Closes: 14:35 PM On Saturday, 22nd Of October');
})
$('#rules').on('click', function(){
  $('.text-1').html('Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eu leo feugiat, tristique urna quis, varius magna. Praesent ornare suscipit lacus, ac efficitur mauris hendrerit nec. Sed faucibus malesuada ante, eget gravida enim sollicitudin sed. Nullam vel quam ac velit varius posuere at quis enim. Cras a blandit felis. Duis sodales id tortor pharetra sagittis. Cras laoreet, orci non eleifend pulvinar, arcu orci pretium est, in feugiat lacus nulla eu mauris. Morbi sed efficitur nisi. Vestibulum eu tincidunt lorem. Pellentesque ultrices enim arcu, eget vestibulum nulla luctus ut.');
  $('.title-1').html('Problem Statement');
  $('.title-2').html('Prizes');
  $('.text-2').html('1st Prize: xxxx\n2nd Prize: xxxx\n 3rd Prize: xxxx\n');
}); 
$('#contacts').on('click', function(){
  $('.text-1').html('For further enquiries, please contact:');
  $('.title-1').html('');
  $('.title-2').html('');
  $('.text-2').html('');
})