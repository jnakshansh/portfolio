from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from .forms import ContactForm
from sendgrid import SendGridAPIClient
import os
from django.conf import settings
import sendgrid
from wsgiref.util import FileWrapper

# Create your views here.
def jnakshansh(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            mail_subject=form.cleaned_data['subject']
            from_email=form.cleaned_data['email']
            message=form.cleaned_data['message']
            to_email='jnakshansh@gmail.com'
            mess = {
    'personalizations': [
        {
            'to': [
                {
                    'email': to_email
                }
            ],
            'subject': mail_subject
        }
    ],
    'from': {
        'email': from_email
    },
    'content': [
        {
            'type': 'text/plain',
            'value': message
        }
    ]
}

            

            try:
                send_mail(mail_subject, message, from_email, ['jnakshansh@gmail.com'])
                sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
                response = sg.send(mess)
                print(response.status_code)
                print(response.body)
                print(response.headers)
                
                
            except Exception as e:
                print(str(e))  
            except BadHeaderError:
                return HttpResponse('Invalid Header found')
            return redirect('success')
    return render(request, "jnakshansh.html", {'form': form})

def successView(request):
    return HttpResponse('Success! Thank you for your message.')

# def pdf_download(request):
#     path = os.path.expanduser('static/pdf/')
#     filename="Akshansh_Resume.pdf"
#     f = open(path+filename,encoding='utf-8',errors='ignore')
#     response = HttpResponse(FileWrapper(f), content_type='application/force-download')
#     response['Content-Disposition'] = 'attachment; filename=Akshansh_Resume.pdf'
#     f.close()
#     return response