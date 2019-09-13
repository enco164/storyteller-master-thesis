<?php

use Illuminate\Database\Seeder;
use \App\AnnotationScheme;

class AnnotationSchemeTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    AnnotationScheme::truncate();

    $faker = \Faker\Factory::create();

    // And now, let's create a few articles in our database:
    for ($i = 0; $i < 50; $i++) {
      AnnotationScheme::create([
        'title' => implode(" ", $faker->words),
        'description' => $faker->sentence,
        'blue' => $faker->word,
        'green' => $faker->word,
        'red' => $faker->word,
        'aqua' => $faker->word,
        'pink' => $faker->word,
        'yellow' => $faker->word,
        'orange' => $faker->word,
      ]);
    }
  }
}
