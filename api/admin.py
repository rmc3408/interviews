from django.contrib import admin
from .models import Note, Empresa, Empregado


class NoteAdmin(admin.ModelAdmin):
    pass


admin.site.register(Note, NoteAdmin)
admin.site.register(Empresa)
admin.site.register(Empregado)