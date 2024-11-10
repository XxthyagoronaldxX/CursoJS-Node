import chalk from 'chalk';

console.log(chalk.green('Texto em verde'));  // Texto verde simples
console.log(chalk.blue.bold('Texto em azul e negrito')); // Texto azul e em negrito
console.log(chalk.redBright.underline('Texto em vermelho claro e sublinhado')); // Texto vermelho claro e sublinhado
console.log(chalk.bgYellow.black('Texto com fundo amarelo e texto preto')); // Texto com fundo amarelo e texto preto

// Combinações de estilos
console.log(chalk.magenta.bold.italic('Texto magenta, negrito e itálico'));

// Usando template strings para exibir variáveis com cores
const nome = 'Maria';
const idade = 25;
console.log(chalk.cyan(`Nome: ${nome}, Idade: ${idade}`));

// Exemplo de múltiplas linhas coloridas
console.log(`
  ${chalk.blue('Título')}
  ${chalk.yellow('Item 1')}
  ${chalk.yellow('Item 2')}
  ${chalk.green('Item 3')}
`);

// Mostrar erros e avisos com estilos distintos
console.log(chalk.red.bold('Erro: Arquivo não encontrado!'));
console.log(chalk.yellow('Aviso: Operação demorada...'));

// Nested styles: aplicar estilos em partes específicas do texto
console.log(chalk.blue(`Texto em azul e ${chalk.red('parte em vermelho')}`));

// Exemplo de uso com background e cores customizadas
console.log(chalk.bgHex('#FFA07A').hex('#1E90FF')('Texto com fundo personalizado e cor do texto'));
