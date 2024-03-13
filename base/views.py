from django.shortcuts import render
from django.http import JsonResponse

from .forms import ContactForm
from .utils import EmailTo, ThxMsg, generate_inquiry_email, extract_youtube_video_id
from .models import GalleryImages, VideoLinks


# Create your views here.
def home(request):
    return render(request, "index.html")


def about(request):
    return render(request, "about.html")


def services(request):
    return render(request, "services.html")


def donate(request):
    return render(request, "donate.html")


def contact(request):
    if request.method == "POST":
        fname = request.POST.get("fname")
        lname = request.POST.get("lname")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()

            EmailTo(
                "contact@ittihadtahafuzfoundation.org",
                "Contact Form",
                "contact@ittihadtahafuzfoundation.org",
                "User Message",
                generate_inquiry_email(fname, lname, email, subject, message),
            )

            EmailTo(
                "contact@ittihadtahafuzfoundation.org",
                "Ittihad Thafuz Foundation",
                email,
                "Message Recieved",
                ThxMsg(f"{fname} {lname}"),
            )
            return JsonResponse({"success": "Message Submitted"})
        else:
            error_json = form.errors.get_json_data()
            msg = ""
            for i in form.fields:
                if i in error_json:
                    msg += f"{i}: {error_json[i][0]['message']}<br>"
            return JsonResponse({"error": msg})

    return render(request, "contact.html")


def gallery(request):
    img = GalleryImages.objects.all()
    n = round(img.count() / 4)

    # [[1,2,3],[1,2,3]]

    images_list = [img[i : i + n] for i in range(0, len(img), n)]

    vids = VideoLinks.objects.all()
    vids_link = [
        f"https://www.youtube.com/embed/{extract_youtube_video_id(i.link)}"
        for i in vids
    ]

    context = {"images_list": images_list, "vids_link": vids_link}
    return render(request, "gallery.html", context)
