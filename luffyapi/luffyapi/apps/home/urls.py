#! -*- coding:utf-8 -*-
from django.urls import path,re_path
from . import views

urlpatterns = [
    path("nav/header/", views.NavHeaderListAPIView.as_view()),
    path("nav/footer/", views.NavFooterListAPIView.as_view()),
    path("banner/", views.BannerListAPIView.as_view()),
    re_path('^(?P<year>[0-9]{4})/(?P<month>[0-9]{1,2})', views.month_arch, name="tttt")
]
