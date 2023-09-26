import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';


export default function List() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [sortAscending, setSortAscending] = useState(true); // 이름 정렬 방향 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/Data.json')
      .then(response => {
        setData(response.data.DATA);
      })
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult(filteredData);
  };

  const toggleSortOrder = () => {
    setSortAscending(!sortAscending);
  };

  // 검색어에 따라 데이터 필터링
  const filteredData = data.filter(item => {
    return item.writr_nm.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // 이름을 가나다 순으로 정렬
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortAscending) {
      return a.writr_nm.localeCompare(b.writr_nm);
    } else {
      return b.writr_nm.localeCompare(a.writr_nm);
    }
  });

  return (
    <div>
      <form className='formInput' onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="작가 이름 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit" value="검색" /> 
      </form>

      {/* 정렬 토글 버튼 */}
      <button onClick={toggleSortOrder}>
        {sortAscending ? '이름 오름차순 정렬' : '이름 내림차순 정렬'}
      </button>

      <ul>
        {sortedData
          .filter((item, index, self) => {
            return (
              self.findIndex((t) => t.writr_nm === item.writr_nm) === index
            );
          })
          .map((item) => (
            <li key={item.id}>
              {item.writr_nm}
              <Link to={`/author/${item.writr_nm}`} onClick={() => navigate(`/author/${item.authorId}`)}>작품보기</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}