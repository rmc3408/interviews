from .models import Note, Empresa, Empregado
from rest_framework.serializers import ModelSerializer


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class EmpresaSerializer(ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'


class EmpresaNomeSerializer(ModelSerializer):
    class Meta:
        model = Empresa
        fields = ['id', 'nome']


class EmpregadoSerializer(ModelSerializer):
    class Meta:
        model = Empregado
        fields = '__all__'
