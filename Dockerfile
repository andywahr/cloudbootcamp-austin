FROM node:10-alpine
EXPOSE 80
WORKDIR /app
COPY . .
RUN npm install
ENV PORT 80
CMD node app.js