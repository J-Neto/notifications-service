// O tipo replace é uma helper function do tipo "Replace" que pode receber 2 tipagens
//  - original: props
//  - replace: quais props da tipagem original quero substituir
export type Replace<T, R> = Omit<T, keyof R> & R;
