To Run:-

Frontend:-

```bash
npm install

npm start
```

Backend:-

```bash
# set env variable
export APP_SETTINGS="config.DevelopmentConfig"
export DATABASE_URL="postgresql://user:password@localhost:5432/devbootcamp"
export SECRET_KEY="004f2af45d3a4e161a7dd2d17fdae47f"
export STRIPE_PUBLISHABLE_KEY=""
export STRIPE_SECRET_KEY=""
export SECURITY_PASSWORD_SALT="my_precious_two"
export APP_MAIL_USERNAME=""
export APP_MAIL_PASSWORD=""
export APP_MAIL_ID=""
 
```



```bash
python -m venv venv
pip install -r requirements.txt
python manage.py db init 
python manage.py db migrate
python manage.py runserver
```

