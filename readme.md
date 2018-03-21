<p align="center"><img width="150px" src="http://creative-punch.net/wp-content/uploads/2014/01/Angular_Laravel.jpg"></p>
<p align="center">By : <strong>Sokha Sen</strong></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## How to install
- [``` git clone https://github.com/sokhasen/producApp.git ```]
- [``` cd ng5-laravel5.5-starter ```]
- [``` composer install ```]
- copy [``` .env.example ```] to [``` .env ```] file
- [``` php artisan key:generate ```]
- [``` npm install ```]
- [``` ng build ``` or ``` ng build -w```]
- [``` php artisan serve ```]
- [ See on : http://localhost:8000/]


## Where Angular App
 ```
  |---ng5-laravel5.5-starter
  |   |---app
  |   |---databases
  |   |---public
  |   |   |---js
  |   |   |---css
  |   |   |---dist <-- ( ## here is your production )
  |   |   |---index.php
  |   |---resources
  |   |   |---assets
  |   |   |   |---js
  |   |   |   |---sass
  |   |   |   |---src <-- ( ## Angular app here )
  |   |   |   
  |   |   |---lang
  |   |   |---view
  |   |       |---index.blade.php <-- ( ## root directive app and build bundle js are here )
  |   |      
  |   |---routes
  |   |---vendor
  |   |---.env
  |   |---package.json      <-- ( ## Angular Devdependcies )
  |   |---tsconfig.json     <-- ( ## Typescript configuration )
  |   |---tslint.json       <-- ( ## extensible static analysis tool for typescript )
  |   |---.angular-cli.json <-- ( ## angular cli generate dev eg. ```ng g component my-new-components``` )
  |   |---webpack.mix.js
  |
 ```


## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, yet powerful, providing tools needed for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of any modern web application framework, making it a breeze to get started learning the framework.

If you're not in the mood to read, [Laracasts](https://laracasts.com) contains over 1100 video tutorials on a range of topics including Laravel, modern PHP, unit testing, JavaScript, and more. Boost the skill level of yourself and your entire team by digging into our comprehensive video library.

 

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
