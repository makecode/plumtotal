import 'ress';
import 'jquery.rateit/scripts/rateit.css';
import './index.sass';
import 'jquery.rateit';

$( document ).ready(function() {
  const language = document.getElementsByClassName('language');
  const languageEl = document.getElementsByClassName('language__el');
  const popupOverlay = document.getElementById('popup-overlay');
  const popup = document.getElementById('popup');
  const btnPopup = document.getElementById('popup__close');
  const infoGreen = document.getElementById('info-green');
  const infoOrange = document.getElementById('info-orange');

  $('body').mouseleave(function(event) {
    if(event.clientY <= 0 ) {
      $(popup).fadeIn('slow');
      $(popupOverlay).fadeIn('slow');
    }
  });

  const delayPopup = 3000;

  function showPopup() {
    $(infoGreen).addClass("is-visible");
    $(infoOrange).addClass("is-visible");
  }

  setTimeout(showPopup, delayPopup);

  $(language).click(function(){
    $(this).toggleClass('is-open');
  });

  $(languageEl).click(function(){
  $(languageEl).removeClass('is-active');
    $(this).toggleClass('is-active');
  });

  // close popup
  $(btnPopup).click(function () {
    $(popup).toggle();
    $(popupOverlay).toggle();
  });

  $(document).on('mousedown', function (e) {
    if (e.target === popupOverlay) {
      $(popup).toggle();
      $(popupOverlay).toggle();
    }
  });
});