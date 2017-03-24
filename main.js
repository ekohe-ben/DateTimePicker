$(document).ready(function(){

  Inputmask.extendAliases({
    'wulinDateTime': {
      alias: "datetime",
      placeholder: 'dd/mm/2017 12:00',
    }
  });

  $('#inputmask-editor').inputmask('wulinDateTime').flatpickr({
    allowInput: true,
    enableTime: true,
    dateFormat: 'd/m/Y H:i',
  });

});
