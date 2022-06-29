from rest_framework.generics import ListAPIView
from .models import CourseDirection, CourseCategory
from .serializers import CourseDirectionModelSerializer, CourseCategoryModelSerializer


# Create your views here.
class CourseDirectionListAPIView(ListAPIView):
    """学习方向"""
    queryset = CourseDirection.objects.filter(is_show=True, is_deleted=False).order_by("orders","-id")
    serializer_class = CourseDirectionModelSerializer


class CourseCategoryListAPIView(ListAPIView):
    """学习分类"""
    queryset = CourseCategory.objects.filter(is_show=True, is_deleted=False).order_by("orders","-id")
    serializer_class = CourseCategoryModelSerializer
    pagination_class = None
