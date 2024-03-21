import EnumEspecies from "./enumEspecies";

type TypePets = {
  id: number;
  nome: string;
  especie: EnumEspecies;
  sexo: string;
  adotado: boolean;
  dataNascimento: Date;
}

export default TypePets;