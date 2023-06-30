from django.db import models

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updatedAt = models.DateTimeField(auto_now=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]
    

class Empresa(models.Model):
    nome = models.CharField(max_length=52)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
    

class Empregado(models.Model):
    nome = models.CharField(max_length=52, null=True)
    company = models.ForeignKey(Empresa, on_delete=models.SET_NULL, null=True)
    entrada = models.DateField()
    saida = models.DateField()
    feriasEntrada = models.DateField(null=True, blank=True)
    feriasSaida = models.DateField(null=True, blank=True)


    def __str__(self):
        return self.nome