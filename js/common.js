$(document).ready(function(){
	$('.toggle').click(function(){
		$(this).toggleClass('open');
	});

$(".toggle").click(function() {
	if ($(".nav-mobile").is(":visible")) {
        $(".nav-mobile").slideUp(600);
        
	} else {
		$(".nav-mobile").slideDown(600);
	};
});

$('.popup__open').click(function(){
	$('.popup-open').addClass('active-popup');
});
$('.popup-wrap-close').click(function(){
	$('.popup-open').removeClass('active-popup');
});

$("#phonenum").mask("+7(999)999-99-99");

$(".toggle1").click(function() {
  $(".toggle1").addClass('product-list-open');
  $(".toggle2, .toggle3, .toggle4, .toggle5").removeClass('product-list-open');
 });
$(".toggle1").click(function() {
  $(".open1").addClass('list__open');
  $(".open2, .open3, .open4, .open5").removeClass('list__open');
 });
$(".toggle2").click(function() {
  $(".toggle2").addClass('product-list-open');
  $(".toggle1, .toggle3, .toggle4, .toggle5").removeClass('product-list-open');
 });
 $(".toggle2").click(function() {
  $(".open2").addClass('list__open');
  $(".open1, .open3, .open4, .open5").removeClass('list__open');
 });
$(".toggle3").click(function() {
  $(".toggle3").addClass('product-list-open');
  $(".toggle1, .toggle2, .toggle4, .toggle5").removeClass('product-list-open');
 });
 $(".toggle3").click(function() {
  $(".open3").addClass('list__open');
  $(".open1, .open2, .open4, .open5").removeClass('list__open');
 });
$(".toggle4").click(function() {
  $(".toggle4").addClass('product-list-open');
  $(".toggle1, .toggle2, .toggle3, .toggle5").removeClass('product-list-open');
 });
 $(".toggle4").click(function() {
  $(".open4").addClass('list__open');
  $(".open1, .open2, .open3, .open5").removeClass('list__open');
 });
$(".toggle5").click(function() {
  $(".toggle5").addClass('product-list-open');
  $(".toggle1, .toggle2, .toggle3, .toggle4").removeClass('product-list-open');
 });
 $(".toggle5").click(function() {
  $(".open5").addClass('list__open');
  $(".open1, .open2, .open3, .open4").removeClass('list__open');
 });




});