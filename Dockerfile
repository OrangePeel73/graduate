FROM alpine:3.3

MAINTAINER gezuxia <gezuxia@163.com>

RUN apk add --update nginx && \
    ln -sf /dev/stdout /var/log/nginx/access.log &&\
    ln -sf /dev/stderr /var/log/nginx/error.log &&\
    rm -rf /var/cache/apk/* && \
    chown -R nginx:www-data /var/lib/nginx

EXPOSE 80

# CMD nginx -g 'daemon off;'
CMD ["nginx","-g", "daemon off;"]

COPY /dist /usr/share/nginx/html/