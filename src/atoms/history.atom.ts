import { atom } from 'recoil';
import { IDataItem } from '../data';

const historyState = atom<IDataItem[]>({
  key: 'historyState', // unique ID (with respect to other atoms/selectors)
  default: [], // valeur par défaut (alias valeur initials)
});

export default historyState;
