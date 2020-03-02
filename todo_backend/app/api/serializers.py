from rest_framework import serializers
from ..models import MyTodoList


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyTodoList
        fields = '__all__'
