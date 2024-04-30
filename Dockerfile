# Используем официальный образ Node.js в качестве основы
FROM node:14-alpine as builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
COPY ./frontend/package*.json ./
RUN npm install

# Копируем остальные файлы проекта
COPY ./frontend .

# Собираем проект React
RUN npm run build

# Используем легковесный образ nginx для запуска фронтенда
FROM nginx:alpine

# Копируем собранные файлы React из предыдущего этапа в директорию, которую будет обслуживать nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Указываем порт, который будет использоваться приложением внутри контейнера
EXPOSE 80

# Команда, которая будет выполняться при запуске контейнера
CMD ["nginx", "-g", "daemon off;"]