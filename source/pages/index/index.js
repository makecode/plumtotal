import 'ress';
import 'jquery.rateit/scripts/rateit.css';
import './index.sass';
import 'jquery.rateit';

$( document ).ready(function() {
  const languageEl = document.getElementsByClassName('language__el');
  const language = document.getElementsByClassName('language');
  const popup = document.getElementById('popup');
  const btnPopup = document.getElementById('popup__btn');

  const delayPopup = 5000;

  function showPopup() {
    $(popup).addClass("is-visible");
  }

  setTimeout(showPopup, delayPopup);

  $(btnPopup).click(function () {
    $(popup).removeClass("is-visible");
  });

  $(language).click(function(){
    $(this).toggleClass('is-open');
  });

  $(languageEl).click(function(){
  $(languageEl).removeClass('is-active');
    $(this).toggleClass('is-active');
  });



});