import { Medium } from '../core';

export const buildMediumFromDrive = (data) => new Medium(data.id, data.url, 'drive', [])
