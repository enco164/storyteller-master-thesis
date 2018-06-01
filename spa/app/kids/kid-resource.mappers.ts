import {KidModel} from './models/kid';

export const resourceToKidMapper = (kid): KidModel => ({
  id: kid.id,
  firstName: kid.first_name,
  lastName: kid.last_name,
  yearOfBirth: kid.year_of_birth,
  cityOfBirth: kid.city_of_birth,
  stateOfBirth: kid.state_of_birth,
  educationMother: kid.education_mother,
  educationFather: kid.education_father,
});

export const kidToResourceMapper = (kid: KidModel) => ({
  id: kid.id,
  first_name: kid.firstName,
  last_name: kid.lastName,
  year_of_birth: kid.yearOfBirth,
  city_of_birth: kid.cityOfBirth,
  state_of_birth: kid.stateOfBirth,
  education_mother: kid.educationMother,
  education_father: kid.educationFather,
});
