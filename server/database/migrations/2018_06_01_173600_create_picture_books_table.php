<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePictureBooksTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('picture_books', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title');
      $table->string('authors')->nullable();
      $table->string('publisher')->nullable();
      $table->string('year_of_publishing')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('picture_books');
  }
}
