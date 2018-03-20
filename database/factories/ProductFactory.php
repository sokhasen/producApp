<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        "name" => $faker->word,
        "price" => $faker->randomFloat(NULL, 10, 50),
        "amount" => $faker->numberBetween(1, 50),
        "code" => $faker->numberBetween(1000, 5000),
        "image" => $faker->imageUrl(640, 480),
        "is_deleted" => false,

    ];
});
