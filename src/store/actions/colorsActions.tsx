import {CHANGE_MODE, ColorActionsType} from '../types';

export function changeMode(payload: 'light' | 'dark'): ColorActionsType {
  return {type: CHANGE_MODE, payload};
}
