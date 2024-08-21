<script>
  import { base } from "$app/paths";

  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let post;
  /**
   * @type {any}
   */
  export let selectedPost;
</script>

<a class="post-wrapper" href={`${base}/${post.path}`}>
  <article
    class="post"
    on:mouseover={() => dispatch('select', post.path)}
    on:mouseout={() => dispatch('select', null)}
    on:focus={() => dispatch('select', post.path)}
    on:blur={() => dispatch('select', null)}
    class:unselected={selectedPost && selectedPost !== post.path}
    style="background-image: url({post.meta.cover
      ? post.meta.cover
      : '/default-cover.jpg'});
      "
  >
  <div class="text-cont">
    <h3 class="post-title">{post.meta.title}</h3>
    <p class="post-desc">{post.meta.description}</p>
  </div>
</article>
</a>

<style>
  .post-wrapper {
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
  }
  .post {
    display: grid;
    aspect-ratio: 1/1;
    margin-bottom: 0rem;
    border: none;
    align-content: end;

    position: relative;

    background-size: cover;
    background-position: center;

    /* Add transition for opacity */
    transition: opacity 0.3s ease;
  }
  .post:hover {
    box-shadow: 0px 0px 120px 2px rgb(0, 0, 0);
    transition: box-shadow 0.3s ease;
    transform: scale(
      1.005
    ); /* On hover, enlarge the background image slightly */
  }

  .text-cont {
    position: absolute;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: end;
    padding-left: 1rem;
    padding-right: 1rem;
    color: #a7a7a7;
    transition: background 0.3s ease; /* Add transition for smooth effect */

    transform: scaleY(0); /* Initially scale the description's height to 0 */
    transform-origin: top; /* Set the origin of the transform to the top of the element */
    transition:
      max-height 0.2s ease,
      transform 0.2s ease; /* Add transition for max-height and transform */
  }
  .post:hover .text-cont {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.521));
    color: #f5f5f5;
    max-height: 100px; /* On hover, increase the maximum height */
    transform: scaleY(1.1); /* On hover, scale the description's height */
    
  }
  .post.unselected {
    opacity: 0.2;
  }

  .post-title {
    position: relative;
    color: #f2f2f2aa;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: -1rem;
  }
  .post:hover .post-title {
    color: #f5f5f5;
  }
  .post-desc {
    word-wrap: break-word;
    overflow: hidden; /* Hide the overflow */
    margin-top: 1.5rem;
  }

  @media (max-width: 600px) {
        .post-title {
            font-size: 1.2rem;
        }

        .post-desc {
            font-size: 0.8rem;
        }
    }
</style>
