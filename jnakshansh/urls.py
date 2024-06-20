from django.urls import path
from jnakshansh import views
from .views import successView

urlpatterns = [
    path('', views.jnakshansh, name='jnakshansh'),
    path('success/', successView, name='success'),
    # path('download/', pdf_download, name='pdf_download')
]