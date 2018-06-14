<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kid extends Model
{
  protected $table = 'kids';

  protected $fillable = [
    'first_name',
    'last_name',
    'year_of_birth',
    'city_of_birth',
    'state_of_birth',
    'gender',
    'education_mother',
    'education_father'
  ];

}
