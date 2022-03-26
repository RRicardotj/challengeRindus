import { faker } from '@faker-js/faker';

export default function generateFakeAvatar() {
  return faker.image.avatar();
}
