//~> For bare minimum requirement of generic, as generic can be null or anything so not easy to implement
//> we use "extends" hence
interface HasId {
  id: string;
}

interface Dict<T> {
  [k: string]: T;
}

function listToDict<T extends HasId>(list: T[]): Dict<T> {
  return {};
}

//> typecasting - ` as` keyword
