<p align="center">
<a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="80" height="80" alt="Redux" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="80" height="80" alt="React" /></a>
</p>




💻 O que é Redux 
-------------

<p>
Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript. Quando desenvolvemos aplicações utilizando Javascript, sempre temos que lidar com o gerenciamento de estado. O Redux veio para suprir essa necessidade de simplificar o controle dos estados de uma aplicação. Compartilhar estados entre vários componentes diferentes se torna uma coisa muito fácil quando o utilizamos.
</p>

Store - Reducers - Actions
-------------

<b>Store:</b> Um container ou um grande centro de informações, que tem disponibilidade para receber e entregar o que o seu componente requisita. A store armazena de forma centralizada todos os estados da aplicação. A store é imutável.

<b>Reducers:</b> Cada dado da store deve ter o seu próprio reducer. Ele é encarregado de lidar com todas as ações e especificam como o estado da aplicação irá mudar de acordo com a action que foi enviada para o store.

<b>Actions:</b> São ações disparadas da aplicação para o store. Elas são criadas através das action creators. As actions são a única forma de acionar uma mudança de estados no store.

O Redux possui 3 princípios
-------------


<b>Todos os estados estarão disponíveis exclusivamente através do store:</b>    todo o estado da aplicação vai estar armazenado nesse store que é único, onde todos os componentes vão consultar nesse store.


<b>Os estados são somente leitura:</b>   os componentes não podem fazer uma manipulação direta nas informações que estão nele.


<b>As alterações são feitas através de funções puras:</b>   o Redux utiliza o conceito de programação funcional, por isso toda alteração no store é feita através de uma função pura, chamada de reducer. O reducer recebe o estado e a ação, onde com essa ação nós visualizamos o que precisa ser alterado no estado e o reduce entrega uma nova store do nosso estado da aplicação.
