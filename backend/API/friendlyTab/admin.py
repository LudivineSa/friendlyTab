from django.contrib import admin
from .models import User, Paypal, Debts

admin.site.register(User)
admin.site.register(Paypal)
admin.site.register(Debts)
# Register your models here.
