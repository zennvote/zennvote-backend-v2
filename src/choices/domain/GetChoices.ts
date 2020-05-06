import ChoiceType from '../entity/ChoiceType';
import { getChoice } from '../infrastructure/Choice';

export default (type: ChoiceType) => {
  return getChoice(type);
};
