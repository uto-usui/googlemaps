import 'babel-polyfill';
import Vue from 'Vue';
import myPost from 'Component/post';


if (document.getElementById('app')) {

  new Vue({
    el: '#app',
    components: {
      myPost
    },
    data: {
      message: 'Hello,Vue.js!'
    }
  });

} else {

  console.log('nothing app');

}


// const gMap = () => {
//
//   /**
//    * マップのid
//    * @type {string}
//    */
//   const mapId = 'mymap';
//
//   /**
//    * 要素を取得する
//    * @type {Element}
//    */
//   let canvas = document.getElementById('js-map2');
//
//   /**
//    * ピンを立てるオブジェクトの配列
//    * @type {[obj]}
//    */
//   let place = [
//     {
//       name: '北堀江clubvijon',
//       pin: 'data:image/png;base64,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',
//     },
//     {
//       name: '難波artyard',
//       pin: 'data:image/png;base64,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',
//     }
//   ];
//
//   /**
//    * ジオロケーションで、場所から緯度経度を取り出す
//    * @type {google.maps.Geocoder}
//    */
//   let geocoder = new google.maps.Geocoder();
//
//   for (let i = 0; place.length > i; i++) {
//
//     geocoder.geocode({
//       address: place[i].name
//     }, function(results, status) {
//
//       if (status === google.maps.GeocoderStatus.OK) {
//
//         place[i].address = results[0].geometry.location;
//
//         if (place.length === i + 1) {
//
//           mapSet();
//
//         }
//
//       } else {
//
//         console.group('Error');
//
//       }
//
//     });
//
//   }
//
//   /**
//    * マーカーを格納する配列
//    * @type {Array}
//    */
//   let markers = [];
//
//   /**
//    *
//    * @param center {Array}
//    */
//   const mapSet = () => {
//
//     /**
//      * オプションのセット
//      * @type {{zoom: number, center: *, mapTypeId: string}}
//      */
//     let mapOptions = {
//       zoom: 15,
//       center: place[0].address,
//       mapTypeId: mapId,
//     };
//
//     let map = new google.maps.Map(canvas, mapOptions);
//
//     for (let i = 0; place.length > i; i++) {
//
//       /**
//        * マーカーのセット
//        */
//       let marker = new google.maps.Marker({
//
//         position: place[i].address,
//         map: map,
//         title: 'marker',
//         icon: {
//           url: place[i].pin,
//           scaledSize: new google.maps.Size(51, 70)
//         }
//
//       });
//       markers.push(marker);
//
//
//       setTimeout(() => {
//
//         marker.setAnimation(google.maps.Animation.DROP);
//
//       }, (i + 1) * 400);
//
//     }
//
//
//     /**
//      * マップのスタイル
//      * @type {array}
//      */
//     let style = [
//       {
//         'featureType': 'road',
//         'elementType': 'geometry',
//         'stylers': [
//           {
//             'visibility': 'off'
//           }
//         ]
//       },
//       {
//         'featureType': 'poi',
//         'elementType': 'geometry',
//         'stylers': [
//           {
//             'visibility': 'off'
//           }
//         ]
//       },
//       {
//         'featureType': 'landscape',
//         'elementType': 'geometry',
//         'stylers': [
//           {
//             'color': '#FFFAF0'
//           }
//         ]
//       },
//       {
//         'featureType': 'water',
//         'stylers': [
//           {
//             'color': '#d9edf7'
//           }
//         ]
//       },
//       {
//         'featureType': 'road',
//         'elementType': 'labels',
//         'stylers': [
//           {
//             'visibility': 'off'
//           }
//         ]
//       },
//       {
//         'featureType': 'transit',
//         'stylers': [
//           {
//             'visibility': 'off'
//           }
//         ]
//       },
//       {
//         'featureType': 'administrative',
//         'elementType': 'geometry',
//         'stylers': [
//           {
//             'lightness': 40
//           }
//         ]
//       },
//       {
//         'featureType': 'poi.park',
//         'elementType': 'geometry',
//         'stylers': [
//           {
//             'visibility': 'on',
//             'color': '#c5dac6'
//           }
//         ]
//       },
//       {
//         'featureType': 'landscape.natural.terrain',
//         'elementType': 'geometry.fill',
//         'stylers': [
//           {
//             'visibility': 'on'
//           },
//           {
//             'color': '#CCAA88'
//           },
//           {
//             'lightness': 40
//           }
//         ]
//       },
//       {
//         'featureType': 'landscape.man_made',
//         'elementType': 'geometry.fill',
//         'stylers': [
//           {
//             'visibility': 'on'
//           },
//           {
//             'color': '#EEEEEE'
//           }
//         ]
//       },
//       {
//         'featureType': 'road',
//         'stylers': [
//           {
//             'visibility': 'simplified'
//           },
//           {
//             'color': '#FF0000'
//           },
//           {
//             'gamma': 9
//           }
//         ]
//       },
//       {
//         'featureType': 'road.highway',
//         'stylers': [
//           {
//             'visibility': 'on'
//           },
//           {
//             'color': '#FF0000'
//           },
//           {
//             'gamma': 8
//           }
//         ]
//       },
//       {
//         'featureType': 'road.highway.controlled_access',
//         'stylers': [
//           {
//             'visibility': 'on'
//           },
//           {
//             'color': '#FF0000'
//           },
//           {
//             'gamma': 4
//           }
//         ]
//       },
//       {
//         'featureType': 'road',
//         'elementType': 'labels',
//         'stylers': [
//           {
//             'visibility': 'off'
//           }
//         ]
//       },
//       {
//         'featureType': 'poi.government',
//         'elementType': 'geometry',
//         'stylers': [
//           {
//             'visibility': 'on'
//           },
//           {
//             'color': '#DDDDDD'
//           }
//         ]
//       },
//       {
//         'featureType': 'transit.station',
//         'elementType': 'geometry',
//         'stylers': [
//           {
//             'visibility': 'on'
//           },
//           {
//             'color': '#CCCCCC'
//           }
//         ]
//       },
//       {
//         'featureType': 'transit.line',
//         'elementType': 'geometry',
//         'stylers': [
//           {
//             'visibility': 'on'
//           },
//           {
//             'color': '#AAAAAA'
//           },
//           {
//             'gamma': 4
//           }
//         ]
//       }
//     ];
//
//     /**
//      * マップスタイルのセット
//      * @type {google.maps.StyledMapType}
//      */
//     let mapStyle = new google.maps.StyledMapType(style);
//     map.mapTypes.set(mapId, mapStyle);
//
//     const add = () => {
//
//       new google.maps.Marker({
//
//         position: {
//           lat: 34.676894,
//           lng: 135.498998
//         },
//         map: map,
//         title: 'marker',
//         animation: google.maps.Animation.DROP,
//         icon: {
//           url: place[0].pin,
//           scaledSize: new google.maps.Size(51, 70)
//         }
//
//       });
//
//       markers[1].setMap(null);
//
//     };
//
//     document.getElementById('js-btn').addEventListener('click', add);
//
//   };
//
// };
//
// document.addEventListener('DOMContentLoaded', () => {
//
//   gMap();
//
// });
