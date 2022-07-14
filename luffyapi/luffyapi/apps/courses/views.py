from rest_framework.generics import ListAPIView
from rest_framework.filters import OrderingFilter

from .models import CourseDirection, CourseCategory, Course
from .serializers import CourseDirectionModelSerializer, CourseCategoryModelSerializer, CourseInfoModelSerializer
from .paginations import CourseListPageNumberPagination


# Create your views here.
class CourseDirectionListAPIView(ListAPIView):
    """学习方向"""
    queryset = CourseDirection.objects.filter(is_show=True, is_deleted=False).order_by("orders","-id")
    serializer_class = CourseDirectionModelSerializer


class CourseCategoryListAPIView(ListAPIView):
    """学习分类"""
    # queryset = CourseCategory.objects.filter(is_show=True, is_deleted=False).order_by("orders","-id")
    serializer_class = CourseCategoryModelSerializer
    pagination_class = None

    def get_queryset(self):
        # 重写了get_queryset 上边的queryset 就不用写了
        # 类视图中，获取路由参数
        queryset = CourseCategory.objects.filter(is_show=True, is_deleted=False)
        # 如果direction为0，则表示查询所有的课程分类，如果大于0，则表示按学习方向来查找课程分类
        direction = int(self.kwargs.get("direction", 0))
        if direction > 0:
            queryset = queryset.filter(direction=direction)
        return queryset.order_by("orders", "id").all()


# url: /course/学习方向ID/课程分类
# url: /course/P<direction>\d+)/(?P<category>\d+)$/
# url: /course/0/0  # 展示所有的课程列表信息，不区分学习方向和课程分类
# url: /course/1/0  # 展示前端开发学习方向的课程列表信息，不区分课程分类
# url: /course/1/5  # 展示前端开发学习方向下javascript课程分类的课程列表信息
class CourseListAPIView(ListAPIView):
    """课程列表接口"""
    serializer_class = CourseInfoModelSerializer
    filter_backends = [OrderingFilter, ]
    ordering_fields = ['id', 'students', 'orders']
    pagination_class = CourseListPageNumberPagination

    def get_queryset(self):
        queryset = Course.objects.filter(is_deleted=False, is_show=True).order_by("-orders", "-id")
        direction = int(self.kwargs.get("direction", 0))
        category = int(self.kwargs.get("category", 0))
        # 只有在学习方向大于0的情况下才进行学习方向的过滤
        if direction > 0:
            queryset = queryset.filter(direction=direction)

        # 只有在课程分类大于0的情况下才进行课程分类的过滤
        if category > 0:
            queryset = queryset.filter(category=category)

        return queryset.all()


from drf_haystack.viewsets import HaystackViewSet
from drf_haystack.filters import HaystackFilter
from .serializers import CourseIndexHaystackSerializer
from .models import Course


class CourseSearchViewSet(HaystackViewSet):
    """课程信息全文搜索视图类"""
    # 指定本次搜索的最终真实数据的保存模型
    index_models = [Course]
    serializer_class = CourseIndexHaystackSerializer
    filter_backends = [OrderingFilter, HaystackFilter]
    ordering_fields = ('id', 'students', 'orders')
    pagination_class = CourseListPageNumberPagination
