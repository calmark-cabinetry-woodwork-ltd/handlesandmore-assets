# handlesandmore-assets

These are the frontend assets (icons, images, scripts) hosted at
<https://assets.handlesandmore.ca/>

-   Scripts and icons are compiled/compressed automatically in a
    [Github Action](/.github/workflows/push.yml)

### Icons

Icons are compiled to an icon font from the files in the [icons directory](/icons).

-   Icon should be in a 32x32 pixel container named with an id using
    `lower-case-and-dashes` format
-   Most icons are centered in their container with about 3px padding on all
    sides (~26px)
-   Make sure any new icon svg files have an id, eg: `<g id="account">...</g>`

A hosted preview of the icon set is available here:
<https://assets.handlesandmore.ca/hfont/>

note: the CSS and Font files are cached quite agressively by Cloudflare, so it
may be useful to purge the cache in Cloudflare to see changes.

### Web Components

See [component directory](/src/components)
