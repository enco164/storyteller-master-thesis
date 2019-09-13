<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnnotationSchemesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('annotation_schemes', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title');
      $table->string('description');
      $table->string('blue');
      $table->string('green');
      $table->string('red');
      $table->string('aqua');
      $table->string('pink');
      $table->string('yellow');
      $table->string('orange');
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
    Schema::dropIfExists('annotation_schemes');
  }
}
