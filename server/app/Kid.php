<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Kid
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string|null $year_of_birth
 * @property string|null $city_of_birth
 * @property string|null $state_of_birth
 * @property string|null $gender
 * @property string|null $education_mother
 * @property string|null $education_father
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereCityOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereEducationFather($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereEducationMother($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereStateOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Kid whereYearOfBirth($value)
 * @mixin \Eloquent
 */
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
