from rest_framework import viewsets

from .models import Question
from .serializers import QuestionSerializer

# Create your views here.
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer