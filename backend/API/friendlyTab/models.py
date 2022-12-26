from django.db import models

# Create your models here.

class User(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=100)
    discord = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return self.firstname + ' ' + self.lastname

class Paypal(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Debts(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=1000, blank=True)
    amount = models.CharField(max_length=15)
    creditor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='creditor')
    debtor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='debtor')

    def __str__(self):
        return self.name