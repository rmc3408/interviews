from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [

    # AUTH
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # EMPRESAS AND EMGREGADOS APP 
    path('api/', include('api.urls'), name='api'),

    # USER ADMIN
    path('admin/', admin.site.urls),
]
