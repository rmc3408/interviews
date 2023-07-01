from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Empresa, Empregado
from .serializers import EmpresaSerializer, EmpregadoSerializer, EmpregadoCompanyInfoSerializer, EmpresaNomeSerializer, UserSerializer
from rest_framework import status
from django.contrib.auth.models import User


############################
#   USER VIEWS ACCESS ENDPOINTS - GET
############################

@api_view(['GET'])
def getUser(request, id):
    user = User.objects.get(id=id)
    serialized = UserSerializer(user)
    return Response(serialized.data)


############################
# EMPRESA VIEWS ACCESS ENDPOINTS - CRUD
############################

@api_view(['GET'])
def getEmpresas(request):
    empresa = Empresa.objects.all()
    serializer = EmpresaSerializer(empresa, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getEmpresaNome(request, id):
    nome = Empresa.objects.get(id=id)
    serializer = EmpresaNomeSerializer(nome, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def createEmpresa(request):
    data = request.data
    novaEmpresa = Empresa.objects.create(nome=data['nome'])
    serialized = EmpresaSerializer(instance=novaEmpresa, many=False)
    return Response(serialized.data)


@api_view(['DELETE'])
def deleteEmpresa(request, id):
    empresa = Empresa.objects.get(id=id)
    empresa.delete()
    return Response(f'Company deleted with id = {id}', status=status.HTTP_205_RESET_CONTENT)


@api_view(['PUT'])
def updateEmpresa(request, id):
    data = request.data
    empresa = Empresa.objects.get(id=id)
    print(empresa)
    serialized = EmpresaNomeSerializer(instance=empresa, data=data, many=False)

    if serialized.is_valid():
        serialized.save()
    
    return Response(serialized.data)


############################
# EMPREGADO VIEWS ACCESS ENDPOINTS - CRUD
############################

@api_view(['GET'])
def getEmpregados(request):
    empregado = Empregado.objects.all()
    serializer = EmpregadoSerializer(empregado, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getEmpregadosByEmpresa(request, id):
    empregado = Empregado.objects.filter(company=id)
    serializer = EmpregadoSerializer(empregado, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getEmpregado(request, id):
    empregado = Empregado.objects.get(id=id)
    serializer = EmpregadoCompanyInfoSerializer(empregado, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateEmpregado(request, id):
    data = request.data
    empregado = Empregado.objects.get(id=id)
    serialized = EmpregadoSerializer(empregado, data=data)

    if serialized.is_valid():
        serialized.save()
    return Response(serialized.data)


@api_view(['DELETE'])
def deleteEmpregado(request, id):
    empregado = Empregado.objects.get(id=id)
    empregado.delete()
    return Response(f'Company deleted with id = {id}', status=status.HTTP_205_RESET_CONTENT)


@api_view(['POST'])
def createEmpregado(request):
    serialized = EmpregadoSerializer(data=request.data, many=False)

    if (serialized.is_valid()):
        serialized.save()
        return Response(serialized.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)
    