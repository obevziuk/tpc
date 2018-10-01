var poligons = document.getElementsByClassName("clipPoligons");

function myFunctionOpen() {
  document.getElementById("open").style.display="block";
  document.getElementById("myBtn").style.display="none";
};
// hhhheeeey
function myFunctionClose() {
  document.getElementById("open").style.display="none";
  document.getElementById("myBtn").style.display="block";

};

function openInternship() {
  document.getElementById("internshipOpen").style.display="block";
  document.getElementById("showInt").style.display="none";
};

// function closeInternship() {
//   document.getElementById("internshipOpen").style.display="none";
//   document.getElementById("showInt").style.display="block";
// };

$(window).scroll(function() {
  var height = $(window).scrollTop();
  var slashes = document.getElementById("slashes");
  var brandBox = document.getElementsByClassName("box");

  $('.myDiv').toggleClass('scrolled', $(this).scrollTop() > 50);

  var deviceHeight = $( window ).height();
  var docHeight = $( document ).height();

  if(height  > 800 && height < 4900) {
    $(".brandPlay").addClass("visible");
  } else {
    $(".brandPlay").removeClass("visible");
  }


  $("#slashes").css({

    "-webkit-clip-path": "polygon(" + (25 - height/4) +"% 95%," + (45 - height/4) + "% 5%, " + (55 + height/80)  + "% 5%, " + (35 + height/80) + "% 95%, "
    + (45 - height/80) + "% 95%, " + (65 - height/80) + "% 5%," + (75 + height/4) + "% 5%, " + (55 + height/4) + "% 95%)",
    "clip-path": "polygon(" + (25 - height/4) +"% 95%," + (45 - height/4) + "% 5%, " + (55 + height/80)  + "% 5%, " + (35 + height/80) + "% 95%, "
    + (45 - height/80) + "% 95%, " + (65 - height/80) + "% 5%," + (75 + height/4) + "% 5%, " + (55 + height/4) + "% 95%)"
  });

  if(height  >= 0 && height < 1800) {
    $(".box").css({
      "background":"rgba(40,40,40," + (0 + height/2000) + ")" });
    }
    // console.log(height);
  });



$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    dots:true,
    centerMode: true,
  });

  $('.carouselCase').slick({
    slidesToShow: 2,
    dots:false,
    autoplay:true,
    centerMode: true,
  });
});

function closeBurger() {
  var elementS = document.getElementById("m1");
  elementS.checked = false;
};

// __________GOOGLE MAP__________
function initialize() {
  var myLatLng ={lat:43.6435499,lng:-79.3984788};
  var image = '../../img/marker.png';
  var marker;

  var mapOptions = {
    center: new google.maps.LatLng(43.6435499, -79.3984788),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    draggable: true,
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: true,
    rotateControl: true,
    fullscreenControl:false,
    styles:[{
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#5e676f'}]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#ccd0d4"}]
            },
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ccd0d4"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ccd0d4"
                }
              ]
            },
            {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ccd0d4"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ccd0d4"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ccd0d4"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#5e676f"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#5e676f"
                },
                {
                  "weight": 5.5
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dddddd"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#5e676f"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "off"
                },
                {
                  "weight": 4
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#5e676f"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#5e676f"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
        };

var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'trevor//peter',
  draggable: false,
  animation: google.maps.Animation.DROP,
  icon: image,
  position: {lat:43.6435499,lng:-79.3984788}
});
}
google.maps.event.addDomListener(window, 'load', initialize);
