import 'ress';
import 'jquery.rateit/scripts/rateit.css';
import './index.sass';
import 'jquery.rateit';

$( document ).ready(function() {
  const language = document.getElementsByClassName('language');
  const languageEl = document.getElementsByClassName('language__el');
  const popup = document.getElementById('popup');
  const popupOverlay = document.getElementById('popup-overlay');
  const btnPopup = document.getElementById('popup__close');

  $(popupOverlay).fadeIn(400,
    function(){
      $(popup)
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
    });

  $(btnPopup, popupOverlay).click( function(){
    $(popup)
      .animate({opacity: 0, top: '45%'}, 200,
        function(){ // пoсле aнимaции
          $(this).css('display', 'none');
          $(popupOverlay).fadeOut(400);
        }
      );
  });

  $(language).click(function(){
    $(this).toggleClass('is-open');
  });

  $(languageEl).click(function(){
  $(languageEl).removeClass('is-active');
    $(this).toggleClass('is-active');
  });

});