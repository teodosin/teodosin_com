<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
 
  import GalleryItem from '../lib/utils/components/gallery-item.svelte';
</script>
 
<Meta title="GalleryItem" component={GalleryItem} />
 
<Template let:args>
  <GalleryItem {...args} />
</Template>
 
<Story name="FirstStory" args={ {
  post: {
    meta: {
      title: "My first post",
      date: "January 2026",
      description: "This is my first post",
      categories: ["first", "second"],
      tags: ["first", "second"],
      cover: "https://picsum.photos/200/300"
    },
    path: "my-first-post"
  }
} } />