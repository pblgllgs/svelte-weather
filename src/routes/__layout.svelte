<div>
    <slot />
</div>

<style>
    :global(body){
        display: grid;
        place-content: center;
        min-height: 100hv;
    }

    div {
        aspect-ratio: 9/16;
        width: 400px;
        max-width: 100%;
        display: block;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
</style>