enum Agarre {
  micro = "Micro",
  bajo = "Bajo",
  medio = "Medio",
  medioAlto = "Medio a alto" ,
  alto = "Alto"
}
type Size = {
  largo: string;
  ancho: string;
  alto: string;
}
export type Product = {
  id: string;
  image: string;
  name: string;
  agarre: Agarre;
  size: Size;
  stock: number;
  description: string;
  price: number;
};

//const imgRoute = "/products/img";
const defaultImage = "/icons/file.svg";

export const products: Product[] = [
  {
    id: "gancho1",
    image: defaultImage,
    name: "Gancho 1",
    agarre: Agarre.micro,
    size: {
      largo: "1",
      ancho: "1",
      alto: "1",
    },
    stock: 1,
    description: "Este es el Gancho 1",
    price: 1000,
  },
  {
    id: "gancho2",
    image: defaultImage,
    agarre: Agarre.micro,
    name: "Gancho 2",
    size: {
      largo: "1",
      ancho: "1",
      alto: "1",
    },
    stock: 0,
    description: "Este es el Gancho 2",
    price: 2000,
  },
  {
    id: "gancho3",
    image: defaultImage,
    name: "Gancho 3",
    agarre: Agarre.micro,
    size: {
      largo: "1",
      ancho: "1",
      alto: "1",
    },
    stock: 3,
    description: "Este es el Gancho 3",
    price: 3000,
  },
  {
    id: "gancho4",
    image: defaultImage,
    name: "Gancho 4",
    agarre: Agarre.micro,
    size: {
      largo: "1",
      ancho: "1",
      alto: "1",
    },
    stock: 4,
    description: "Este es el Gancho 4",
    price: 4000,
  },
];