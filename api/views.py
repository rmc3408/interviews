from rest_framework.response import Response
from rest_framework.decorators import api_view
from .tests import mockRoutes
from .models import Empresa, Empregado
from .serializers import EmpresaSerializer, EmpregadoSerializer, EmpregadoSemCompanySerializer, EmpresaNomeSerializer
from datetime import date
from rest_framework import status


############################
# EMPRESA ENDPOINTS - CRUD
############################

@api_view(['GET'])
def getRoutes(request):
    return Response(mockRoutes)


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
    return Response('Company deleted with {{id}}')


@api_view(['PUT'])
def updateEmpresa(request, id):
    data = request.data
    empresa = Empresa.objects.get(id=id)
    serialized = EmpresaSerializer(instance=empresa, data=data)

    if serialized.is_valid():
        serialized.save()
    
    return Response(serialized.data)



############################
# EMPREGADO ENDPOINTS - CRUD
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
    serializer = EmpregadoSerializer(empregado, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateEmpregado(request, id):
    data = request.data
    empregado = Empregado.objects.get(id=id)
    serialized = EmpregadoSerializer(instance=empregado, data=data)

    if serialized.is_valid():
        serialized.save()
    
    return Response(serialized.data)


@api_view(['DELETE'])
def deleteEmpregado(request, id):
    empregado = Empregado.objects.get(id=id)
    empregado.delete()
    return Response('Company deleted with {{id}}')


@api_view(['POST'])
def createEmpregado(request):
    companyFound = Empresa.objects.get(id=request.data['company'])
    novaEmpresa = Empregado.objects.create(
        nome=request.data['nome'],
        company=companyFound,
        saida=request.data['saida'],
        entrada=request.data['entrada'],
        feriasEntrada=request.data['feriasEntrada'],
        feriasSaida=request.data['feriasSaida'],
    )
    serialized = EmpregadoSemCompanySerializer(instance=novaEmpresa, data=request.data, many=False)

    if (serialized.is_valid()):
        serialized.save()
        return Response(serialized.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)