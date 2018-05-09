import {KidModel} from './models/kid.model';

export const resourceToKidMapper = (kid): KidModel => ({
  id: kid.id,
  firstName: kid.first_name,
  lastName: kid.last_name,
});

export const kidToResourceMapper = (kid: KidModel) => ({
  id: kid.id,
  first_name: kid.firstName,
  last_name: kid.lastName,
});
