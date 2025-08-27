import requests
import json

BASE_URL = "http://127.0.0.1:8000"
access_token = None

def print_response(response):
    print(f"Status Code: {response.status_code}")
    try:
        print(f"Response JSON: {response.json()}")
        return response.json()
    except requests.exceptions.JSONDecodeError:
        print(f"Response Text: {response.text}")
        return None

def signup():
    email = input("Enter email: ")
    password = input("Enter password: ")
    name = input("Enter name: ")
    print("\nSending signup request...")
    response = requests.post(f"{BASE_URL}/auth/signup", json={"email": email, "password": password, "name": name})
    print_response(response)
    print("Signup request finished.")

def verify_otp():
    email = input("Enter email: ")
    otp = input("Enter OTP: ")
    print("\nSending OTP verification request...")
    response = requests.post(f"{BASE_URL}/auth/verify-otp", json={"email": email, "token": otp})
    print_response(response)
    print("OTP verification request finished.")

def login():
    global access_token
    email = input("Enter email: ")
    password = input("Enter password: ")
    print("\nSending login request...")
    response = requests.post(f"{BASE_URL}/auth/token", data={"username": email, "password": password})
    json_response = print_response(response)
    if json_response and "access_token" in json_response:
        access_token = json_response["access_token"]
        print("\nLogin successful. Access token stored.")
    print("Login request finished.")

def forgot_password():
    email = input("Enter email: ")
    print("\nSending forgot password request...")
    response = requests.post(f"{BASE_URL}/auth/forgot-password", json={"email": email})
    print_response(response)
    print("Forgot password request finished.")

def update_password():
    global access_token
    if not access_token:
        print("\nPlease log in first to get an access token.")
        return
    new_password = input("Enter new password: ")
    headers = {"Authorization": f"Bearer {access_token}"}
    print("\nSending update password request...")
    response = requests.post(f"{BASE_URL}/auth/update-password", json={"password": new_password}, headers=headers)
    print_response(response)
    print("Update password request finished.")

def get_user_me():
    global access_token
    if not access_token:
        print("\nPlease log in first to get an access token.")
        return
    headers = {"Authorization": f"Bearer {access_token}"}
    print("\nSending get user info request...")
    response = requests.get(f"{BASE_URL}/users/me", headers=headers)
    print_response(response)
    print("Get user info request finished.")

def create_profile():
    global access_token
    if not access_token:
        print("\nPlease log in first to get an access token.")
        return
    headers = {"Authorization": f"Bearer {access_token}"}
    user_data = {"name": "Test User", "location": "Test Location"}
    skills = {"python": "expert", "fastapi": "intermediate"}
    idea = {"title": "Test Idea", "description": "This is a test idea"}
    print("\nSending create profile request...")
    response = requests.post(f"{BASE_URL}/user/profile", headers=headers, json={"user_data": user_data, "skills": skills, "idea": idea})
    print_response(response)
    print("Create profile request finished.")

def get_profile():
    global access_token
    if not access_token:
        print("\nPlease log in first to get an access token.")
        return
    headers = {"Authorization": f"Bearer {access_token}"}
    print("\nSending get profile request...")
    response = requests.get(f"{BASE_URL}/user/profile", headers=headers)
    print_response(response)
    print("Get profile request finished.")

def update_profile():
    global access_token
    if not access_token:
        print("\nPlease log in first to get an access token.")
        return
    headers = {"Authorization": f"Bearer {access_token}"}
    user_data = {"name": "Test User Updated", "location": "Test Location Updated"}
    skills = {"python": "expert", "fastapi": "expert"}
    idea = {"title": "Test Idea Updated", "description": "This is a test idea updated"}
    print("\nSending update profile request...")
    response = requests.put(f"{BASE_URL}/user/profile", headers=headers, json={"user_data": user_data, "skills": skills, "idea": idea})
    print_response(response)
    print("Update profile request finished.")

def main():
    while True:
        print("\nSelect an option:")
        print("1. Sign up")
        print("2. Verify OTP")
        print("3. Login")
        print("4. Forgot Password")
        print("5. Update Password")
        print("6. Get User Info")
        print("7. Create Profile")
        print("8. Get Profile")
        print("9. Update Profile")
        print("10. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            signup()
        elif choice == '2':
            verify_otp()
        elif choice == '3':
            login()
        elif choice == '4':
            forgot_password()
        elif choice == '5':
            update_password()
        elif choice == '6':
            get_user_me()
        elif choice == '7':
            create_profile()
        elif choice == '8':
            get_profile()
        elif choice == '9':
            update_profile()
        elif choice == '10':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()