# gutenberg-js
> JavaScript only version of the WordPress Gutenberg editor.

## dist:
~~~
.
├── gutenberg.css
├── gutenberg.js
└── index.html
~~~


## install:
```shell
# add this to package.json:
"gutenberg-js": "git+ssh://git@gitlab.finxos.com:tu-editor/gutenberg-js.git",

# then: 
npm install
```

## usage:
> Only demo version.

1. html import some global script:
    
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    ```

2. import JS file

    ```js
    import GutenbergEditor from 'gutenberg-js';
    ```

3. import css

    ```scss
    @import '~gutenberg-js/dist/gutenberg.css';
    ```

4. YOUR JSX:
    > Your container is `postion:relative;`
    
    ```js
    
    class App extends React.Component(){
      render(){
        return (
          <div className="rel container">
            <GutenbergEditor />
          </div>
        )
      }
    }
    ```
