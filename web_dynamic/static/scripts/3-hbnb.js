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
$.get("http://0.0.0.0:5001/api/v1/status/", function(data, status) {
		if (data.status == "OK") {
            $("#api_status").addClass("available");
        } else {
            $("#api_status").removeClass("available");          
        }
	});
});
$.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: "{}",
    success: (data) => {
      $(".places").empty();
      $.each(data, (i, place) => {
        let sectionPlace = `
        <article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guests</div>
          <div class="number_rooms">${place.number_rooms} Bedrooms</div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
        </div>
        <div class="description">
          ${place.description}
        </div>
        </article>
        ` 
        $(".places").append(sectionPlace);
      });
    }
  });
