from .models import Empresa, Empregado
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from django.contrib.auth.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'is_staff']


class EmpregadoSerializer(ModelSerializer):
    
    class Meta:
        model = Empregado
        fields = '__all__'


class EmpresaSerializer(ModelSerializer):
    person_company = EmpregadoSerializer(many=True)
    
    class Meta:
        model = Empresa
        fields = ['id', 'nome', 'person_company']

    def create(self, validated_data):
        person_company = validated_data.pop('person_company')
        print(person_company)

        empresa_instance = Empresa.objects.create(**validated_data)
        
        for pc in person_company:
            Empregado.objects.create(company=empresa_instance, **pc)
        
        print(empresa_instance)
        return empresa_instance


class EmpresaNomeSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Empresa
        fields = ['id', 'nome']


class EmpregadoCompanyInfoSerializer(ModelSerializer):
    company_info = EmpresaNomeSerializer(source="company", read_only=True)

    class Meta:
        model = Empregado
        fields = ['id', 'nome', 'company', 'company_info']
    