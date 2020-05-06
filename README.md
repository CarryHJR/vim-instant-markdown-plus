vim-instant-markdown-plus
====================

although i love the plugin [vim-instant-markdown](https://github.com/suan/vim-instant-markdown), but i need the function of resizing images and the function of embedding jsfiddle code and a sidebar, so i spent almost 2 days to modify the source code and add these functions, luckily it worked

etc
```
![](https://jsfiddle.net/carryhjr/em17vhzb/embedded/result,html,css,js/dark)

![Minion](https://octodex.github.com/images/minion.png 200x)
![Minion](https://octodex.github.com/images/minion.png 500x)

[[toc]]
```
we can get
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gei246317qj313k0u07dt.jpg)

Installation
------------

  - [vim-plug][plug]

    ```vim
    Plug 'CarryHJR/vim-instant-markdown-plus', {'for': 'markdown', 'do': 'npm install -g instant-markdown-d'}
    ```

- Minimal default configuration:

    ```vim
    filetype plugin on
    "Uncomment to override defaults:
    "let g:instant_markdown_slow = 1
    "let g:instant_markdown_autostart = 0
    "let g:instant_markdown_open_to_the_world = 1
    "let g:instant_markdown_allow_unsafe_content = 1
    "let g:instant_markdown_allow_external_content = 0
    "let g:instant_markdown_mathjax = 1
    "let g:instant_markdown_logfile = '/tmp/instant_markdown.log'
    "let g:instant_markdown_autoscroll = 0
    "let g:instant_markdown_port = 8888
    "let g:instant_markdown_python = 1
    ```

**Detailed instructions**

- If you're on Linux, ensure the following packages are installed:
  - `xdg-utils`
  - `curl`
  - `nodejs`
- If you're on Windows, you will need into install [cURL][curl] and put it on your `%PATH%`.

How to use it
-------------
it' really easy. I suppose we only need to preview one file when we wanna preview markdowns. etc for `test.md`, you just enter:
```
:InstantMarkdownRestart
```
if you switch to another buffer, the html of previewing will be the `test.md`, if you wanna preview a new markdown file, you jsust need to enter this command again.

