<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class etkinlik extends Model
{
    protected $fillable = [
        'id', 'name', 'date', 'timestarts','timeends', 'place','subject','category', 'photo'
    ];
}
