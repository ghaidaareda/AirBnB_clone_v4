$(document).ready(function(){
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
$.get("http://0.0.0.0:5001/api/v1/status/", function(data, textStatus) {
		if (data.status == "OK") {
            $("#adiv#api_status").addClass("available");
        } else {
            $("#adiv#api_status").removeClass("available");          
        }
	});
});
