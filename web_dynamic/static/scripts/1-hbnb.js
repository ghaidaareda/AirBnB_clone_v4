$("document").ready(funcrion(){
    const amId = {};
    $('input[type=checkbox]').change(function(){
        if (this.checked) {
            amId[$(this).attr('data-id')] = $(this).attr('data-name');
          } else {
            delete amId[$(this).attr('data-id')];}
        });
        const names = Object.keys(amId);
        $('.amenities h4').text(names.sort().join(', '));
});s
