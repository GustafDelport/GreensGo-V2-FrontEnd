FROM node:15.13-alpine
WORKDIR /app
ENV PATH ="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]