# # pull official base image
# FROM python:3.9.5-slim-buster

# # set work directory
# WORKDIR /usr/src/app

# # set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1
# ENV APP_SETTINGS "config.DevelopmentConfig"
# ENV DATABASE_URL "postgresql://freakstar03:password@db:5432/devbootcamp"
# ENV SECRET_KEY "004f2af45d3a4e161a7dd2d17fdae47f"

# # install dependencies
# RUN pip install --upgrade pip
# COPY ./requirements.txt /usr/src/app/requirements.txt
# RUN pip install -r requirements.txt

# # copy project
# COPY . /usr/src/app/



# pull official base image
FROM python:3.9.5-slim-buster

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
RUN addgroup --system nginx && adduser --system --group nginx

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
ENV APP_SETTINGS "config.DevelopmentConfig"
ENV DATABASE_URL "postgresql://freakstar03:password@db:5432/devbootcamp"
ENV SECRET_KEY "004f2af45d3a4e161a7dd2d17fdae47f"
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# install dependencies
# RUN apt-get update && apt-get install -y --no-install-recommends netcat
# COPY --from=builder /usr/src/app/wheels /wheels
# COPY --from=builder /usr/src/app/requirements.txt .
# RUN pip install --upgrade pip
# RUN pip install --no-cache /wheels/*

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r /usr/src/app/requirements.txt

# copy entrypoint-prod.sh
COPY ./entrypoint.prod.sh $APP_HOME

# copy project
COPY . $APP_HOME

# chown all the files to the app user
RUN chown -R nginx:nginx $APP_HOME

# change to the app user
USER nginx

# run entrypoint.prod.sh
ENTRYPOINT ["/home/app/web/entrypoint.prod.sh"]