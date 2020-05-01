import ChoiceType from '../entity/ChoiceType';

import { ChoiceModel } from './ChoiceDB.model';

export const getChoice = async (type: ChoiceType) => {
  const choice = await ChoiceModel.findOne({ name: type as string });

  return choice?.datas ?? null;
};
