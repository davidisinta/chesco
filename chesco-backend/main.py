from fastapi import FastAPI, HTTPException
import requests
from pydantic import BaseModel
import subprocess


app = FastAPI()

class RequestBody(BaseModel):
    queryInput: dict


def get_access_token():
    result = subprocess.run(['gcloud', 'auth', 'print-access-token'], stdout=subprocess.PIPE)
    return result.stdout.decode('utf-8').strip()

@app.get("/")
def home():
    return ("Heyy thereee!")


@app.post("/detect-intent")
def detect_intent(body: RequestBody):
    access_token = get_access_token()
    headers = {
        "Authorization": f"Bearer {access_token}",
        "x-goog-user-project": "fitly-ai-bot",
        "Content-Type": "application/json; charset=utf-8"
    }
    url = "https://global-dialogflow.googleapis.com/v3/projects/fitly-ai-bot/locations/global/agents/85d914b1-096d-46e8-8106-19d80aac152d/sessions/test-session-123:detectIntent"
    response = requests.post(url, headers=headers, json=body.dict())

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.text)


    print(response.json())

    return response.json()


