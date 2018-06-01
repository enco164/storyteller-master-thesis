<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Scene extends Model
{
  public function pictureBook() {
    return $this->belongsTo('App\PictureBook');
  }

  public function picture() {
    return $this->hasOne('App\Media');
  }
}
