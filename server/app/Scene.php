<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Scene
 *
 * @property int $id
 * @property string $scene_url
 * @property int $scene_number
 * @property string|null $title
 * @property int $picture_book_id
 * @property int $picture_id
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Media $picture
 * @property-read \App\PictureBook $pictureBook
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Scene whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Scene whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Scene wherePictureBookId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Scene wherePictureId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Scene whereSceneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Scene whereSceneUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Scene whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Scene whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Scene extends Model
{
  public function pictureBook() {
    return $this->belongsTo('App\PictureBook');
  }

  public function picture() {
    return $this->hasOne('App\Media');
  }
}
