from django.contrib import admin
from simple_history.admin import SimpleHistoryAdmin
from .models import User

# Register your models here.


admin.site.register(User, SimpleHistoryAdmin)
