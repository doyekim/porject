import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Detail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/porject/ingData.json')
      .then(response => {
        setData(response.data.DATA);
      })
  }, []);
  return (
    <div>
      <h1>전시 일정</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.dp_main_img} alt={`대표 이미지 ${item.id}`} />
            <h2>{item.dp_name}</h2> {/* 전시회명 */}
            <p>전시장소: {item.dp_place}</p> {/* 전시장소 */}
            <p>전시 기간: {item.dp_start} - {item.dp_end}</p> {/* 전시 기간 */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Detail;