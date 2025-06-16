# Future News 2333 🚀

미래를 다루는 뉴스 웹사이트입니다.

## 🛠️ 기술 스택

### Frontend
- Next.js 15
- React 19
- TypeScript
- CSS Modules

### Backend
- FastAPI
- Supabase
- Python 3.10+

## 🚀 로컬 개발 환경 설정

### 1. 저장소 클론
```bash
git clone <repository-url>
cd future-news-2333
```

### 2. 백엔드 설정
```bash
cd backend
pip install -r requirements.txt

# .env 파일 생성
echo "SUPABASE_URL=your_supabase_url" > .env
echo "SUPABASE_KEY=your_supabase_key" >> .env

# 서버 실행
uvicorn app.main:app --reload
```

### 3. 프론트엔드 설정
```bash
cd frontend
npm install

# .env.local 파일 생성
echo "NEXT_PUBLIC_API_URL=http://127.0.0.1:8000" > .env.local

# 개발 서버 실행
npm run dev
```

## 🌐 배포

### Vercel 배포
1. Vercel CLI 설치: `npm i -g vercel`
2. 배포: `vercel --prod`
3. 환경 변수 설정 (Vercel 대시보드에서)

### 환경 변수
- `NEXT_PUBLIC_API_URL`: API 서버 URL
- `SUPABASE_URL`: Supabase 프로젝트 URL
- `SUPABASE_KEY`: Supabase Anon Key

## 📁 프로젝트 구조

```
future-news-2333/
├── frontend/          # Next.js 프론트엔드
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   └── components/
│   ├── package.json
│   └── next.config.ts
├── backend/           # FastAPI 백엔드
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   └── main.py
│   └── requirements.txt
└── README.md
```

## 🔧 주요 기능

- 📰 뉴스 목록 조회
- 🔍 뉴스 상세 보기
- 📱 반응형 디자인
- 🎨 신문 스타일 UI
- 🚀 빠른 로딩 (Next.js Image 최적화)

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성
3. 변경사항 커밋
4. Pull Request 생성

## 📄 라이센스

MIT License
