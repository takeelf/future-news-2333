from fastapi import APIRouter, HTTPException
from app.models.news import News
from app.core.supabase import get_supabase_client
from typing import List

router = APIRouter()

@router.get("/news", response_model=List[News])
def get_news_list():
    """뉴스 목록 조회"""
    supabase = get_supabase_client()
    try:
        res = supabase.table("news").select("*").order("created_at", desc=True).execute()
        return res.data
    except Exception as e:
        # 데이터베이스 연결 실패 시 목 데이터 반환
        mock_data = [
            {
                "id": 1,
                "title": "화성(火星) 식민도시 '아레스-7', 자치 정부 수립 선포",
                "content": "인류의 두 번째 고향으로 불리는 화성 제7식민도시 '아레스-7'이 어제, 지구 본부 정부로부터의 독립 및 자치 정부 수립을 공식 선언했다. 신임 시장 '손준호'는 '지구와의 독자적 무역 체계 구축, 우주 광물의 합리적 분배, 화성 녹지화 정책 강행을 추진할 것'이라고 밝혔다.",
                "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
                "created_at": "2025-06-16T09:00:00Z"
            },
            {
                "id": 2,
                "title": "'하늘을 나는 자동차', 상용화 10년…도심 항공 교통 체증 '심각'",
                "content": "개인용 에어비(PAV)가 상용화된 지 10년이 지났지만, 신서울 상공은 여전히 혼잡하다. 출퇴근 시간 주요 항공로의 평균 속도는 시속 30km에 불과해 '하늘 위의 주차장'이라는 오명을 벗지 못하고 있다.",
                "image_url": "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
                "created_at": "2025-06-16T08:30:00Z"
            },
            {
                "id": 3,
                "title": "반려 로봇의 기억 이식 서비스, 윤리 논란 '뜨거운 감자'",
                "content": "수명을 다한 반려 로봇의 기억과 데이터를 새로운 모델에 이식하는 서비스가 큰 인기를 끌고 있으나, 생명 윤리 논란이 거세다. '영혼 없는 영생'이라는 반대파 주장과 '추억을 보존한 관리'라는 긍정이 팽팽히 맞서고 있다.",
                "image_url": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
                "created_at": "2025-06-16T08:00:00Z"
            }
        ]
        return mock_data

@router.get("/news/{news_id}", response_model=News)
def get_news(news_id: int):
    """특정 뉴스 조회"""
    supabase = get_supabase_client()
    try:
        res = supabase.table("news").select("*").eq("id", news_id).single().execute()
        return res.data
    except Exception as e:
        raise HTTPException(status_code=404, detail="News not found")

@router.post("/news", response_model=News)
def create_news(news: News):
    """뉴스 생성"""
    supabase = get_supabase_client()
    try:
        res = supabase.table("news").insert(news.dict(exclude_unset=True)).execute()
        return res.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))