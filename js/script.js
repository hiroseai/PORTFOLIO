/*
header > hamburger-menu
------------------------------------------ */
$(function () {
  const $hamburgerBtn = $('.js-header__hamburger-button');
  const $hamburgerMenu = $('.js-header__hamburger-menu');
  const $body = $('.js-body');

  $hamburgerBtn.on('click', function () {
    $hamburgerBtn.toggleClass('js-header__hamburger-button-active');
    $hamburgerMenu.toggleClass('js-header__hamburger-menu-active');
    $body.toggleClass('is-overflow');
  });

  $(window).on('resize', function () {
    $hamburgerBtn.removeClass('js-header__hamburger-button-active');
    $hamburgerMenu.removeClass('js-header__hamburger-menu-active');
    $body.removeClass('is-overflow');
  });

  $('.js-header__hamburger-menu a[href^="#"]').on('click', function () {
    $hamburgerBtn.removeClass('js-header__hamburger-button-active');
    $hamburgerMenu.removeClass('js-header__hamburger-menu-active');
    $body.removeClass('is-overflow');
  });
});
