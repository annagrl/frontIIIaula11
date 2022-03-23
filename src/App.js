import { Formik } from "formik";

//Anna Gabriele Lopes, Jehan Lucas Vieira, André Wilson Padilha, Thiago Maurat Martins Dias, Wirley Da Silva Almeida, Octavio Augusto, Leticia Ferreira, João Eloi.

function App() {
  return (
    <Formik

      
      initialValues={{ email: "", nome: "", telefone: "" }}

      onSubmit={(values) => swal({Dados: values.email, Nome: values.nome, Telefone: values.telefone})}
     
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Digite um email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email invalido";
        }
           if (!value.nome){
          errors.nome = "Digite um nome";
        } else if (
          /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(values.nome)
        ){
          errors.nome = "Nome inválido"
        }

          if (!value.telefone){
          errors.telefone = "Digite um telefone";          
        } else if(
          /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/.test(value.telefone)
        ){
          errors.telefone = "Telefone inválido"
        }

        return errors;

      
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit}>
          <input name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
          <input name="nome" placeholder="Nome" onChange={handleChange} />
          <input name="telefone" placeholder="Telefone" onChange={handleChange} />

          <button type="submit">Sumit</button>
        </form>
      )}



    </Formik>
  );
}

export default App;
