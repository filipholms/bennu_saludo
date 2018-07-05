# Bennu Saludo

Para correr el proyecto en general:

```bash
$ docker stack deploy bennu -c docker-compose.yml
```

Para correr la imagen del Frontend:

```bash
$ docker build -t front_bennu .
$ docker run --rm -p 3000:3000 front_bennu
```

Para correr la imagen del Backend:

```bash
$ docker build -t backend_farewell .
$ docker run --rm -p 7000:7000 backend_farewell
```