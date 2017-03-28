$(document).ready(function(){

  Inputmask.extendAliases({
    'wulinDateTime': {
      alias: "datetime",
      placeholder: 'dd/mm/2017 12:00',
      yearrange: { minyear: 1900, maxyear: 2020 },
    }
  });

  $('#inputmask-editor').inputmask('wulinDateTime');

  $('#flatpickr-editor').flatpickr({
    allowInput: true,
    enableTime: true,
    dateFormat: 'd/m/Y H:i',
  });

  $('#combined-editor').inputmask('wulinDateTime').flatpickr({
    allowInput: true,
    enableTime: true,
    dateFormat: 'd/m/Y H:i'
  });

});
