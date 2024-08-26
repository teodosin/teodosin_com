<script>
  import { base } from "$app/paths";

  import { createEventDispatcher } from "svelte";
  import Scanline from "./scanline.svelte";

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
    on:mouseover={() => dispatch("select", post.path)}
    on:mouseout={() => dispatch("select", null)}
    on:focus={() => dispatch("select", post.path)}
    on:blur={() => dispatch("select", null)}
    class:unselected={selectedPost && selectedPost !== post.path}
    style="background-image: url({post.meta.cover
      ? post.meta.cover
      : '/default-cover.jpg'});
      "
  >
    <div class="text-cont">
      <Scanline />
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
    position: relative;
    display: grid;
    aspect-ratio: 1/1;
    border: none;
    align-content: end;
    overflow: visible;
    position: relative;

    background-size: cover;
    background-position: center;

    /* Add transition for opacity */
    transition:
      opacity 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }

  .text-cont {
    position: absolute;
    z-index: 2000;
    top: 100%;
    width: 100%;
    flex-direction: column;
    align-content: end;
    user-select: none;
    text-align: center;
  }
  .post-title {
    margin-top: 0.4rem;
    position: relative;
    font-size: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  .post-desc {
    word-wrap: break-word;
    margin-top: -1.5rem;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  .verty {
    transform: scaleY(0); /* Initially scale the description's height to 0 */
    transform-origin: top; /* Set the origin of the transform to the top of the element */
    transition:
      max-height 0.2s ease,
      transform 0.2s ease;
  }

  @media (min-width: 768px) {
    .post:hover {
      box-shadow: 0px 0px 120px 2px rgb(0, 0, 0);
      transform: scale(
        1.005
      ); /* On hover, enlarge the background image slightly */
    }
    .post:hover .text-cont {
      /* max-height: 100px;  */
      /* transform: scaleY(1);  */
      opacity: 1;
    }
    .post:hover .post-title {
      opacity: 1;
    }
    .post:hover .post-desc {
      opacity: 1;
    }
    .post.unselected {
      opacity: 0.2;
    }
  }

  @media (max-width: 768px) {
    .text-cont {
      opacity: 0;
    }
    .post-title {
      font-size: 1.2rem;
    }
    .post-desc {
      font-size: 0.8rem;
    }
  }
</style>
