from django.urls import include,path
from rest_framework import routers
from .views import TodoListViewSet
router = routers.DefaultRouter()

router.register('list',TodoListViewSet)

urlpatterns = [
    path('',include(router.urls)),
]
