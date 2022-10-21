module.exports = [{
    title: '带左边柱子的标题',
    key: 1,
    style: `
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
`
},
{
    title: '单文本溢出',
    key: 2,
    style: `
/*单文本溢出*/
.ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
`
},
{
    title: '多行文本溢出',
    key: 3,
    style: `
/*多行文本溢出*/
.multiple-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; /* 作为弹性伸缩盒子模型显示。 */
    -webkit-box-orient: vertical;/* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
    -webkit-line-clamp: 2; /* 显示的行 */
}
`
},
{
    title: '右箭头',
    key: 4,
    style: `
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
`
},
{
    title: '三角形',
    key: 5,
    style: `
/*三角形*/
.triangle {
    display: inline-block;
    vertical-align: middle;
    border: 8px solid #ccc;
    border-color: transparent transparent transparent #ccc;
}
`
},
{
    title: '垂直居中对齐(translate)',
    key: 6,
    style: `
/*垂直居中对齐(translate)*/
.vc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`
},
{
    title: '强制换行',
    key: 7,
    style: `
/*强制换行*/
.pre-wrap {
    white-space: pre-wrap;        
    word-wrap: break-word;  
}
`
},
{
    title: '清除浮动',
    key: 8,
    style: `
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
`
},
{
    title: '旋转动画',
    key: 9,
    style: `
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
`
},
{
    title: '标题左右两边横线',
    key: 10,
    style: `
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
`
},
{
    title: '文字两端对齐',
    key: 11,
    style: `
text-align: justify;
`
},
{
    title: '下面是scss的 mixin ======================',
    key: 'm0',
    style: ''
},
{
    title: 'flex 布局',
    key: 'm1',
    style: `
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
`
},
{
    title: '圆',
    key: 'm2',
    style: `
// 圆圈
@mixin circle($width) {
    display: inline-block;
    border-radius: 50%;
    width: $width;
    height: $width;
}
`
},
{
    title: '省略号',
    key: 'm3',
    style: `
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
`
},
{
    title: '实心三角形',
    key: 'm4',
    style: `
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
`
},
{
    title: '上下左右居中（margin版）',
    key: 'm5',
    style: `
// 上下左右居中，为解决被外部数据覆盖的问题，强制使用!important
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
`
},
{
    title: '跳转文字 有hover效果',
    key: 'm6',
    style: `
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
`
},
{
    title: '',
    key: 'm7',
    style: `
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
`
},
]