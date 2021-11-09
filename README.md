# typing
## Javascript library for typing animations.

**IMPORTANT:** This library is using jQuery. You can download it [here](https://jquery.com/download/)

## Including the library
You have to include the library at the bottom of your html file.

```html
    <!-- Include Scripts -->
    <!-- jQuery first -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> 
    <!-- Then typing -->
    <script src="https://cdn.redcrafter07.de/typing.js"></script>
    <!-- Alternative CDN -->
    <script src="https://ghcdn.rawgit.org/RedCrafter07/typing/main/typing.js"></script>
    <!-- Then include your script. -->
    <script>
      
    </script>
```

## Syntax
Typing
```js
typing.type(text, time, selector, typingBar, () => {
  console.log("Callback!");
});
```

Deleting
```js
typing.delete(time, selector, typingBar, () => {
  console.log("Callback!");
});
```

## Small Notice
If you use this library, I would appreciate a little shoutout :)
