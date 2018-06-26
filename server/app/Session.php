<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Session
 *
 * @property-read \App\Kid $kid
 * @property-read \App\PictureBook $pictureBook
 * @mixin \Eloquent
 */
class Session extends Model
{
    protected $fillable = [
        'date_of_session'
    ];

    public function pictureBook() {
        return $this->belongsTo('App\PictureBook');
    }

    public function kid() {
        return $this->belongsTo('App\Kid');
    }
}
