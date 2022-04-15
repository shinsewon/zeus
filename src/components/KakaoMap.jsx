import React, { useEffect } from 'react';

const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById('myMap');

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map /* eslint-disable-line no-unused-vars */(
      container,
      options,
    );
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: '4000px',
        height: '4000px',
      }}
    />
  );
}

export default KakaoMap;
