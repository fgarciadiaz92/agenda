<script>
// @ts-nocheck

  import Tarjeta from './Tarjeta.svelte';

  let gridItems = [
    { id: 1, mensaje: 'Item 1', idReferencia: 1 },
    { id: 2, mensaje: 'Item 1', idReferencia: 1 },
    { id: 3, mensaje: 'Item 2', idReferencia: 2 },
    { id: 4, mensaje: 'Item 2', idReferencia: 2 },
    { id: 5, mensaje: 'Item 3', idReferencia: 3 },
    { id: 6, mensaje: 'Item 3', idReferencia: 3 },
    { id: 7, mensaje: 'Item 4', idReferencia: 4 },
    { id: 8, mensaje: 'Item 4', idReferencia: 4 },
    { id: 9, mensaje: 'Item 5', idReferencia: 5 },
    { id: 10, mensaje: 'Item 5', idReferencia: 5 },
    { id: 11, mensaje: 'Item 6', idReferencia: 6 },
    { id: 12, mensaje: 'Item 6', idReferencia: 6 },
    { id: 13, mensaje: 'Item 7', idReferencia: 7 },
    { id: 14, mensaje: 'Item 7', idReferencia: 7 },
    { id: 15, mensaje: 'Item 8', idReferencia: 8 },
    { id: 16, mensaje: 'Item 8', idReferencia: 8 }
  ];

  function randomizar(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
    }
</script>

<main>
  <div class="grid grid-cols-4 gap-4">
    {#each randomizar(gridItems) as item (item.id)}
      <Tarjeta
        mensaje={item.mensaje}
        idCarta={item.idReferencia}
      />
    {/each}
  </div>

</main>

<style>
  .grid {
    margin: 0 auto;
    max-width: 50%;
    margin-top: 2%;
  }
</style>
