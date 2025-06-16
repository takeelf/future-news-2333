from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class News(BaseModel):
    id: Optional[int] = None
    title: str
    content: str
    image_url: Optional[str] = None
    created_at: Optional[datetime] = None 