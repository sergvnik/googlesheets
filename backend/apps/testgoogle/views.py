from rest_framework.permissions import AllowAny
from rest_framework import status, viewsets, filters
from rest_framework.response import Response
from .serializers import GooglesheetSerializer
from .models import Googlesheet

class CreateListModelMixin(object):
    def create(self, request, *args, **kwargs):
        data = request.data
        if isinstance(data, list):
            serializer = self.get_serializer(data=request.data, many=True)
        else:
            serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class GooglesheetView(CreateListModelMixin, viewsets.ModelViewSet):
    queryset = Googlesheet.objects.all()
    serializer_class = GooglesheetSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('nomer', )

