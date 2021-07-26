const city = document.querySelector("#ss");

const buttonSubmit = document.querySelector(
  "#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__button > div.sb-searchbox-submit-col.-submit-button > button"
);
const buttonClose = document.querySelector(
  "#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__input-group.xp__search > div:nth-child(11) > div.c-autocomplete.sb-destination.-with-clear.region_second_line > button"
);
buttonClose.click();
city.value = "London";

buttonSubmit.click();
