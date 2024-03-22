from django.shortcuts import render
from django.http import JsonResponse

from .forms import ContactForm
from .utils import EmailTo, ThxMsg, generate_inquiry_email, extract_youtube_video_id
from .models import GalleryImages, VideoLinks
from django.core.serializers import serialize
import json

# images gallery should get at a time
IMAGES_COUNT = 2
VIDEOS_COUNT = 2


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
    img = GalleryImages.objects.all()[:IMAGES_COUNT]
    n = round(img.count() / 4)

    # [[1,2,3],[1,2,3]]

    # images_list = [img[i : i + n] for i in range(0, len(img), n)]
    images_list = img

    vids = VideoLinks.objects.all()[:2]

    vids_link = [
        f"https://www.youtube.com/embed/{extract_youtube_video_id(i.link)}"
        for i in vids
    ]

    context = {"images_list": images_list, "vids_link": vids_link}
    return render(request, "gallery.html", context)


def load_images(request):
    if request.method == "POST":
        ending_index = int(request.POST.get("ending_index"))

        images = GalleryImages.objects.all()[ending_index : ending_index + IMAGES_COUNT]

        images_list = [image.image.url for image in images]
        images_list = json.dumps(images_list)

        final_images = len(images) < IMAGES_COUNT

        return JsonResponse({"finalimages": final_images, "images": images_list})


def load_videos(request):
    if request.method == "POST":
        ending_index = int(request.POST.get("ending_index"))

        videos = VideoLinks.objects.all()[ending_index : ending_index + VIDEOS_COUNT]

        videos_list = [
            f"https://www.youtube.com/embed/{extract_youtube_video_id(video.link)}"
            for video in videos
        ]
        videos_list = json.dumps(videos_list)

        final_videos = len(videos) < VIDEOS_COUNT

        return JsonResponse({"finalvideos": final_videos, "videos": videos_list})


def certificate(request):
    return render(request, "certificate.html")
