document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('#title') //
      .pause(1000)
      .delete(7, { delay: 1000 })
      .type('Academy')
      .go();
  });