FROM node:16-alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public
ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js jsconfig.json lint-staged.config.js vue.config.js ./

CMD [ "npm", "run", "serve" ]
