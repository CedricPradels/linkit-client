export const getRandom = <T extends any>(tab: T[]): T =>
  tab[Math.floor(Math.random() * tab.length)];

export const toggle = (x: boolean): boolean => !x;

export const sum = (x: number) => (y: number) => x + y;

export const inc = sum(1);

export const noOp = () => undefined;
