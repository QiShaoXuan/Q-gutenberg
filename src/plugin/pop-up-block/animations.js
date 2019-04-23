jQuery(document).ready(function(){
  jQuery(".modal").each(function(index) {
    jQuery(this).on('show.bs.modal', function(e) {
      var open = jQuery(this).attr('data-easein');
      if (open == 'shake') {
        jQuery('.modal-dialog').velocity('callout.' + open);
      } else if (open == 'pulse') {
        jQuery('.modal-dialog').velocity('callout.' + open);
      } else if (open == 'tada') {
        jQuery('.modal-dialog').velocity('callout.' + open);
      } else if (open == 'flash') {
        jQuery('.modal-dialog').velocity('callout.' + open);
      } else if (open == 'bounce') {
        jQuery('.modal-dialog').velocity('callout.' + open);
      } else if (open == 'swing') {
        jQuery('.modal-dialog').velocity('callout.' + open);
      } else {
        jQuery('.modal-dialog').velocity('transition.' + open);
      }
    });
  });
});