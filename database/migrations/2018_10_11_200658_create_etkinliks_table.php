<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEtkinliksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('etkinliks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('date');
            $table->string('timestarts');
            $table->string('timeends');
            $table->string('place');
            $table->mediumText('subject');
            $table->string("category");
            $table->string('passed')->default('false');
            $table->string('photo')->default('profile.png');
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
        Schema::dropIfExists('etkinliks');
    }
}
