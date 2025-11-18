import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Clínica SPA. Todos os direitos reservados.</p>
      <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
      <p>Telefone: (11) 1234-5678</p>
    </footer>
  );
}

export default Footer;