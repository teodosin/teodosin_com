<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  /**
   * @type {any[]}
   */
  export let categories = [];
  /**
   * @type {null}
   */
  let activecategory = null;
  /**
   * @type {boolean}
   */
  export let capitalizeFirstLetter = true;
  /**
   * @param {any} category
   */

  function selectcategory(category) {
    if (activecategory === category) {
      activecategory = null;
      dispatch("categoryselected", null);
    } else {
      activecategory = category;
      dispatch("categoryselected", category);
    }
  }
</script>

<div class="categories-body">
  <button class="category_button">Portfolio</button>
  <button class="category_button">About</button>
  <button class="category_button">Contact</button>


  <button
    class:active={activecategory === null}
    class="category_button"
    on:click={() => selectcategory(null)}
  >
    {capitalizeFirstLetter ? "All" : "all"}
  </button>

  {#each categories as category (category)}
    <button
      class:active={category === activecategory}
      class="category_button tag"
      on:click={() => selectcategory(category)}
    >
      {capitalizeFirstLetter
        ? category.charAt(0).toUpperCase() + category.slice(1)
        : category}
    </button>
  {/each}
</div>

<style>
  .category_button {
    background-color: #ffffff00;
    border: none;
    color: #ffbc2d5e;
    padding: 0.5rem 1rem;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    font-family: Calistoga, serif;
    font-size: 1.4rem;
    font-weight: 100;
    margin: 0.25rem 0.25rem;
    cursor: pointer;
    border-radius: 1rem;
  }
  .category_button:not(.active):hover {
    box-shadow: 0px 4px 58px 2px rgba(156, 15, 102, 0.425);
    transition: box-shadow 0.3s ease;
  }
  .active {
    font-weight: 800;
  }

  .category_button.tag {
    font-size: 1.4rem;
    font-family: Corben, serif;
    padding-left: 2rem;
    padding-top: -3.5rem;
    padding-bottom: -0.5rem;
  }
  .categories-body {
    background-color: #00000080;
    backdrop-filter: blur(10px);
    position: absolute;
    overflow: hidden;
    z-index: 1000;
    height: 100%;
    display: flex;
    width: 16rem;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    .categories-body {
      width: 16rem;
      background-color: #00000000;
      backdrop-filter: blur(0px);
    }
  }
</style>
