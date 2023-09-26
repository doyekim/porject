import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  let { type, id } = useParams();

  useEffect(() => {
    axios.get('/Data.json')
      .then(response => {
        setData(response.data.DATA);
      })
  }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  const filteredData = ['무속', '억새는 지다 1', '공 87 - 7', '행복의 부피 1807', 'Bubble', '나를 불태우다']


  return (
    <article>
      <h2>장르별 작품 보기</h2>
      <div className="App">
        {/* 데이터를 사용하여 UI를 렌더링 */}
        {filteredData.map(value => (
          <div key={value} className='item'>
            {data
              .filter(item => item.prdct_nm_korean === value)
              .map(item => (
                <div key={item.id}>
                  <div className='imgs' style={{ backgroundImage: `url(${item.thumb_image})`, width: '200px', height: '250px', backgroundSize: 'cover', position: 'relative' }} alt={item.prdct_nm_korean} />
                </div>
                // 여기에 이미지 overlay opacity값으로 줘야함
              ))}
          </div>
        ))}
      </div>
    </article>
  )
}
