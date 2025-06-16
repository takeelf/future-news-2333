from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.news import router as news_router

app = FastAPI(title="Future News API", version="1.0.0")

# CORS 설정 (프론트엔드 연결을 위해)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://localhost:3001",
        "https://*.vercel.app",
        "https://future-news-2333.vercel.app"  # 실제 도메인으로 변경 예정
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(news_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Future News API is running!"}