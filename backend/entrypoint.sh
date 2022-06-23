#!/bin/sh
until python manage.py migrate --noinput
do
    echo "Waiting for db to be ready..."
    sleep 2
done

python manage.py collectstatic --noinput
python gettable.py
echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'admin')" | python manage.py shell
exec "$@"
