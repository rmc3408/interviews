# Ntt-data Challenge

This is a challenge provided by Marina by NTT-data 

It tooks me 11 hours and 12 min

### 🕒 Commits Timeline:**  \
10:30 hours - 11:12 - Finished Design, Testing for callback or memonizied functions, Docker, cleaning code \
7 hours - 10 hours and 30min - Creating container, Input autocomplete with Redux RTK, Adusting to Mobile and Desktop \
4 hour - 6hours and 45 min - Install React, Redux, create store and slices. Clean archtecture, Create based components and input autocomplete \
1 hour - 4:30 hour - Built backend, Movie modules, Http module, DTO and interceptors \
0 - 1 hour - Create repo and react app, Install packages, create archicteture and folder struture  

### 🐛 Known Bugs 😔
1. Some bugs are cause by UI5-component library when switch between mobile and Desktop. 
2. Button and Input contains a blue color on active focus.

### 🙂 Alternatives to run application
1) Run local via yarn start  
2) Run local via docker-compose up

#### Alternative 1

1.1. Clone the repo 

1.2. Inside each directory, Install backend dependencies `yarn install` and FrontEnd with `npm install`

1.3. Starts Locally backend with `yarn run start:dev` and fronend with `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


#### Alternative 2 (via Docker)

1.1. Clone the repo 

1.2. Run `docker-compose up`.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

1.3. to stop and clean, `docker-compose down`


### 📝 TASK

**Assignment:** Criar um SPA que busque informações sobre um título de filme pesquisado

**Background:** A aplicação front-end deverá se comunicar com a aplicação back-end via api, esta por sua vez consumirá o serviço OMDBAPI (mais detalhes a seguir), deverá fazer a tratativa dos dados e retornar ao front um DTO. O front deverá consumir o objeto recebido e exibir na tela de acordo com o wireframe sugerido. 
 
Para isso você deverá criar uma conta para gerar sua ApiKey no seguinte serviço: 
http://www.omdbapi.com/ 


__The solution would preferably be written in:__ \
● NodeJS + Nest + TypeScript; \
● React + Redux \
● Usar UI5 Web Components for React \
● Usar SCSS 


***Submitting the Solution:*** Por fim, versione em um repositório público e nos encaminhe o link. 
