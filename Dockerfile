FROM node
WORKDIR /workspaces/project-orion/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]