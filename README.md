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
    <script src="https://rawcdn.rawgit.net/RedCrafter07/typing/652b416bfaa7b2f096349c85ede40e2885fd37fb/typing.js"></script>
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
