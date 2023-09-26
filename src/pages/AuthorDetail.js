import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AuthorDetail() {
  const [data, setData] = useState([]);
  const { authorId } = useParams(); // URL에서 파라미터(authorId)를 가져옵니다.
  const [author, setAuthor] = useState(null); // 작가 정보를 저장할 상태 추가

  useEffect(() => {
    // 데이터를 가져오는 대신, data 배열에서 해당 작가 정보를 찾습니다.
    const selectedAuthor = data.find(item => item.authorId === authorId);

    if (selectedAuthor) {
      setAuthor(selectedAuthor);
    }
  }, [authorId, data]); // authorId 또는 data가 변경될 때 useEffect가 실행됩니다.

  return (
    <div>
      {author ? (
        <>
          {/* 작가 상세 정보를 표시하는 내용을 여기에 추가 */}
          <h2>{author.writr_nm}</h2>
          {/* 작가 정보 출력 */}
          <p>작가 ID: {authorId}</p>
          {/* 작품 정보 출력 */}
          <ul>
            {author.works.map(work => (
              <li key={work.id}>
                작품 이름: {work.title}
                {/* 작품에 대한 추가 정보를 표시할 수 있습니다. */}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>작가 정보를 찾을 수 없습니다.</p>
      )}
    </div>
  );
}

export default AuthorDetail;