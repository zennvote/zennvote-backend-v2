import ChoiceType from '../entity/ChoiceType';
import GetChoicesDomain from '../domain/GetChoices';

export const GetChoices = async (type: ChoiceType) => {
  const choices = await GetChoicesDomain(type);

  if (choices === null) {
    throw new Error(GetChoicesError.NO_CHOICE);
  }

  return choices;
};

export enum GetChoicesError {
  NO_CHOICE = 'no-choice',
}
