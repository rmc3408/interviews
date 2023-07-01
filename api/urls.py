from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('empresas/', views.getEmpresas, name='empresas'),
    path('empresas/create', views.createEmpresa, name='createEmpresa'),
    path('empresas/delete/<str:id>', views.deleteEmpresa, name='deleteEmpresa'),
    path('empresas/update/<str:id>', views.updateEmpresa, name='updateEmpresa'),
    path('empresas/<str:id>', views.getEmpresaNome, name='companyName'),

    path('empregados/', views.getEmpregados, name='empregados'),
    path('empregados/empresa/<str:id>', views.getEmpregadosByEmpresa, name='empregados-empresa'),   
    path('empregados/create', views.createEmpregado, name='createEmpregado'),
    path('empregados/delete/<str:id>', views.deleteEmpregado, name='deleteEmpregado'),
    path('empregados/update/<str:id>', views.updateEmpregado, name='updateEmpregado'),
    path('empregados/<str:id>', views.getEmpregado, name='empregado'),

    path('user/<str:id>', views.getUser, name='user'),
]