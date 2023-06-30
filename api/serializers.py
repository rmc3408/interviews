from .models import Empresa, Empregado
from rest_framework.serializers import ModelSerializer


class EmpresaSerializer(ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'


class EmpresaNomeSerializer(ModelSerializer):
    class Meta:
        model = Empresa
        fields = ['id', 'nome']


class EmpregadoSemCompanySerializer(ModelSerializer):
    class Meta:
        model = Empregado
        fields = ['id', 'nome', 'entrada', 'saida', 'feriasEntrada', 'feriasSaida']


class EmpregadoSerializer(ModelSerializer):
    company = EmpresaSerializer()
    
    class Meta:
        model = Empregado
        fields = '__all__'


