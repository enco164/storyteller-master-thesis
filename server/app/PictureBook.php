<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PictureBook extends Model
{
    protected $fillable = [
        'title',
        'publisher',
        'authors',
        'year_of_publishing',
        'scenes',
    ];

    public function scenes() {
        return $this->hasMany('App\Scene');
    }
}
