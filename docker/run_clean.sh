docker-compose down --volumes --remove-orphans
docker-rmi $(docker images -q) -f
docker-compose build --no-cache
docker-compose up