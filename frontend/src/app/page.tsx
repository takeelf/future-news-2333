'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface News {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
}

function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 백엔드 API에서 뉴스 데이터 가져오기
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
        const response = await fetch(`${apiUrl}/api/news`);
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          // API에서 데이터를 가져올 수 없으면 목 데이터 사용
          const mockData = [
            {
              id: 1,
              title: "화성(火星) 식민도시 '아레스-7', 자치 정부 수립 선포",
              content: "인류의 두 번째 고향으로 불리는 화성 제7식민도시 '아레스-7'이 어제, 지구 본부 정부로부터의 독립 및 자치 정부 수립을 공식 선언했다. 신임 시장 '손준호'는 '지구와의 독자적 무역 체계 구축, 우주 광물의 합리적 분배, 화성 녹지화 정책 강행을 추진할 것'이라고 밝혔다.",
              image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
              created_at: "2333-06-15T09:00:00Z"
            },
            {
              id: 2,
              title: "'하늘을 나는 자동차', 상용화 10년…도심 항공 교통 체증 '심각'",
              content: "개인용 에어비(PAV)가 상용화된 지 10년이 지났지만, 신서울 상공은 여전히 혼잡하다. 출퇴근 시간 주요 항공로의 평균 속도는 시속 30km에 불과해 '하늘 위의 주차장'이라는 오명을 벗지 못하고 있다.",
              image_url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
              created_at: "2333-06-15T10:00:00Z"
            },
            {
              id: 3,
              title: "반려 로봇의 기억 이식 서비스, 윤리 논란 '뜨거운 감자'",
              content: "수명을 다한 반려 로봇의 기억과 데이터를 새로운 모델에 이식하는 서비스가 큰 인기를 끌고 있으나, 생명 윤리 논란이 거세다.",
              image_url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
              created_at: "2333-06-15T11:00:00Z"
            },
            {
              id: 4,
              title: "달 관광지 '셀레네 시티', 1년 예약 대기 기록",
              content: "달 표면에 건설된 최초의 민간 관광지 '셀레네 시티'가 개장 1주년을 맞아 놀라운 기록을 세웠다.",
              image_url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
              created_at: "2333-06-15T12:00:00Z"
            }
          ];
          setNews(mockData);
        }
      } catch (error) {
        console.error('뉴스 데이터를 가져오는 중 오류 발생:', error);
        // 오류 발생시 목 데이터 사용
        const mockData = [
          {
            id: 1,
            title: "화성(火星) 식민도시 '아레스-7', 자치 정부 수립 선포",
            content: "인류의 두 번째 고향으로 불리는 화성 제7식민도시가 자치 정부 수립을 선포했습니다.",
            image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            created_at: "2333-06-15T09:00:00Z"
          }
        ];
        setNews(mockData);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  if (loading) {
    return <div className="loading">뉴스를 불러오는 중...</div>;
  }

  const mainArticle = news[0];
  const sideArticles = news.slice(1, 4);

  return (
    <div className="newspaper-container">
      <header className="newspaper-header">
        <h1 className="newspaper-title">미래뉴스 2333</h1>
        <p className="newspaper-date">2333년 6월 15일</p>
        <div style={{ fontSize: '1rem', color: '#666' }}>
          인류의 새로운 미래를 전하는 신문
        </div>
      </header>

      <main className="newspaper-content">
        {mainArticle && (
          <article className="main-article">
            <h2 className="article-title">{mainArticle.title}</h2>
            {mainArticle.image_url && (
              <Image 
                src={mainArticle.image_url} 
                alt={mainArticle.title}
                className="article-image"
                width={800}
                height={400}
                priority
              />
            )}
            <div className="article-content">
              {mainArticle.content}
            </div>
          </article>
        )}

        {sideArticles.map((article) => (
          <article key={article.id} className="article">
            <h3 className="article-title">{article.title}</h3>
            {article.image_url && (
              <Image 
                src={article.image_url} 
                alt={article.title}
                className="article-image"
                width={400}
                height={200}
              />
            )}
            <div className="article-content">
              {article.content.length > 200 
                ? `${article.content.substring(0, 200)}...` 
                : article.content}
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Home;
