import { Formik } from "formik";
import swal from '@sweetalert/with-react';
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
           if (!values.nome){
          errors.nome = "Digite um nome";
        } else if (
          /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(values.nome)
        ){
          errors.nome = "Nome inválido"
        }

          if (!values.telefone){
          errors.telefone = "Digite um telefone";          
        } else if(
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.telefone)
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
          {errors.nome && <span>{errors.nome}</span>}
          <input name="telefone" placeholder="Telefone" onChange={handleChange} />
          {errors.telefone && <span>{errors.telefone}</span>}

          <button type="submit">Submit</button>
        </form>
      )}



    </Formik>
  );
}

export default App;
