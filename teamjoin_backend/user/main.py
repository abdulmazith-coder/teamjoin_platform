
from fastapi import APIRouter, Depends, HTTPException
from . import models, database
from auth.dependencies import get_current_user
from pydantic import BaseModel

router = APIRouter()

class User(BaseModel):
    id: str
    email: str

@router.post("/profile", response_model=models.UserProfile)
async def create_profile(profile: models.UserProfileCreate, current_user: User = Depends(get_current_user)):
    db_profile = await database.get_user_profile(user_id=current_user.id)
    if db_profile:
        raise HTTPException(status_code=400, detail="Profile already exists")
    return await database.create_user_profile(user_id=current_user.id, profile=profile)

@router.get("/profile", response_model=models.UserProfile)
async def get_profile(current_user: User = Depends(get_current_user)):
    profile = await database.get_user_profile(user_id=current_user.id)
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@router.put("/profile", response_model=models.UserProfile)
async def update_profile(profile: models.UserProfileUpdate, current_user: User = Depends(get_current_user)):
    return await database.update_user_profile(user_id=current_user.id, profile=profile)
