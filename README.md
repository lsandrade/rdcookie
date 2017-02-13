# RDCookie
## A virtual cookie's store
test to software engineer at Resultados Digitais

**Characteristics:**
* Backend in Ruby on Rails
* Front with JQuery and Bootstrap 4 
* Deploy with Heroku
* Tests with Rspec

## Part 1: Getting cookies and sending to API
<p>A customer accesses the site and their navigation information is sent to the backend.
There is a JavaScript library on the site that sends this data: visitor's unique identifier (stored by browser cookies), page accessed,
and datetime of access.</p>
**Files**
```
front/index.html - list of products
front/produto.html - details of product
front/contato.html - contact form
front/obrigado.html - about and thanks page
front/app.js - library sends the browsing data (the library is configured to send data to app deployed at Heroku. You can change to localhost in this file.)
```
You just have to open index.html file in your browser and navigate through the pages

## Part 2 - Backend

**Requirements**
* Ruby
* Rails 4.2.6
* Postgresql

**Database**
<p>Change access credentials</p>
```
config/database.yml
```
**Installing**
```
cd rdcookie
bundle install
rake db:create db:migrate
```

**Testing**
```
rake db:migrate RAILS_ENV=test
rake spec
```

**Running**
```
rails server
```
By default will run at http://localhost:3000
