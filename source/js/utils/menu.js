export default function initMap() {
  setTimeout(() => {
    const google = window.google;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 59.9389, lng: 30.3239},
      zoom: 15.65,
    });

    (() =>
      new google.maps.Marker({
        position: {lat: 59.937900, lng: 30.322700},
        map,
        icon: {
          url: './img/svg/pin.svg',
          scaledSize: new google.maps.Size(18, 22),
        },
        passive: true,
      })
    )();
  }, 5000);
}
