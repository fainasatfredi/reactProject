# Aplicación Exploradora de Pokémon

Esta es una aplicación simple de React que permite a los usuarios explorar información sobre Pokémon. La aplicación incluye una barra de navegación, una lista de cartas de Pokémon y detalles sobre un Pokémon seleccionado.

## Características

- **Barra de Navegación:**
  - Navegar entre la página de inicio y la Exploradora de Pokémon utilizando la barra de navegación.
  - Alternar entre las apariencias estándar y brillante de Pokémon.
  - Buscar Pokémon específicos ingresando su nombre en la barra de búsqueda.

- **Cartas de Pokémon:**
  - Mostrar una cuadrícula de cartas de Pokémon, cada una mostrando el nombre del Pokémon, su tipo, ID e imagen.
  - Hacer clic en una carta abre una vista detallada del Pokémon seleccionado.

- **Vista Detallada de Pokémon:**
  - Ver información detallada sobre un Pokémon seleccionado, incluyendo:
    - Descripción
    - Tipos
    - Altura y Peso
    - Habilidades
    - Ubicaciones de Captura
    - Estadísticas Base
    - Información de Evolución
    - Movimientos

## Componentes

1. **Navegador:**
   - Componente de la barra de navegación con enlaces a la página de inicio y la Exploradora de Pokémon.
   - Botón de alternancia para cambiar entre las apariencias estándar y brillante de Pokémon.
   - Barra de búsqueda para encontrar Pokémon específicos.

2. **CartasPokemon:**
   - Muestra una cuadrícula de cartas de Pokémon.
   - Cada carta incluye el nombre del Pokémon, su tipo, ID e imagen.
   - Hacer clic en una carta abre una vista detallada del Pokémon seleccionado.

3. **CartaBusqueda:**
   - Vista detallada de un Pokémon seleccionado.
   - Muestra información sobre la descripción del Pokémon, tipos, altura, peso, habilidades, ubicaciones de captura, estadísticas base, evolución y movimientos.
   - Incluye un sistema de pestañas para navegar fácilmente entre diferentes conjuntos de información.
