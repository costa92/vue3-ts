FROM nginx:alpine as production
# 后端 API 端口
ENV SERVER_PORT 8080
# websocket 服务端口
ENV WS_PORT 8081

COPY  ./dist /usr/share/nginx/html
COPY ./default.conf.template /etc/nginx/templates/

EXPOSE 80