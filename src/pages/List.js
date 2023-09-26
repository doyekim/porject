import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom'; // React Router 임포트
import AuthorDetail from './AuthorDetail';

export default function List() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]); // 검색 결과를 저장할 상태 추가
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 함수 가져오기

  useEffect(() => {
    axios.get('/Data.json')
      .then(response => {
        setData(response.data.DATA);
      })
  }, []);

  // 검색어에 따라 데이터 필터링
  const filteredData = data.filter(item => {
    return item.writr_nm.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearch = (e) => {
    e.preventDefault(); // 폼 제출 방지
    setSearchResult(filteredData);
  };

  return (
    <div>
      {/* 검색 입력 필드 */}
      <form className='formInput' onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="작가 이름 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit" value="검색" /> 
      </form>

      {/* 작가 이름 리스트 */}
      <ul>
        {filteredData
          .filter((item, index, self) => {
            // 중복 작가 이름 필터링
            return (
              self.findIndex((t) => t.writr_nm === item.writr_nm) === index
            );
          })
          .map((item) => (
            <li key={item.id}>
              {/* 각 아이템의 내용을 표시 */}
              {item.writr_nm}
              {/* 클릭 시 작가별 작품보기 detail 페이지로 이동할 링크를 추가 */}
              <Link to={`/author/${item.writr_nm}`} onClick={() => navigate(`/author/${item.authorId}`)}>작품보기</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}