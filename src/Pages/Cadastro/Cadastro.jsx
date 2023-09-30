import React, { useState } from "react";

function Cadastro() {
  const [user, setUser] = useState();
  const [senha, setSenha] = useState();

  function handleCadastro(e) {
    e.preventDefault();

    if (!user || !senha) {
      console.log("Preencha os campos!");
    }

    localStorage.setItem("user", user);
    localStorage.setItem("senha", senha);
    console.log("Cadastro concluido");
  }

  return (
    <>
      <form onSubmit={handleCadastro}>
        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          id="user"
          name="user"
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <input type="submit" value="cadastrar" />
      </form>
    </>
  );
}

export default Cadastro;
