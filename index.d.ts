declare class Config<C extends {}> {
  file: string;

  config: C;

  static use<C> (file: string, defaults: C): C;

  constructor (file: string, defaults: C): void;

  write (): void;

  read (): void;

  valueOf (): C;
}

export default Config;
