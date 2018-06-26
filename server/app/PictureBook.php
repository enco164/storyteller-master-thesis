<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\PictureBook
 *
 * @property int $id
 * @property string $title
 * @property string|null $authors
 * @property string|null $publisher
 * @property string|null $year_of_publishing
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scene[] $scenes
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PictureBook whereAuthors($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PictureBook whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PictureBook whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PictureBook wherePublisher($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PictureBook whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PictureBook whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PictureBook whereYearOfPublishing($value)
 * @mixin \Eloquent
 */
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
