<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->increments('id');

            $table->date('date_of_session');
            $table->timestamps();

            $table->unsignedInteger('kid_id');
            $table->foreign('kid_id')->references('id')->on('kids');

            $table->unsignedInteger('picture_book_id');
            $table->foreign('picture_book_id')->references('id')->on('picture_books');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
}
