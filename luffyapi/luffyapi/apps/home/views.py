from django.shortcuts import render

# Create your views here.
import constants
from rest_framework.generics import ListAPIView
from .models import Nav, Banner
from .serializers import NavModelSerializer, BannerModelSerializer

"""
注意 如果要使用视图缓存
继承一下 utils里面的view_cache里面的类
"""


class NavHeaderListAPIView(ListAPIView):
    """顶部导航视图"""
    queryset = Nav.objects.filter(position=constants.NAV_HEADER_POSITION, is_show=True, is_deleted=False).order_by(
        "orders", "-id")[:constants.NAV_HEADER_SIZE]
    serializer_class = NavModelSerializer


class NavFooterListAPIView(ListAPIView):
    """脚部导航视图"""
    queryset = Nav.objects.filter(position=constants.NAV_FOOTER_POSITION, is_show=True, is_deleted=False).order_by(
        "orders", "-id")[:constants.NAV_FOOTER_SIZE]
    serializer_class = NavModelSerializer


class BannerListAPIView(ListAPIView):
    """轮播广告视图"""
    queryset = Banner.objects.filter(is_show=True, is_deleted=False).order_by("orders", "-id")[:constants.BANNER_SIZE]
    serializer_class = BannerModelSerializer
