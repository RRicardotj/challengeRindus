import { faker } from '@faker-js/faker';

export default function generateFakeImagePosts() {
  return faker.image.avatar();
}
