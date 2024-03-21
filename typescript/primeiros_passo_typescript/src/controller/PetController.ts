import { Request, Response } from "express";
import TypePets from "../types/typePet";
import EnumEspecies from "../types/enumEspecies";

let listaDePets: TypePets [] = [];

export default class PetController{
  criarPet(req: Request, res: Response){
    const {id, nome, especie, sexo, dataNascimento, adotado} = <TypePets>req.body;
    if (!Object.values(EnumEspecies).includes(especie)) {
      return res.status(400).json({ erro: "Especie invalida!"})
    }
    const novoPet: TypePets = {id, nome, especie, sexo, dataNascimento, adotado};
    listaDePets.push(novoPet);
    return res.status(201).json(novoPet);
  }

  listarPet(req: Request, res: Response ){
    return res.status(200).json(listaDePets);
  }

  atualizarPet(req: Request, res: Response){
    const { id } = req.params;
    const { nome, especie, dataNascimento, sexo, adotado } = <TypePets>req.body;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({erro: "Pet não encontrado"})
    }

    pet.nome = nome;
    pet.especie = especie; 
    pet.dataNascimento = dataNascimento;
    pet.sexo = sexo;
    pet.adotado = adotado;
    return res.status(200).json(pet);
  }

}

