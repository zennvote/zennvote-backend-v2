import ProducerType from './ProducerType';
import Episode from './Episode';

export default interface Producer {
  name: string;
  type: ProducerType;
  episodes: Episode[];
}
