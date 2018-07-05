FROM tomcat:8.0.20-jre8
COPY tomcat-users.xml /usr/local/tomcat/conf/
COPY server.xml /usr/local/tomcat/conf/server.xml
RUN ["rm", "-fr", "/usr/local/tomcat/webapps/ROOT"]
ADD Farewell.war /usr/local/tomcat/webapps/
CMD ["catalina.sh","run"]