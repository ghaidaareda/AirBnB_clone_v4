$("document").ready(funcrion(){
    const amId = {};
    $('input[type=checkbox]').change(function(){
        if (this.checked) {
            amId[$(this).attr('data-id')] = $(this).attr('data-name');
          } else {
            delete amId[$(this).attr('data-id')];}

        const amenityList = Object.values(amId);
        if (amenityList.length > 0) {
            $('.amenities > h4').text(amenityList.join(', '));
        } else {
            $('.amenities > h4').html('&nbsp;');}
        });  
});
