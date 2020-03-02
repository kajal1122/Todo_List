from django.db import models
from django.db.models import Model

# Create your models here.
class MyTodoList(models.Model):
    date_time = models.DateTimeField(auto_now_add=True)
    todo = models.TextField(max_length=200)
    complete = models.BooleanField(default=False)

    def __str__(self):
        return self.todo
