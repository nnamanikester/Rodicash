/* global it */

export const itIf = (condition: boolean) => (condition ? it : it.skip);
