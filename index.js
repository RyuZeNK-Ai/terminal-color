import chalk from 'chalk';

// Función de Equipo A
function mostrarEstado(saludar) {
    console.log(chalk.cyan(`👋 Hola ${saludar}, Somos el equipo Q-ERO \n ✨ ¡Bienvenido a la Terminal Parlante! ✨`) )
    console.info(chalk.green('ℹ️   Esta terminal está viva... y tiene estilo.'));
    console.warn(chalk.yellow('⚠️   Atención: Esto puede ponerse colorido.'));
}

mostrarEstado("JS") 

// Función de Equipo B
function simularError() {
  console.warn(chalk.yellow('⚠️   Advertencia: algo no se ve del todo bien...'));
  console.error(chalk.red('❌  ERROR: El proceso falló inesperadamente.'));
  console.info(chalk.green('✅  Recuperación: El sistema vuelve a la normalidad.'));
}

simularError();