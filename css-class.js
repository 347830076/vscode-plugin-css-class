module.exports = [{
    title: '带左边柱子的标题',
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
    style: `
/*单文本溢出*/
.ellipsis{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
`
},
]