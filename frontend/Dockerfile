FROM node:16

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

RUN mkdir /react_native_app && chown node:node /react_native_app

WORKDIR /react_native_app

ENV PATH /react_native_app/.bin:$PATH
# USER node

COPY ./package.json ./package-lock.json ./
RUN npm install


WORKDIR /react_native_app/
COPY . .

RUN npx expo export:web

ENTRYPOINT ["npx", "serve", "web-build"]
