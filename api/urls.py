from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('empresas/', views.getEmpresas, name='empresas'),
    path('empresas/create', views.createEmpresa, name='create'),
    path('empresas/delete/<str:id>', views.deleteEmpresa, name='delete'),
    path('empresas/update/<str:id>', views.updateEmpresa, name='update'),
    path('empresas/<str:id>', views.getEmpresaNome, name='companyName'),

    path('empregados/', views.getEmpregados, name='empregados'),
    path('empregados/empresa/<str:id>', views.getEmpregadosByEmpresa, name='empregados-empresa'),
    path('empregados/<str:id>', views.getEmpregado, name='empregado'),
    # path('notes/create', views.createNote, name='create'),
    # path('notes/delete/<str:id>', views.deleteNote, name='delete'),
    # path('notes/update/<str:id>', views.updateNote, name='update'),
    # path('notes/<str:id>', views.getNote, name='note'),
]