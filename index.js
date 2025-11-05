// Importamos la librería chalk
import chalk from 'chalk';

// Función de Equipo B
function simularError() {
  console.warn(chalk.yellow('⚠️  Advertencia: algo no se ve del todo bien...'));
  console.error(chalk.red('❌  ERROR: El proceso falló inesperadamente.'));
  console.info(chalk.green('✅  Recuperación: El sistema vuelve a la normalidad.'));
}

simularError();

  