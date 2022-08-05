
var mapOptions = {
    center: new naver.maps.LatLng(36.31993488549307,127.40529710305233),
    zoom: 14
};
var map = new naver.maps.Map('map', mapOptions);
 
var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.31993488549307, 127.40529710305233),
    title: 'BMK웨딩홀 5층',
    map: map
});
 
var contentString = [
        '<div style="padding:4px 4px;">',
        '   <div style="font-weight:bold;padding-bottom:3px;">BMK웨딩홀</div>',
        '   <p>대전 중구 서문로 133<p>',
        '</div>'
    ].join('');
 
var infowindow = new naver.maps.InfoWindow({
    content: contentString
});
 
naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});
 
infowindow.open(map, marker);
