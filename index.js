// Importamos la librería chalk
import chalk from 'chalk';

// Función de Equipo A
function mostrarEstado(saludar) {
    console.log(chalk.cyan(`👋 Hola ${saludar}, Somos el equipo Quero \n ✨ ¡Bienvenido a la Terminal Parlante! ✨`) )
    console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
    console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
}

mostrarEstado("JS")