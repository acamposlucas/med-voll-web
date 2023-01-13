type Especialidade = "ORTOPEDIA" | "CARDIOLOGIA" | "GINECOLOGIA" | "ENDOCRINOLOGIA" | "DERMATOLOGIA";

interface Endereco {
    logradouro: string,
    bairro: string,
    cep: string,
    cidade: string,
    uf: string,
    numero?: string
    complemento?: string
}

export interface INewDoctorForm {
    nome: string,
    email: string,
    telefone: string,
    crm: string,
    especialidade: Especialidade,
    endereco: Endereco
  }