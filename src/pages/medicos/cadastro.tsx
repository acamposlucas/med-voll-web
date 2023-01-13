import { estados } from "../../constants";
import { useForm, SubmitHandler } from "react-hook-form";
import { INewDoctorForm } from "../../interfaces/INewDoctorForm";

export default function CadastroMedico() {
  const { register, handleSubmit } = useForm<INewDoctorForm>();
  const onSubmit: SubmitHandler<INewDoctorForm> = (data) => console.log(data);

  // TODO: Validação campo email!
  return (
    <>
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mx-auto max-w-lg">
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset>
              <legend className="mb-2 font-bold text-blue-900 text-lg">
                Profissional
              </legend>
              <div className="flex flex-col gap-2">
                <div className="relative w-full">
                  <input
                    {...register("nome", { required: true, maxLength: 255 })}
                    name="nome"
                    type="text"
                    id="nome"
                    className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="nome"
                    className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                  >
                    Nome completo
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex-1">
                    <label htmlFor="especialidade"></label>
                    <select
                      {...register("especialidade", { required: true })}
                      name="especialidade"
                      id="especialidade"
                      className="h-full w-full min-w-[12rem] rounded-md border-2 border-neutral-400 py-[18px] px-4 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                      defaultValue=""
                    >
                      <option value="">Especialidade</option>
                      <option value="ORTOPEDIA">Ortopedia</option>
                      <option value="CARDIOLOGIA">Cardiologia</option>
                    </select>
                  </div>
                  <div className="relative min-w-[8rem] flex-1">
                    <input
                      {...register("crm", {
                        required: true,
                        minLength: 4,
                        maxLength: 6,
                        pattern: new RegExp("\\d{4,6}"),
                      })}
                      type="text"
                      id="crm"
                      className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label
                      htmlFor="crm"
                      className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform leading-8 text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      CRM
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2 font-bold text-blue-900 text-lg">
                Contatos
              </legend>
              <div className="flex flex-col gap-2">
                <div className="relative w-full">
                  <input
                    {...register("email", {
                      required: true,
                      maxLength: 255,
                     // pattern: new RegExp(
                      //   "/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i"
                      // ), 
                    })}
                    type="text"
                    id="email"
                    className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_filled"
                    className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                  >
                    E-mail
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    {...register("telefone", { required: true })}
                    type="text"
                    id="telefone"
                    className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_filled"
                    className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                  >
                    Telefone ou celular
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2 font-bold text-blue-900 text-lg">
                Endereço profissional
              </legend>
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    {...register("endereco.logradouro", {
                      required: true,
                      maxLength: 255,
                    })}
                    type="text"
                    id="logradouro"
                    className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="logradouro"
                    className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform leading-8 text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                  >
                    Logradouro
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="relative min-w-fit flex-1">
                    <input
                      {...register("endereco.numero", {
                        required: true,
                        maxLength: 4,
                      })}
                      type="text"
                      id="numero"
                      className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label
                      htmlFor="numero"
                      className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform leading-8 text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Número
                    </label>
                  </div>
                  <div className="relative min-w-fit flex-1">
                    <input
                      {...register("endereco.complemento", {
                        required: false,
                        maxLength: 255,
                      })}
                      type="text"
                      id="complemento"
                      className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label
                      htmlFor="complemento"
                      className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform leading-8 text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Complemento
                    </label>
                  </div>
                </div>
                <div className="relative min-w-fit flex-1">
                  <input
                    {...register("endereco.cidade", {
                      required: true,
                      maxLength: 255,
                    })}
                    type="text"
                    id="cidade"
                    className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="cidade"
                    className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform leading-8 text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                  >
                    Cidade
                  </label>
                </div>
                <div className="flex gap-2">
                  <div className="min-w-[6rem]">
                    <label htmlFor="uf"></label>
                    <select
                      {...register("endereco.uf", { required: true })}
                      id="uf"
                      className="h-full w-full rounded-md border-2 border-neutral-400 py-[18px] px-4 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                      defaultValue=""
                    >
                      <option value="">UF</option>
                      {estados.map(({ uf }) => (
                        <option key={uf} value={uf}>
                          {uf}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative w-full">
                    <input
                      {...register("endereco.cep", {
                        required: true,
                        pattern: new RegExp("\\d{8}"),
                      })}
                      type="text"
                      id="cep"
                      className="peer block w-full appearance-none rounded-md border-2 border-neutral-400 py-[18px] px-4 leading-8 text-neutral-900 text-sm focus:border-blue-700 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label
                      htmlFor="cep"
                      className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform leading-8 text-blue-700 duration-300 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      CEP
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-700 py-3 px-2 font-bold text-white disabled:bg-neutral-400 disabled:text-white"
            >
              Concluir cadastro
            </button>
          </form>
          <a
            href="#"
            className="my-2 block w-full rounded-md border-2 border-blue-700 py-3 px-2 text-center font-bold text-blue-700"
          >
            Cancelar
          </a>
        </div>
      </div>
    </>
  );
}
