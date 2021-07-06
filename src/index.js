import uniqueRandomArray from 'unique-random-array';
import * as starWarsName from './starwars-names.js'

export default {
  all: starWarsName,
  random: uniqueRandomArray(starWarsName)
}
