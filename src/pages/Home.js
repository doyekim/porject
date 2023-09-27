import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  let { type, id } = useParams();

  useEffect(() => {
    axios.get('/porject/Data.json')
      .then(response => {
        setData(response.data.DATA);
      })
  }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  const filteredData = ['무속', '영취산', '점에서 공간으로 8808', '행복의 부피 1807', 'Bubble', '나를 불태우다']


  return (
    <article className='mainbox'>
      <h2>장르별 작품 보기</h2>
      <div className="App">
        {/* 데이터를 사용하여 UI를 렌더링 */}
        {filteredData.map(value => (
          <div key={value} className='item'>
            {data
              .filter(item => item.prdct_nm_korean === value)
              .map(item => (
                <div className="ddd" key={item.id}>
                  <div className='imgs' style={{ backgroundImage: `url(${item.thumb_image})`, width: '200px', height: '250px', backgroundSize: 'cover', position: 'relative',objectFit:"cover" }} alt={item.prdct_nm_korean} />
                  <div className="overlay-text">{item.prdct_cl_nm}</div>
                </div>
                // 여기에 이미지 overlay opacity값으로 줘야함

              ))}
          </div>
        ))}
      </div>
    </article>
  )
}
