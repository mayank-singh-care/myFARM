import { sample } from 'lodash';
// import { en_IN, Faker } from '@faker-js/faker';
import { fakerEN_IN as faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

// export const faker = new Faker({
//   locale: [en_IN],
// });

export const users = [...Array(10)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName({ sex: 'Male' }),
  state: sample([
    'Andhra Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Haryana',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Punjab',
    'Rajasthan',
    'Tamil Nadu',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Planting Labor',
    'Weeding Labor',
    'Irrigation Labor',
    'Fertilization Labor',
    'Harvesting Labor',
    'Livestock Caretaker',
    'Dairy Worker',
    'Beekeeper',
    'Tractor Driver',
  ]),
}));
