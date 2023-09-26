import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Detail() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const itemsPerPage = 5; // 한 번에 표시할 아이템 개수

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); // 다음 페이지 번호로 업데이트
  };

  // 더보기 버튼을 표시
  const showLoadMoreButton = data.length > 0 && data.length % itemsPerPage === 0;

  useEffect(() => {
    fetchData(); // 초기 데이터 로드
  }, [page]); // 페이지 번호가 변경될 때마다 데이터 로드

  const fetchData = () => {
    axios.get(`/ingData.json?page=${page}&itemsPerPage=${itemsPerPage}`)
      .then(response => {
        // 새로운 데이터를 기존 데이터와 합침
        setData(prevData => [...prevData, ...response.data.DATA]);
      })
      .catch(error => {
        console.error('API 호출 중 오류 발생:', error);
      });
  };

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
      {showLoadMoreButton && (
        <button onClick={handleLoadMore}>더 보기</button>
      )}
    </div>
  )
}

export default Detail;