# My Personal Finances App
The following project has been developed for Alkemy Acceleration in ReactJS + NodeJS stack. It was a technical challenge for the selection process and its an app about registering and managing your own personal finances. It has been developed with the **#PERN** stack which stands for: *PostgreSQL*, *Express.JS*, *React/Redux* & *Node.JS*.

## Getting Started
For running the project you will need to clone the repository locally on your own computer. Besides that you must have *Node.JS* **and** *PostgreSQL* installed on the same computer too. Once you have all of those points covered you only have to follow six simple steps:
<ul>
  <li>Open a <strong>psql</strong> terminal and create a new database called: <i>personal_finances</i>.</li>
  <li>Open <strong>/api</strong> directory inside the project's directory and create a new <strong>.env</strong> file.</li>
  <li>Inside your recently created <strong>.env</strong> file type three (3) <i>environment</i> variables: <i>DB_USER</i>, <i>DB_PASSWORD</i> & </i>DB_HOST</i>; fill them equal to your <strong>psql</strong> user and password, finally set the host equal to <strong>localhost</strong>.</li>
  <li>Get into <strong>/client</strong> directory inside the project's directory with a terminal and run <strong>npm install</strong> command.</li>
  <li>Get into <strong>/api</strong> directory inside the project's directory with a terminal and run <strong>npm install</strong> command.</li>
  <li>Wait until the installation finishes and then run <strong>npm start</strong> in both terminals to rise the <strong>client server</strong> and the <strong>API REST</strong>.</li>
  <li>All finish! Now wait until your computer rises the <i>client</i> and <i>server</i> then you are ready to give some use to the project and best part all the data you entry will be saved on your local database.</li>
</ul>

## About
The project features a very simple and easy to use system of "entries" for registering personal expenses and finances in general. The *landing page* leads to the **current balance** state produced between all the created entries and a register of the ten **most recent** entries registered as their filled date and not chronologically. This means the system will calculate the for the display the ten most recent dates which were filled on the **entry form** and not that were **chronologically registered** into the database. In other words: it will handle the *date value* of the entry and not the *time stamp*. Also this implies it doesn't take in count entry **editing** dates.

Following the *landing page* comes the *operations page*, last of the project, which is the page where you can see more deeply all the information stored in the **database**. The database information divides in two: *entries* and *categories*. The first one, been the main one, has an **entry form** which is the main feature of the project allowing you to register each financial personal movement so you can easily keep track of your money. It considers the basic information: **reason**, **amount**, **date**, **type** and associated **categories**. However there are only two essential values with which you can already register your entry without suffering a rejection from the *server-side* of the project. These two values are: **amount** and **type**. Basically how much money did you move and in which sense: *adition* or *extraction*. This is because it's the minimum necessary information for a logical entry which makes sense.

## Development Notes
The project presents clean and clear code been developed under the best possible practices and in continuos improvement as I (the developer) improve and learn new and better ways to make the code even clearer and scalable.

I consider the current state of it on a very good point, with clear functioning from each of it's parts and block of codes but at the same time showing itself very robust and scalable for improving and new features such the most needed and key one for deployment: **user registration**.

### Highlights
The most strong pillars from each side of the full project would probably be: the *tailwindcss* usage for the **front-end** and the *backend architecture* for the **API REST**. For the *client server* I must clarify it was my first time using tailwind and the experience has been great, it provides all it promise and made easy and practic it's usage. Meanwhile for the *API REST* I highlight the **backend design** as it was the phase of development from which I learnt most in this project, dividing the layers in *DAO's* and *Services* while combining this with the already known *controllers* and **middlewares** I think helps a lot and adds a lot of scaling potential to my code-practice from the server side of any app. Making specially clear each function and code block on the **/api** directory.

### Weaknesses
There are four main *already detected* weaknesses and even issues on the project. Two are from the *client server*, one is general to the project and the last is from the *API*. The front-end ones are pretty simple and solvable: messages display for form validation isn't developed by this time. Then the last two are pretty related: the server doesn't handle as sharp and good as it can the **responses** when petitions are made. By this time it answers either with the required information as the consulted **end point** or with a *string* and the **client** handles this response based on if it receives either an **array** or a **string**.

Needless to clarify: these weeaknesses are been solved in the moment.

## Deployment
The deployment process will be done between <a href="https://vercel.com/">Vercel</a> & <a href="https://www.heroku.com/">Heroku</a> for the *front-end* and the *back-end* respectively.

Althought the **deployment** isn't scheduled yet as in first place a **users sign up & sign in** feature must be develop or it's pointless. And for this the above weaknesses mentioned must be solved.
