from rest_framework import viewsets
from .serializers import TodoSerializer
from ..models import MyTodoList

class TodoListViewSet(viewsets.ModelViewSet):
    queryset = MyTodoList.objects.all()
    serializer_class = TodoSerializer
