declare class Config<C extends {}> {
  file: string;

  config: C;

  constructor (file: string, defaults: C): void;

  write (): void;

  read (): void;

  valueOf (): C;
}

export default Config;
