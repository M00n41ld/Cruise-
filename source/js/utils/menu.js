export default function initMap() {
  // eslint-disable-next-line no-undef
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.93890, lng: 30.323900},
    zoom: 15.65,
  });

  // eslint-disable-next-line no-undef, no-unused-vars
  const marker = new google.maps.Marker({
    position: {lat: 59.937900, lng: 30.322700},
    map,
    icon: {
      url: '@img/svg/pin.svg',
      // eslint-disable-next-line no-undef
      scaledSize: new google.maps.Size(18, 22),
    },
    passive: true,
  });
}
