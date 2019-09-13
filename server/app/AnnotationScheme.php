<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AnnotationScheme extends Model
{
  protected $fillable = [
    'title',
    'description',
    'blue',
    'green',
    'red',
    'aqua',
    'pink',
    'yellow',
    'orange',
  ];


}
