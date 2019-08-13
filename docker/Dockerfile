FROM node:12.8.0

USER node:node

COPY --chown=node:node ./package.json ./package-lock.json /usr/local/code/

ENV PATH=$PATH:/usr/local/code/node_modules/.bin/

WORKDIR /usr/local/code/

RUN npm install
