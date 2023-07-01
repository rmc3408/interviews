from .models import Empresa, Empregado
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from django.contrib.auth.models import User

##### User
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'is_staff' ]


###### Empregado - All fields
class EmpregadoSerializer(ModelSerializer):
    
    class Meta:
        model = Empregado
        fields = '__all__'


###### Empresa with Empregados' all fields
class EmpresaSerializer(ModelSerializer):
    person_company = EmpregadoSerializer(many=True)
    
    class Meta:
        model = Empresa
        fields = ['id', 'nome', 'createdAt', 'person_company']

    def create(self, validated_data):
        person_company = validated_data.pop('person_company')
        print(person_company)

        empresa_instance = Empresa.objects.create(**validated_data)
        
        for pc in person_company:
            Empregado.objects.create(company=empresa_instance, **pc)
        
        print(empresa_instance)
        return empresa_instance


### Empresa's Name only
class EmpresaNomeSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Empresa
        fields = ['id', 'nome']


### Empregado with Empresa's all Fields
class EmpregadoCompanyInfoSerializer(ModelSerializer):
    company_info = EmpresaNomeSerializer(source="company", read_only=True)

    class Meta:
        model = Empregado
        fields = ['id', 'nome', 'saida', 'entrada', 'feriasEntrada', 'feriasSaida', 'company', 'company_info']
    