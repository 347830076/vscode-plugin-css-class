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
    style: `
/* 旋转 */
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
}
]