<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScenesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('scenes', function (Blueprint $table) {
      $table->increments('id');

      $table->string('scene_url');
      $table->integer('scene_number');
      $table->string('title')->nullable();

      $table->unsignedInteger('picture_book_id');
      $table->foreign('picture_book_id')->references('id')->on('picture_books')->onDelete('cascade');

      $table->unsignedInteger('picture_id');
      $table->foreign('picture_id')->references('id')->on('media')->onDelete('cascade');

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
    Schema::dropIfExists('scenes');
  }
}
