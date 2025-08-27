"""
This file handles the user login functionality.

It provides an endpoint for users to exchange their email and password for a
JWT access token that can be used to authenticate with the API.
"""

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel
from auth import supabase

# Create a new router for the login endpoints
router = APIRouter()

# --- Pydantic Models ---

class Token(BaseModel):
    """Represents the access token that is returned to the user after a successful login."""
    access_token: str
    token_type: str

# --- API Endpoints ---

@router.post("/token", response_model=Token)
async def login_and_get_token(form_data: OAuth2PasswordRequestForm = Depends()):
    """
    Logs in a user with their email and password.

    This endpoint follows the OAuth2 standard for getting an access token.
    The client needs to send the email and password as form data.

    If the credentials are correct, it returns a JWT access token.
    """
    try:
        # Use the Supabase client to sign in the user with their email and password
        response = supabase.auth.sign_in_with_password({
            "email": form_data.username,  # The username is the email in our case
            "password": form_data.password,
        })

        # Extract the access token from the response
        access_token = response.session.access_token

        # Return the access token to the client
        return {"access_token": access_token, "token_type": "bearer"}
    except Exception as e:
        # If the login fails, raise an HTTPException to let the client know.
        raise HTTPException(
            status_code=401,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )