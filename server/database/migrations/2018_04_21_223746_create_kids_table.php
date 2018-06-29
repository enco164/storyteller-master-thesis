<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKidsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('kids', function (Blueprint $table) {
      $table->increments('id');

      $table->string('first_name');
      $table->string('last_name');
      $table->integer('year_of_birth')->nullable();
      $table->string('city_of_birth')->nullable();
      $table->string('state_of_birth')->nullable();
      $table->char('gender', 1)->nullable();
      $table->string('education_mother')->nullable();
      $table->string('education_father')->nullable();

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
    Schema::dropIfExists('kids');
  }
}
