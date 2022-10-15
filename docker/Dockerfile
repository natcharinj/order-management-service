# Dockerfile

# https://hub.docker.com/_/microsoft-mssql-server
FROM mcr.microsoft.com/mssql/server:2019-latest
EXPOSE 3309
WORKDIR /app

COPY ./entrypoint.sh ./
COPY ./init-db.sql ./

# https://dbafromthecold.com/2019/11/18/using-volumes-in-sql-server-2019-non-root-containers/
USER root

RUN chmod +x ./entrypoint.sh
RUN mkdir -p /var/opt/mssql-order/data && chown mssql /var/opt/mssql-order/data
RUN mkdir -p /var/opt/mssql-order/log && chown mssql /var/opt/mssql-order/log
RUN mkdir -p /var/opt/mssql-order/backup && chown mssql /var/opt/mssql-order/backup

USER mssql
ENTRYPOINT ["./entrypoint.sh"]