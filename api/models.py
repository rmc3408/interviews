from django.db import models

class Empresa(models.Model):
    nome = models.CharField(max_length=52)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
    

class Empregado(models.Model):
    nome = models.CharField(max_length=52, null=True)
    company = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name='person_company',
                                null=True,blank=True)
    entrada = models.DateField(null=True, blank=True)
    saida = models.DateField(null=True, blank=True)
    feriasEntrada = models.DateField(null=True, blank=True)
    feriasSaida = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.nome