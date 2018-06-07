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

  $('body').mouseleave(function(event) {
    if(event.clientY <= 0 ) {
      $(popup).fadeIn('slow');
      $(popupOverlay).fadeIn('slow');
    }
  });

  $(btnPopup).click(function () {
    $(popup).toggle();
    $(popupOverlay).toggle();
  });


  $(language).click(function(){
    $(this).toggleClass('is-open');
  });

  $(languageEl).click(function(){
  $(languageEl).removeClass('is-active');
    $(this).toggleClass('is-active');
  });

});