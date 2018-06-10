<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PictureBook extends Model
{
    public function scenes() {
        return $this->hasMany('App\Scene');
    }
}
