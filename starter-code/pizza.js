// Write your Pizza Builder JavaScript in this file.

// Iteration 5: Update price
let basePrice = 13;
$('strong').html(`$${basePrice}`);


$('.btn-pepperonni').click(() => {
  $('.btn-pepperonni').toggleClass('active');
  $('.pep').toggle('true');
  $('.panel.price li:nth-child(1)').toggle('false');

  if ($('.btn-pepperonni').hasClass('active')) {
    basePrice += 1;
    $('strong').html(`$${basePrice}`);
  } else {
    basePrice -= 1;
    $('strong').html(`$${basePrice}`);
  }
});

$('.btn-mushrooms').click(() => {
  $('.btn-mushrooms').toggleClass('active');
  $('.mushroom').toggle('true');
  $('.panel.price li:nth-child(2)').toggle('false');

  if ($('.btn-mushrooms').hasClass('active')) {
    basePrice++;
    $('strong').html(`$${basePrice}`);
  } else {
    basePrice--;
    $('strong').html(`$${basePrice}`);
  }
});

$('.btn-green-peppers').click(() => {
  $('.btn-green-peppers').toggleClass('active');
  $('.green-pepper').toggle('true');
  $('.panel.price li:nth-child(3)').toggle('false');

  if ($('.green-peppers').hasClass('active')) {
    basePrice++;
    $('strong').html(`$${basePrice}`);
  } else {
    basePrice--;
    $('strong').html(`$${basePrice}`);
  }
});


// Iteration 2: Sauce and crust options

$('.panel.price li:nth-child(4)').toggle('false');
$('.panel.price li:nth-child(5)').toggle('false');

// default is regular sauce
$('.sauce').removeClass('sauce-white');
$('.btn-sauce').toggleClass('active');

$('.btn-sauce').click(() => {
  $('.btn-sauce').toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
  $('.panel.price li:nth-child(4)').toggle('true');
  if ($('.btn-sauce').hasClass('active')) {
    basePrice += 3;
    $('strong').html(`$${basePrice}`);
  } else {
    basePrice -= 3;
    $('strong').html(`$${basePrice}`);
  }
});


// default is regular crust
$('.crust-gluten-free').removeClass('crust-gluten-free');
$('.btn-crust').toggleClass('active');

$('.btn-crust').click(() => {
  $('.btn-crust').toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('.panel.price li:nth-child(5)').toggle('true');

  if ($('.btn-crust').hasClass('active')) {
    basePrice += 5;
    $('strong').html(`$${basePrice}`);
  } else {
    basePrice -= 5;
    $('strong').html(`$${basePrice}`);
  }
});
