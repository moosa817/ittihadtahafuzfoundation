# contains custom additional functions
import requests
import os
import re
def extract_youtube_video_id(url):
    # Regular expression pattern to match YouTube video IDs
    pattern = r"(?:https?://)?(?:www\.)?(?:youtube\.com/watch\?v=|youtu\.be/)([a-zA-Z0-9_-]{11})"

    # Search for the pattern in the URL
    match = re.search(pattern, url)

    if match:
        return match.group(1)  # Return the matched video ID
    else:
        return None  # If no match is found, return None


def ThxMsg(user):
    html_template = f"""<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Thank You for Your Message</title><style>body {{font-family: 'Arial', sans-serif;background-color: #f4f4f4;margin: 0;padding: 0;}}.container {{max-width: 600px;margin: 20px auto;background-color: #fff;padding: 30px;border-radius: 10px;box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);}}.logo {{text-align: center;margin-bottom: 20px;}}.logo img {{max-width: 100px;height: auto;border-radius: 50%;}}.big-title {{font-size: 28px;color: #333;text-align: center;margin-bottom: 20px;font-weight: bold;}}.p {{color: #666;}}.signature {{margin-top: 20px;font-style: italic;color: #888;text-align: center;}}</style></head><body><div class="container"><div class="logo"><img src="https://d2nf2tnwikupdj.cloudfront.net/static/imgs/logo.png" alt="Ittihad Tahafuz Foundation Logo"></div><div class="big-title">Ittihad Tahafuz Foundation</div><p>Dear {user},</p><p>We have received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you as soon as possible.</p><p>Thank you for your patience and understanding.</p><div class="signature"><p>Best Regards,<br>Ittihad Tahafuz Foundation</p></div></div></body></html>"""

    return html_template


def generate_inquiry_email(fname, lname, email, subject, msg):
    return f"""<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New User Inquiry</title><style>body{{font-family:'Arial',sans-serif;background-color:#f4f4f4;margin:0;padding:0;}}.container{{max-width:600px;margin:20px auto;background-color:#fff;padding:30px;border-radius:10px;box-shadow:0 0 20px rgba(0,0,0,0.1);}}.logo{{text-align:center;margin-bottom:20px;}}.logo img{{max-width:100px;height:auto;border-radius:50%;}}.big-title{{font-size:28px;color:#333;text-align:center;margin-bottom:20px;font-weight:bold;}}.p{{color:#666;}}.signature{{margin-top:20px;font-style:italic;color:#888;text-align:center;}}</style></head><body><div class="container"><div class="logo"><img src="https://d2nf2tnwikupdj.cloudfront.net/static/imgs/logo.png" alt="Ittihad Tahafuz Foundation Logo"></div><div class="big-title">New User Inquiry</div><p>Dear Admin,</p><p>A new user has submitted an inquiry with the following details:</p><ul><li><strong>First Name:</strong> {fname}</li><li><strong>Last Name:</strong> {lname}</li><li><strong>Email:</strong> {email}</li><li><strong>Subject:</strong> {subject}</li><li><strong>Message:</strong><br>{msg}</li></ul><p>Please review and respond to the user as soon as possible.</p><div class="signature"><p>Best Regards,<br>Ittihad Tahafuz Foundation</p></div></div></body></html>"""


def EmailTo(sender, sender_name, reciver, subject, msg):

    headers = {
        "Authorization": "Bearer " + os.getenv("SENDGRID_API_KEY", ""),
        "Content-Type": "application/json",
    }

    json_data = {
        "personalizations": [
            {
                "to": [
                    {
                        "email": reciver,
                    },
                ],
            },
        ],
        "from": {
            "name": sender_name,
            "email": sender,
        },
        "subject": subject,
        "content": [
            {
                "type": "text/html",
                "value": msg,
            },
        ],
    }

    response = requests.post(
        "https://api.sendgrid.com/v3/mail/send", headers=headers, json=json_data
    )
    return response.status_code
