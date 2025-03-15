sudo docker compose down -v
sudo docker system prune -af
sudo docker volume prune -f
sudo docker compose build --no-cache
sudo docker compose up -d