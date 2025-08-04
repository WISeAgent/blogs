curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: AIzaSyDYNAu9xd_MmcRW8oZyIw_A-_vm0Xl0Ao4' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'

echo 'export GOOGLE_CLOUD_PROJECT="622049203649"' >> ~/.bashrc
echo 'export GEMINI_API_KEY="AIzaSyDYNAu9xd_MmcRW8oZyIw_A-_vm0Xl0Ao4"' >> ~/.bashrc
source ~/.bashrcecho 