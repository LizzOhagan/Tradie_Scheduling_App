FROM node:16-alpine3.11
WORKDIR /app
COPY . /app/
EXPOSE 3000
RUN ["npm", "install"] 
ENTRYPOINT [ "npm", "start" ] 