# vscode 插件扩展，常用css大全
## 前言

开发中，我们一直写很多重复的css样式，想着要是有个vscode插件能收集常用的css样式大全，直接选择样式，就出现在vscode编辑器文件上面了，这样就可以大大提高我们的工作效率。

如果所有的前端开发者都来共享常用的css样式，那么这个样式表将会越来越全，写css各种样式就会很轻松了。

所以这个项目开源，欢迎大家参与交流，为常用css贡献一份力，让我们前端人css开发效率高起来。

![已收录css18个](https://img.shields.io/badge/已收录css-18个-blue.svg?style=plastic)

### 使用方法
<!-- #### 方法一
1. 按 `shift + win + p` 打开vscode 搜索命令
2. 输入关键词搜索, 比如 "`class:单文本溢出`"， 或 "`单文本`"。 -->

右键选择 "`css常用代码大全`"，就会弹出css常用代码列表。点击选择即可

### 项目开源

本项目开源，github地址是：[https://github.com/347830076/vscode-plugin-css-class](https://github.com/347830076/vscode-plugin-css-class)

欢迎大家提供自己常用的css代码段。

大家可以fork项目，然后提PR，步骤如下：

1. 到github地址：[https://github.com/347830076/vscode-plugin-css-class](https://github.com/347830076/vscode-plugin-css-class)点击fork，觉得好的话，也顺便给我点个star，感谢大家。
2. 拉代码下来，切换到 `develop` 分支。
3. 在根目录下的 `css-class.js`，参考原有代码，添加上你们想要常用的css代码段就可以了。
4. 最后提交代码到`develop`分支，然后提PR就可以了，我看到review写代码后，就会重新发布到vscode扩展应用
5. 最后感谢大家的恭喜，下面会写出大家贡献的github昵称。以表感谢贡献。

### 感谢贡献

[阿离王(作者)](https://github.com/347830076)

### vscode开发基础教程

如果大家对vscode开发有兴趣的，可以看我这篇文章 [vscode 扩展开发](https://347830076.github.io/myBlog/tool/vscode-plugin.html)

看我基础教程之后，看本项目代码就发现也挺简单的了，本vscode扩展功能就只是收集大家工作中常用的css，就可以减少我们每次都写一样的css代码了。也能提高我们的工作效率，参与开源项目，也能学习其他大佬的代码。

热爱前端，热爱分享。

### css代码

```css
/*带左边柱子的标题*/
.g-title {
    position: relative;
    padding-left: 12px;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
}
.g-title::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 4px;
    height: 24px;
    background: #FF5A5F;
    content: '';
    transform: translateY(-50%);
}
```

```css
/*单文本溢出*/
.ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
```

```css
/*多行文本溢出*/
.multiple-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; /* 作为弹性伸缩盒子模型显示。 */
    -webkit-box-orient: vertical;/* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
    -webkit-line-clamp: 2; /* 显示的行 */
}
```

```css
/*右箭头*/
&::after {
    position: absolute;
    right: 20px;
    top: 50%;
    content: '';
    width: 10px;
    height: 10px;
    border: 1px solid #BF1B21;
    border-color: #BF1B21 #BF1B21 transparent transparent;
    transform: translateY(-50%) rotate(45deg);
}
```

```css
/*三角形*/
.triangle {
    display: inline-block;
    vertical-align: middle;
    border: 8px solid #ccc;
    border-color: transparent transparent transparent #ccc;
}
```

```css
/*垂直居中对齐(translate)*/
.vc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

```css
/*强制换行*/
.pre-wrap {
    white-space: pre-wrap;        
    word-wrap: break-word;  
}
```

```css
/*清除浮动代码*/
.clearfix:after {
    content: '';
    display: block;
    /*加入的这个元素转换为块级元素。*/
    clear: both;
    /*清除左右两边浮动。*/
    visibility: hidden;
    /*可见度设为隐藏。注意它和display:none;是有区别的。visibility:hidden;仍然占据空间，只是看不到而已；*/
    line-height: 0;
    /*行高为0；*/
    height: 0;
    /*高度为0；*/
    font-size: 0;
    /*字体大小为0；*/
}
/*这是针对于IE6的，因为IE6不支持:after伪类，这个神奇的zoom:1让IE6的元素可以清除浮动来包裹内部元素。*/

.clearfix {
    *zoom: 1;
}
```

```css
/* 旋转动画 */
.animation-rotate  {
    animation: rotate 1s linear infinite;
}

@keyframes rotate {
    0% {
    transform: rotate(0deg);
    }

    100% {
    transform: rotate(360deg);
    }
}
```

```css
/* 标题左右两边横线 */
.about-line {
    position: relative;

    &::before,
    &::after {
        position: absolute;
        top: 50%;
        width: 40px;
        height: 2px;
        background-color: #1890FF;
        content: '';
        transform: translateY(-50%);
    }

    &::before {
        right: calc(100% + 16px);
    }

    &::after {
        left: calc(100% + 16px);
    }
} 
```

```css
/*文字两端对齐*/
text-align: justify;
```

#### mixin

```scss
// flex 布局
@mixin flex($obj) {
    display: flex;

    @if map-get($obj, "justify") {
    justify-content: map-get($obj, "justify");
    }

    @if map-get($obj, "align") {
    align-items: map-get($obj, "align");
    }
}

// flex 水平居中
@mixin flex-c {
    @include flex((justify: center));
}

// flex 垂直居中
@mixin flex-vc {
    @include flex((align: center));
}

// flex 水平两端对齐
@mixin flex-sb {
    @include flex((justify: space-between));
}

// flex 水平垂直居中
@mixin flex-cc {
    @include flex((justify: center, align: center));
}

// flex 水平两端对齐，垂直居中
@mixin flex-sbc {
  @include flex((justify: space-between, align: center));
}

// 圆圈
@mixin circle($width) {
    display: inline-block;
    border-radius: 50%;
    width: $width;
    height: $width;
}

// 省略号样式
@mixin ellipsis($lineNum: "") {
    overflow: hidden;
    
    @if $lineNum != "" {
        /* stylelint-disable-next-line */
        display: -webkit-box;
        /* stylelint-disable-next-line */
        -webkit-box-orient: vertical;
        -webkit-line-clamp: $lineNum;
    } @else {
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

// 实心三角形
@mixin arrow($direction, $width, $height, $color) {
    display: inline-block;
    width: 0;
    height: 0;

    @if $direction == "top" {
    border-top: 0;
    border-right: solid $width transparent;
    border-bottom: solid $height $color;
    border-left: solid $width transparent;
    } @else if $direction == "bottom" {
    border-top: solid $height $color;
    border-right: solid $width transparent;
    border-bottom: 0;
    border-left: solid $width transparent;
    } @else if $direction == "left" {
    border-top: solid $height transparent;
    border-right: solid $width $color;
    border-bottom: solid $height transparent;
    border-left: 0;
    } @else if $direction == "right" {
    border-top: solid $height transparent;
    border-right: 0;
    border-bottom: solid $height transparent;
    border-left: solid $width $color;
    }
}

// 上下左右居中（margin版），为解决被外部数据覆盖的问题，强制使用!important
@mixin setXYMiddle($width, $height) {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    margin-top: -$height / 2 !important;
    margin-left: -$width / 2 !important;
    width: $width !important;
    min-width: unset;
    height: $height !important;
}

// 上下居中
@mixin setYMiddle($height) {
  position: absolute;
  top: 50%;
  margin-top: -$height / 2;
  height: $height;
}

// 左右居中
@mixin setXMiddle($width) {
  position: absolute;
  left: 50%;
  margin-left: -$width / 2;
  width: $width;
}

// 跳转文字 有hover效果
@mixin link($color: $text-grey-color, $hover-color: $text-grey-color) {
    position: relative;
    color: $color;
    cursor: pointer;
    user-select: none;

    @content;

    &:hover {
    color: $hover-color;
    }
}

// 跳转文字 带下划线 有hover效果
@mixin link-underline($color: $text-grey-color, $hover-color: $text-grey-color) {
    @include link($color, $hover-color) {
    &:hover {
        &::after {
        border-bottom-color: $hover-color;
        }
    }

    &::after {
        position: absolute;
        bottom: 0;
        content: "";
        left: 0;
        border-bottom: 1px solid $color;
        width: 100%;
    }
    }
}
```