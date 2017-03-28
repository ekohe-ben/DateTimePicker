$(document).ready(function(){

  Inputmask.extendAliases({
    'wulinDateTime': {
      alias: "datetime",
      placeholder: 'dd/mm/2017 12:00',
      yearrange: { minyear: 2017, maxyear: 2018 },
    }
  });

  $('#inputmask-editor').inputmask('wulinDateTime');

  $('#flatpickr-editor').flatpickr({
    allowInput: true,
    enableTime: true,
    dateFormat: 'd/m/Y H:i',
    maxDate: '31/12/2018',
    minDate: 'today',
  });

  $('#combined-editor').inputmask('wulinDateTime').flatpickr({
    allowInput: true,
    enableTime: true,
    dateFormat: 'd/m/Y H:i',
    maxDate: '31/12/2018',
    minDate: 'today',
  });

});
