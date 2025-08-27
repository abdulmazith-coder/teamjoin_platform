# A Frontend Developer's Guide to the TeamJoin Backend

Hey there! Vasanth here. I've put together this guide to help you connect our frontend to the backend I've built. My goal is to make this as straightforward as possible, so you can focus on creating a beautiful user experience without breaking a sweat over the API.

Think of this document as your friendly manual for everything the backend has to offer. If you have any questions, just ask!

## What this Backend Provides

This backend handles all the heavy lifting for user authentication and profile management. Here's what you can do with it:

*   **Sign up new users** with email and password, including OTP verification.
*   **Log users in** and get a JWT access token to keep them authenticated.
*   **Reset passwords** if a user forgets theirs.
*   **Create, read, and update user profiles** with custom data like skills and project ideas.

## Getting the Backend Running (for testing)

Sometimes, you might want to run the backend on your own machine to test things out. Here's how you can do that:

1.  **Make sure you have Python 3.11+ installed.**
2.  **Open your terminal, clone the project, and navigate into the directory.**
3.  **Install the necessary Python packages:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Run the backend server:**
    ```bash
    uvicorn main:app --reload
    ```

That's it! The backend will be running at `http://127.0.0.1:8000`. You don't need to worry about the database or environment variables unless you want to do a full setup (in which case, the original README has you covered).

## The API Endpoints (Your Guide)

This is the most important part! Here are the endpoints you'll be working with.

### Authentication

#### 1. Sign Up a New User

*   **Endpoint:** `POST /auth/signup`
*   **What it does:** Starts the registration process for a new user.
*   **What you send:**
    ```json
    {
      "email": "user@example.com",
      "password": "a-strong-password",
      "name": "John Doe"
    }
    ```
*   **What you get back (on success):**
    ```json
    {
      "message": "Sign-up request successful. An OTP has been sent to the email."
    }
    ```

#### 2. Verify the OTP

*   **Endpoint:** `POST /auth/verify-otp`
*   **What it does:** Confirms the user's email with the OTP they received.
*   **What you send:**
    ```json
    {
      "email": "user@example.com",
      "token": "the-6-digit-otp"
    }
    ```
*   **What you get back (on success):**
    ```json
    {
      "message": "Email verification successful."
    }
    ```

#### 3. Log In

*   **Endpoint:** `POST /auth/token`
*   **What it does:** Logs in a user and gives you an access token.
*   **What you send (as form data):**
    ```
    username: user@example.com
    password: a-strong-password
    ```
*   **What you get back (on success):**
    ```json
    {
      "access_token": "your-jwt-access-token",
      "token_type": "bearer"
    }
    ```
    **Important:** You'll need to save this `access_token` to make authenticated requests.

#### 4. Forgot Password

*   **Endpoint:** `POST /auth/forgot-password`
*   **What it does:** Sends a password reset link to the user's email.
*   **What you send:**
    ```json
    {
      "email": "user@example.com"
    }
    ```
*   **What you get back (on success):**
    ```json
    {
      "message": "Password reset email sent"
    }
    ```

### User Profile

**Important:** All these endpoints require the user to be authenticated. You need to send the `access_token` in the `Authorization` header like this: `Authorization: Bearer your-jwt-access-token`.

#### 1. Create a User Profile

*   **Endpoint:** `POST /user/profile`
*   **What it does:** Creates a new profile for the logged-in user.
*   **What you send:**
    ```json
    {
      "user_data": {
        "location": "San Francisco, CA"
      },
      "skills": {
        "frontend": "React",
        "backend": "Node.js"
      },
      "idea": {
        "title": "A cool new app idea",
        "description": "Let's build something amazing!"
      }
    }
    ```
*   **What you get back (on success):** The newly created profile.

#### 2. Get a User Profile

*   **Endpoint:** `GET /user/profile`
*   **What it does:** Retrieves the profile of the logged-in user.
*   **What you send:** Nothing in the body, just the `Authorization` header.
*   **What you get back (on success):** The user's profile data.

#### 3. Update a User Profile

*   **Endpoint:** `PUT /user/profile`
*   **What it does:** Updates the profile of the logged-in user.
*   **What you send:** The fields you want to update.
    ```json
    {
      "skills": {
        "frontend": "Vue.js",
        "backend": "Python"
      }
    }
    ```
*   **What you get back (on success):** The updated profile.

## The Authentication Flow (in a nutshell)

1.  **Sign up:** The user signs up, you call `/auth/signup`.
2.  **Verify:** The user gets an OTP, you call `/auth/verify-otp`.
3.  **Log in:** The user logs in, you call `/auth/token` and get an `access_token`.
4.  **Store the token:** Save the `access_token` in your frontend (e.g., in local storage or a cookie).
5.  **Make authenticated requests:** For any request that needs authentication (like the user profile endpoints), add the `Authorization: Bearer your-jwt-access-token` header.

## A Final Word

I hope this guide is helpful! My aim is to make the backend a reliable and easy-to-use tool for you. If anything is unclear, or if you need an endpoint to do something slightly different, just let me know. We're a team, and I'm here to help.

Happy coding!

- Vasanth