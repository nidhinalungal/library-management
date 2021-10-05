FROM openjdk:8
ADD build/libs/users-0.0.1-SNAPSHOT.jar users-0.0.1-SNAPSHOT.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "users-0.0.1-SNAPSHOT.jar"]


#
# FROM java:8
# VOLUME /tmp
# EXPOSE 8081
# ADD /build/libs/users-0.0.1-SNAPSHOT.jar users-0.0.1-SNAPSHOT.jar
# ENTRYPOINT ["java","-jar","users-0.0.1-SNAPSHOT.jar"]