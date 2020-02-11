## 前言
这篇讲的是CSS3的颜色属性值的表示方法。

Blog观看体验更佳。
Blog地址：<https://blog.yulovexin.xyz/cssyi-ci-xing-liao-jiecss-yan-se-de-suo-you-biao-shi-fang-fa.html>

推荐一个有关颜色设计的网站:

<https://flatuicolors.com/>
## 颜色关键字。
常见的有：`red` `white` `gray`
## 特殊关键字
### currentColor

currentColor代表当前元素设置的`color`值,或者最近的祖先元素设置的`color`值。
例如:
```
<div style="color:green; border: 1px dashed currentColor;">
  The color of this text is green.
  <div style="background:blue; height:70px;color:currentColor">
    top
    <div style="background:currentColor;height:20px;"></div>
    bottom
  </div>
  This block is surrounded by a green border。
</div>
```
### rebeccapurple
颜色 rebeccapurple 等价于颜色 #639。
## RGB
- R为red
- G为green
- B为black
```
color: rgb(255,255,255);
```
光的三原色红绿蓝。
## 十六进制颜色

比如

- `#FFFFFF`可简写为`#FFF`。
- `#000000`简写为`#000`。


**缩写的格式**: `#663399` === `#639`，即6个16进制简写成3个，实际值是每个值的双拼写的组合。

前两个值为`R`值，中间两个值为`G`值，后两个值`为`B值。
## RGBA
A是alpha即透明度，值在0-1，0为完全透明，1不透明。
```
color: rgba(0,0,0,0.5);
```
## HLS
```
background-color: hsl(30,100%，50%);
```
### H
H为hue，即色相，色相即颜色值。
取值范围是0-`360`
- 0和360是红色
- 30是橙色
- 180表示绿色
- 240表示蓝色

![hue.png](./hue.png)
### S
S为saturation,饱和度。表示色彩鲜艳程度,0%-100%,饱和度越高，颜色越鲜艳。

![saturation.png](./saturation.png)
### L
L为lightness,亮度。表示色彩明暗程度,0%-100%,值越高，颜色越亮。

![lightness.png](./lightness.png)
## HSLA
和RGBA类似，A是alpha即透明度，值在0-1，0为完全透明，1不透明。
```
background-color: hsla(30,100%,50%,.5);
```
## 附表颜色关键字查询

<table id="colors_table">
 <thead>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">颜色</th>
   <th scope="col">关键字</th>
   <th scope="col">RGB 十六进制数</th>
   <th scope="col">实样</th>
  </tr>
 </thead>
 <tbody>
  <tr style="position: relative;">
   <td rowspan="16"><a class="external" href="https://www.w3.org/TR/CSS1/" hreflang="en" rel="noopener" title="CSS Level&nbsp;1" lang="en">CSS Level&nbsp;1</a></td>
   <td style="background: #000;"></td>
   <td style="text-align: center;"><code>black</code>（黑）</td>
   <td><code>#000000</code></td>
   <td style="background: black;"></td>
  </tr>
  <tr>
   <td style="background: #C0C0C0;"></td>
   <td style="text-align: center;"><code>silver</code>（银）</td>
   <td><code>#c0c0c0</code></td>
   <td style="background: silver;"></td>
  </tr>
  <tr>
   <td style="background: #808080;"></td>
   <td style="text-align: center;"><code>gray</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（灰）</td>
   <td><code>#808080</code></td>
   <td style="background: gray;"></td>
  </tr>
  <tr>
   <td style="background: #FFF;"></td>
   <td style="text-align: center;"><code>white</code>（白）</td>
   <td><code>#ffffff</code></td>
   <td style="background: white;"></td>
  </tr>
  <tr>
   <td style="background: #800000;"></td>
   <td style="text-align: center;"><code>maroon</code>（褐）</td>
   <td><code>#800000</code></td>
   <td style="background: maroon;"></td>
  </tr>
  <tr>
   <td style="background: #F00;"></td>
   <td style="text-align: center;"><code>red</code>（红）</td>
   <td><code>#ff0000</code></td>
   <td style="background: red;"></td>
  </tr>
  <tr>
   <td style="background: #800080;"></td>
   <td style="text-align: center;"><code>purple</code>（紫）</td>
   <td><code>#800080</code></td>
   <td style="background: purple;"></td>
  </tr>
  <tr>
   <td style="background: #F0F;"></td>
   <td style="text-align: center;"><code>fuchsia</code>（紫红）</td>
   <td><code>#ff00ff</code></td>
   <td style="background: fuchsia;"></td>
  </tr>
  <tr>
   <td style="background: #008000;"></td>
   <td style="text-align: center;"><code>green</code>（绿）</td>
   <td><code>#008000</code></td>
   <td style="background: green;"></td>
  </tr>
  <tr>
   <td style="background: #0F0;"></td>
   <td style="text-align: center;"><code>lime</code>（绿黄）</td>
   <td><code>#00ff00</code></td>
   <td style="background: lime;"></td>
  </tr>
  <tr>
   <td style="background: #808000;"></td>
   <td style="text-align: center;"><code>olive</code>（橄榄绿）</td>
   <td><code>#808000</code></td>
   <td style="background: olive;"></td>
  </tr>
  <tr>
   <td style="background: #FF0;"></td>
   <td style="text-align: center;"><code>yellow</code>（黄）</td>
   <td><code>#ffff00</code></td>
   <td style="background: yellow;"></td>
  </tr>
  <tr>
   <td style="background: #000080;"></td>
   <td style="text-align: center;"><code>navy</code>（藏青）</td>
   <td><code>#000080</code></td>
   <td style="background: navy;"></td>
  </tr>
  <tr>
   <td style="background: #00F;"></td>
   <td style="text-align: center;"><code>blue</code>（蓝）</td>
   <td><code>#0000ff</code></td>
   <td style="background: blue;"></td>
  </tr>
  <tr>
   <td style="background: #008080;"></td>
   <td style="text-align: center;"><code>teal</code>（青）</td>
   <td><code>#008080</code></td>
   <td style="background: teal;"></td>
  </tr>
  <tr>
   <td style="background: #0FF;"></td>
   <td style="text-align: center;"><code>aqua</code>（水绿）</td>
   <td><code>#00ffff</code></td>
   <td style="background: aqua;"></td>
  </tr>
  <tr>
   <td><a class="external" href="https://www.w3.org/TR/CSS2/" hreflang="en" rel="noopener" title="CSS Level&nbsp;2 (Revision&nbsp;1)" lang="en">CSS Level&nbsp;2 (Revision&nbsp;1)</a></td>
   <td style="background: #FFA500;"></td>
   <td style="text-align: center;"><code>orange</code>（橙）</td>
   <td><code>#ffa500</code></td>
   <td style="background: orange;"></td>
  </tr>
  <tr>
   <td rowspan="128"><a class="external" href="https://drafts.csswg.org/css-color-3/" hreflang="en" rel="noopener" title="CSS Color Module Level&nbsp;3" lang="en">CSS Color Module Level&nbsp;3</a></td>
   <td style="background: #f0f8ff;"></td>
   <td style="text-align: center;"><code>aliceblue</code>（浅灰蓝）</td>
   <td><code>#f0f8ff</code></td>
   <td style="background: aliceblue;"></td>
  </tr>
  <tr>
   <td style="background: #faebd7;"></td>
   <td style="text-align: center;"><code>antiquewhite</code>（古董白）</td>
   <td><code>#faebd7</code></td>
   <td style="background: antiquewhite;"></td>
  </tr>
  <tr>
   <td style="background: #7fffd4;"></td>
   <td style="text-align: center;"><code>aquamarine</code>（海蓝）</td>
   <td><code>#7fffd4</code></td>
   <td style="background: aquamarine;"></td>
  </tr>
  <tr>
   <td style="background: #f0ffff;"></td>
   <td style="text-align: center;"><code>azure</code>（蔚蓝）</td>
   <td><code>#f0ffff</code></td>
   <td style="background: azure;"></td>
  </tr>
  <tr>
   <td style="background: #f5f5dc;"></td>
   <td style="text-align: center;"><code>beige</code>（浅褐）</td>
   <td><code>#f5f5dc</code></td>
   <td style="background: beige;"></td>
  </tr>
  <tr>
   <td style="background: #ffe4c4;"></td>
   <td style="text-align: center;"><code>bisque</code>（橘黄）</td>
   <td><code>#ffe4c4</code></td>
   <td style="background: bisque;"></td>
  </tr>
  <tr>
   <td style="background: #ffebcd;"></td>
   <td style="text-align: center;"><code>blanchedalmond</code>（杏仁白）</td>
   <td><code>#ffebcd</code></td>
   <td style="background: blanchedalmond;"></td>
  </tr>
  <tr>
   <td style="background: #8a2be2;"></td>
   <td style="text-align: center;"><code>blueviolet</code>（蓝紫）</td>
   <td><code>#8a2be2</code></td>
   <td style="background: blueviolet;"></td>
  </tr>
  <tr>
   <td style="background: #a52a2a;"></td>
   <td style="text-align: center;"><code>brown</code>（褐）</td>
   <td><code>#a52a2a</code></td>
   <td style="background: brown;"></td>
  </tr>
  <tr>
   <td style="background: #deb887;"></td>
   <td style="text-align: center;"><code>burlywood</code>（原木色）</td>
   <td><code>#deb887</code></td>
   <td style="background: burlywood;"></td>
  </tr>
  <tr>
   <td style="background: #5f9ea0;"></td>
   <td style="text-align: center;"><code>cadetblue</code>（灰蓝）</td>
   <td><code>#5f9ea0</code></td>
   <td style="background: cadetblue;"></td>
  </tr>
  <tr>
   <td style="background: #7fff00;"></td>
   <td style="text-align: center;"><code>chartreuse</code>（黄绿）</td>
   <td><code>#7fff00</code></td>
   <td style="background: chartreuse;"></td>
  </tr>
  <tr>
   <td style="background: #d2691e;"></td>
   <td style="text-align: center;"><code>chocolate</code>（巧克力色）</td>
   <td><code>#d2691e</code></td>
   <td style="background: chocolate;"></td>
  </tr>
  <tr>
   <td style="background: #ff7f50;"></td>
   <td style="text-align: center;"><code>coral</code>（珊瑚红）</td>
   <td><code>#ff7f50</code></td>
   <td style="background: coral;"></td>
  </tr>
  <tr>
   <td style="background: #6495ed;"></td>
   <td style="text-align: center;"><code>cornflowerblue</code>（矢车菊蓝）</td>
   <td><code>#6495ed</code></td>
   <td style="background: cornflowerblue;"></td>
  </tr>
  <tr>
   <td style="background: #fff8dc;"></td>
   <td style="text-align: center;"><code>cornsilk</code>（玉米穗黄）</td>
   <td><code>#fff8dc</code></td>
   <td style="background: cornsilk;"></td>
  </tr>
  <tr>
   <td style="background: #dc143c;"></td>
   <td style="text-align: center;"><code>crimson</code>（深红）</td>
   <td><code>#dc143c</code></td>
   <td style="background: crimson;"></td>
  </tr>
  <tr>
   <td style="background: #00008b;"></td>
   <td style="text-align: center;"><code>darkblue</code>（深蓝）</td>
   <td><code>#00008b</code></td>
   <td style="background: darkblue;"></td>
  </tr>
  <tr>
   <td style="background: #008b8b;"></td>
   <td style="text-align: center;"><code>darkcyan</code>（深青）</td>
   <td><code>#008b8b</code></td>
   <td style="background: darkcyan;"></td>
  </tr>
  <tr>
   <td style="background: #b8860b;"></td>
   <td style="text-align: center;"><code>darkgoldenrod</code>（暗金）</td>
   <td><code>#b8860b</code></td>
   <td style="background: darkgoldenrod;"></td>
  </tr>
  <tr>
   <td style="background: #a9a9a9;"></td>
   <td style="text-align: center;"><code>darkgray</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（深灰）</td>
   <td><code>#a9a9a9</code></td>
   <td style="background: darkgray;"></td>
  </tr>
  <tr>
   <td style="background: #006400;"></td>
   <td style="text-align: center;"><code>darkgreen</code>（深绿）</td>
   <td><code>#006400</code></td>
   <td style="background: darkgreen;"></td>
  </tr>
  <tr>
   <td style="background: #a9a9a9;"></td>
   <td style="text-align: center;"><code>darkgrey</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（深灰）</td>
   <td><code>#a9a9a9</code></td>
   <td style="background: darkgrey;"></td>
  </tr>
  <tr>
   <td style="background: #bdb76b;"></td>
   <td style="text-align: center;"><code>darkkhaki</code>（暗黄褐）</td>
   <td><code>#bdb76b</code></td>
   <td style="background: darkkhaki;"></td>
  </tr>
  <tr>
   <td style="background: #8b008b;"></td>
   <td style="text-align: center;"><code>darkmagenta</code>（深紫）</td>
   <td><code>#8b008b</code></td>
   <td style="background: darkmagenta;"></td>
  </tr>
  <tr>
   <td style="background: #556b2f;"></td>
   <td style="text-align: center;"><code>darkolivegreen</code>（深橄榄绿）</td>
   <td><code>#556b2f</code></td>
   <td style="background: darkolivegreen;"></td>
  </tr>
  <tr>
   <td style="background: #ff8c00;"></td>
   <td style="text-align: center;"><code>darkorange</code>（深橙）</td>
   <td><code>#ff8c00</code></td>
   <td style="background: darkorange;"></td>
  </tr>
  <tr>
   <td style="background: #9932cc;"></td>
   <td style="text-align: center;"><code>darkorchid</code>（深兰花紫）</td>
   <td><code>#9932cc</code></td>
   <td style="background: darkorchid;"></td>
  </tr>
  <tr>
   <td style="background: #8b0000;"></td>
   <td style="text-align: center;"><code>darkred</code>（深红）</td>
   <td><code>#8b0000</code></td>
   <td style="background: darkred;"></td>
  </tr>
  <tr>
   <td style="background: #e9967a;"></td>
   <td style="text-align: center;"><code>darksalmon</code>（深橙红）</td>
   <td><code>#e9967a</code></td>
   <td style="background: darksalmon;"></td>
  </tr>
  <tr>
   <td style="background: #8fbc8f;"></td>
   <td style="text-align: center;"><code>darkseagreen</code>（深海绿）</td>
   <td><code>#8fbc8f</code></td>
   <td style="background: darkseagreen;"></td>
  </tr>
  <tr>
   <td style="background: #483d8b;"></td>
   <td style="text-align: center;"><code>darkslateblue</code>（暗灰蓝）</td>
   <td><code>#483d8b</code></td>
   <td style="background: darkslateblue;"></td>
  </tr>
  <tr>
   <td style="background: #2f4f4f;"></td>
   <td style="text-align: center;"><code>darkslategray</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（墨绿）</td>
   <td><code>#2f4f4f</code></td>
   <td style="background: darkslategray;"></td>
  </tr>
  <tr>
   <td style="background: #2f4f4f;"></td>
   <td style="text-align: center;"><code>darkslategrey</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（墨绿）</td>
   <td><code>#2f4f4f</code></td>
   <td style="background: darkslategrey;"></td>
  </tr>
  <tr>
   <td style="background: #00ced1;"></td>
   <td style="text-align: center;"><code>darkturquoise</code>（暗宝石绿）</td>
   <td><code>#00ced1</code></td>
   <td style="background: darkturquoise;"></td>
  </tr>
  <tr>
   <td style="background: #9400d3;"></td>
   <td style="text-align: center;"><code>darkviolet</code>（深紫罗兰）</td>
   <td><code>#9400d3</code></td>
   <td style="background: darkviolet;"></td>
  </tr>
  <tr>
   <td style="background: #ff1493;"></td>
   <td style="text-align: center;"><code>deeppink</code>（深粉红）</td>
   <td><code>#ff1493</code></td>
   <td style="background: deeppink;"></td>
  </tr>
  <tr>
   <td style="background: #00bfff;"></td>
   <td style="text-align: center;"><code>deepskyblue</code>（深天蓝）</td>
   <td><code>#00bfff</code></td>
   <td style="background: deepskyblue;"></td>
  </tr>
  <tr>
   <td style="background: #696969;"></td>
   <td style="text-align: center;"><code>dimgray</code><sup><a href="#1" title="color_value#1">[*]</a>（暗灰）</sup></td>
   <td><code>#696969</code></td>
   <td style="background: dimgray;"></td>
  </tr>
  <tr>
   <td style="background: #696969;"></td>
   <td style="text-align: center;"><code>dimgrey</code><sup><a href="#1" title="color_value#1">[*]</a>（暗灰）</sup></td>
   <td><code>#696969</code></td>
   <td style="background: dimgrey;"></td>
  </tr>
  <tr>
   <td style="background: #1e90ff;"></td>
   <td style="text-align: center;"><code>dodgerblue</code>（遮板蓝）</td>
   <td><code>#1e90ff</code></td>
   <td style="background: dodgerblue;"></td>
  </tr>
  <tr>
   <td style="background: #b22222;"></td>
   <td style="text-align: center;"><code>firebrick</code>（砖红）</td>
   <td><code>#b22222</code></td>
   <td style="background: firebrick;"></td>
  </tr>
  <tr>
   <td style="background: #fffaf0;"></td>
   <td style="text-align: center;"><code>floralwhite</code>（花白）</td>
   <td><code>#fffaf0</code></td>
   <td style="background: floralwhite;"></td>
  </tr>
  <tr>
   <td style="background: #228b22;"></td>
   <td style="text-align: center;"><code>forestgreen</code>（丛林绿）</td>
   <td><code>#228b22</code></td>
   <td style="background: forestgreen;"></td>
  </tr>
  <tr>
   <td style="background: #dcdcdc;"></td>
   <td style="text-align: center;"><code>gainsboro</code>（浅灰）</td>
   <td><code>#dcdcdc</code></td>
   <td style="background: gainsboro;"></td>
  </tr>
  <tr>
   <td style="background: #f8f8ff;"></td>
   <td style="text-align: center;"><code>ghostwhite</code>（幽灵白）</td>
   <td><code>#f8f8ff</code></td>
   <td style="background: ghostwhite;"></td>
  </tr>
  <tr>
   <td style="background: #ffd700;"></td>
   <td style="text-align: center;"><code>gold</code>（金）</td>
   <td><code>#ffd700</code></td>
   <td style="background: gold;"></td>
  </tr>
  <tr>
   <td style="background: #daa520;"></td>
   <td style="text-align: center;"><code>goldenrod</code>（橘黄）</td>
   <td><code>#daa520</code></td>
   <td style="background: goldenrod;"></td>
  </tr>
  <tr>
   <td style="background: #adff2f;"></td>
   <td style="text-align: center;"><code>greenyellow</code>（黄绿）</td>
   <td><code>#adff2f</code></td>
   <td style="background: greenyellow ;"></td>
  </tr>
  <tr>
   <td style="background: #808080;"></td>
   <td style="text-align: center;"><code>grey</code>（灰）</td>
   <td><code>#808080</code></td>
   <td style="background: grey;"></td>
  </tr>
  <tr>
   <td style="background: #f0fff0;"></td>
   <td style="text-align: center;"><code>honeydew</code>（蜜瓜色）</td>
   <td><code>#f0fff0</code></td>
   <td style="background: honeydew;"></td>
  </tr>
  <tr>
   <td style="background: #ff69b4;"></td>
   <td style="text-align: center;"><code>hotpink</code>（亮粉）</td>
   <td><code>#ff69b4</code></td>
   <td style="background: hotpink;"></td>
  </tr>
  <tr>
   <td style="background: #cd5c5c;"></td>
   <td style="text-align: center;"><code>indianred</code>（印第安红）</td>
   <td><code>#cd5c5c</code></td>
   <td style="background: indianred;"></td>
  </tr>
  <tr>
   <td style="background: #4b0082;"></td>
   <td style="text-align: center;"><code>indigo</code>（靛蓝）</td>
   <td><code>#4b0082</code></td>
   <td style="background: indigo;"></td>
  </tr>
  <tr>
   <td style="background: #fffff0;"></td>
   <td style="text-align: center;"><code>ivory</code>（象牙白）</td>
   <td><code>#fffff0</code></td>
   <td style="background: ivory;"></td>
  </tr>
  <tr>
   <td style="background: #f0e68c;"></td>
   <td style="text-align: center;"><code>khaki</code>（卡其色）</td>
   <td><code>#f0e68c</code></td>
   <td style="background: khaki;"></td>
  </tr>
  <tr>
   <td style="background: #e6e6fa;"></td>
   <td style="text-align: center;"><code>lavender</code>（淡紫）</td>
   <td><code>#e6e6fa</code></td>
   <td style="background: lavender;"></td>
  </tr>
  <tr>
   <td style="background: #fff0f5;"></td>
   <td style="text-align: center;"><code>lavenderblush</code>（淡紫红）</td>
   <td><code>#fff0f5</code></td>
   <td style="background: lavenderblush ;"></td>
  </tr>
  <tr>
   <td style="background: #7cfc00;"></td>
   <td style="text-align: center;"><code>lawngreen</code>（草绿）</td>
   <td><code>#7cfc00</code></td>
   <td style="background: lawngreen;"></td>
  </tr>
  <tr>
   <td style="background: #fffacd;"></td>
   <td style="text-align: center;"><code>lemonchiffon</code>（粉黄）</td>
   <td><code>#fffacd</code></td>
   <td style="background: lemonchiffon;"></td>
  </tr>
  <tr>
   <td style="background: #add8e6;"></td>
   <td style="text-align: center;"><code>lightblue</code>（淡蓝）</td>
   <td><code>#add8e6</code></td>
   <td style="background: lightblue;"></td>
  </tr>
  <tr>
   <td style="background: #f08080;"></td>
   <td style="text-align: center;"><code>lightcoral</code>（浅珊瑚色）</td>
   <td><code>#f08080</code></td>
   <td style="background: lightcoral;"></td>
  </tr>
  <tr>
   <td style="background: #e0ffff;"></td>
   <td style="text-align: center;"><code>lightcyan</code>（淡青）</td>
   <td><code>#e0ffff</code></td>
   <td style="background: lightcyan;"></td>
  </tr>
  <tr>
   <td style="background: #fafad2;"></td>
   <td style="text-align: center;"><code>lightgoldenrodyellow</code>（浅金黄）</td>
   <td><code>#fafad2</code></td>
   <td style="background: lightgoldenrodyellow ;"></td>
  </tr>
  <tr>
   <td style="background: #d3d3d3;"></td>
   <td style="text-align: center;"><code>lightgray</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（浅灰）</td>
   <td><code>#d3d3d3</code></td>
   <td style="background: lightgray;"></td>
  </tr>
  <tr>
   <td style="background: #90ee90;"></td>
   <td style="text-align: center;"><code>lightgreen</code>（浅绿）</td>
   <td><code>#90ee90</code></td>
   <td style="background: lightgreen;"></td>
  </tr>
  <tr>
   <td style="background: #d3d3d3;"></td>
   <td style="text-align: center;"><code>lightgrey</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（浅灰）</td>
   <td><code>#d3d3d3</code></td>
   <td style="background: lightgrey;"></td>
  </tr>
  <tr>
   <td style="background: #ffb6c1;"></td>
   <td style="text-align: center;"><code>lightpink</code>（淡粉）</td>
   <td><code>#ffb6c1</code></td>
   <td style="background: lightpink;"></td>
  </tr>
  <tr>
   <td style="background: #ffa07a;"></td>
   <td style="text-align: center;"><code>lightsalmon</code>（浅肉色）</td>
   <td><code>#ffa07a</code></td>
   <td style="background: lightsalmon;"></td>
  </tr>
  <tr>
   <td style="background: #20b2aa;"></td>
   <td style="text-align: center;"><code>lightseagreen</code>（浅海绿）</td>
   <td><code>#20b2aa</code></td>
   <td style="background: lightseagreen;"></td>
  </tr>
  <tr>
   <td style="background: #87cefa;"></td>
   <td style="text-align: center;"><code>lightskyblue</code>（浅天蓝）</td>
   <td><code>#87cefa</code></td>
   <td style="background: lightskyblue;"></td>
  </tr>
  <tr>
   <td style="background: #778899;"></td>
   <td style="text-align: center;"><code>lightslategray</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（浅青灰）</td>
   <td><code>#778899</code></td>
   <td style="background: lightslategray;"></td>
  </tr>
  <tr>
   <td style="background: #778899;"></td>
   <td style="text-align: center;"><code>lightslategrey</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（浅青灰）</td>
   <td><code>#778899</code></td>
   <td style="background: lightslategrey;"></td>
  </tr>
  <tr>
   <td style="background: #b0c4de;"></td>
   <td style="text-align: center;"><code>lightsteelblue</code>（浅钢蓝）</td>
   <td><code>#b0c4de</code></td>
   <td style="background: lightsteelblue;"></td>
  </tr>
  <tr>
   <td style="background: #ffffe0;"></td>
   <td style="text-align: center;"><code>lightyellow</code>（浅黄）</td>
   <td><code>#ffffe0</code></td>
   <td style="background: lightyellow;"></td>
  </tr>
  <tr>
   <td style="background: #32cd32;"></td>
   <td style="text-align: center;"><code>limegreen</code>（酸橙绿）</td>
   <td><code>#32cd32</code></td>
   <td style="background: limegreen;"></td>
  </tr>
  <tr>
   <td style="background: #faf0e6;"></td>
   <td style="text-align: center;"><code>linen</code>（亚麻色）</td>
   <td><code>#faf0e6</code></td>
   <td style="background: linen;"></td>
  </tr>
  <tr>
   <td style="background: #66cdaa;"></td>
   <td style="text-align: center;"><code>mediumaquamarine</code>（中绿）</td>
   <td><code>#66cdaa</code></td>
   <td style="background: mediumaquamarine;"></td>
  </tr>
  <tr>
   <td style="background: #0000cd;"></td>
   <td style="text-align: center;"><code>mediumblue</code>（中蓝）</td>
   <td><code>#0000cd</code></td>
   <td style="background: mediumblue;"></td>
  </tr>
  <tr>
   <td style="background: #ba55d3;"></td>
   <td style="text-align: center;"><code>mediumorchid</code>（间兰花紫）</td>
   <td><code>#ba55d3</code></td>
   <td style="background: mediumorchid;"></td>
  </tr>
  <tr>
   <td style="background: #9370db;"></td>
   <td style="text-align: center;"><code>mediumpurple</code>（中紫）</td>
   <td><code>#9370db</code></td>
   <td style="background: mediumpurple;"></td>
  </tr>
  <tr>
   <td style="background: #3cb371;"></td>
   <td style="text-align: center;"><code>mediumseagreen</code>（间海绿）</td>
   <td><code>#3cb371</code></td>
   <td style="background: mediumseagreen;"></td>
  </tr>
  <tr>
   <td style="background: #7b68ee;"></td>
   <td style="text-align: center;"><code>mediumslateblue</code>（中暗蓝）</td>
   <td><code>#7b68ee</code></td>
   <td style="background: mediumslateblue;"></td>
  </tr>
  <tr>
   <td style="background: #00fa9a;"></td>
   <td style="text-align: center;"><code>mediumspringgreen</code>（中春绿）</td>
   <td><code>#00fa9a</code></td>
   <td style="background: mediumspringgreen;"></td>
  </tr>
  <tr>
   <td style="background: #48d1cc;"></td>
   <td style="text-align: center;"><code>mediumturquoise</code>（中海湖蓝）</td>
   <td><code>#48d1cc</code></td>
   <td style="background: mediumturquoise;"></td>
  </tr>
  <tr>
   <td style="background: #c71585;"></td>
   <td style="text-align: center;"><code>mediumvioletred</code>（中紫罗兰）</td>
   <td><code>#c71585</code></td>
   <td style="background: mediumvioletred;"></td>
  </tr>
  <tr>
   <td style="background: #191970;"></td>
   <td style="text-align: center;"><code>midnightblue</code>（午夜蓝）</td>
   <td><code>#191970</code></td>
   <td style="background: midnightblue;"></td>
  </tr>
  <tr>
   <td style="background: #f5fffa;"></td>
   <td style="text-align: center;"><code>mintcream</code>（薄荷乳白）</td>
   <td><code>#f5fffa</code></td>
   <td style="background: mintcream;"></td>
  </tr>
  <tr>
   <td style="background: #ffe4e1;"></td>
   <td style="text-align: center;"><code>mistyrose</code>（粉玫瑰红）</td>
   <td><code>#ffe4e1</code></td>
   <td style="background: mistyrose;"></td>
  </tr>
  <tr>
   <td style="background: #ffe4b5;"></td>
   <td style="text-align: center;"><code>moccasin</code>（鹿皮色）</td>
   <td><code>#ffe4b5</code></td>
   <td style="background: moccasin;"></td>
  </tr>
  <tr>
   <td style="background: #ffdead;"></td>
   <td style="text-align: center;"><code>navajowhite</code>（纳瓦白）</td>
   <td><code>#ffdead</code></td>
   <td style="background: navajowhite;"></td>
  </tr>
  <tr>
   <td style="background: #fdf5e6;"></td>
   <td style="text-align: center;"><code>oldlace</code>（浅米色）</td>
   <td><code>#fdf5e6</code></td>
   <td style="background: oldlace;"></td>
  </tr>
  <tr>
   <td style="background: #6b8e23;"></td>
   <td style="text-align: center;"><code>olivedrab</code>（橄榄褐）</td>
   <td><code>#6b8e23</code></td>
   <td style="background: olivedrab;"></td>
  </tr>
  <tr>
   <td style="background: #ff4500;"></td>
   <td style="text-align: center;"><code>orangered</code>（橙红）</td>
   <td><code>#ff4500</code></td>
   <td style="background: orangered;"></td>
  </tr>
  <tr>
   <td style="background: #da70d6;"></td>
   <td style="text-align: center;"><code>orchid</code>（兰花紫）</td>
   <td><code>#da70d6</code></td>
   <td style="background: orchid;"></td>
  </tr>
  <tr>
   <td style="background: #eee8aa;"></td>
   <td style="text-align: center;"><code>palegoldenrod</code>（灰菊黄）</td>
   <td><code>#eee8aa</code></td>
   <td style="background: palegoldenrod;"></td>
  </tr>
  <tr>
   <td style="background: #98fb98;"></td>
   <td style="text-align: center;"><code>palegreen</code>（苍绿）</td>
   <td><code>#98fb98</code></td>
   <td style="background: palegreen;"></td>
  </tr>
  <tr>
   <td style="background: #afeeee;"></td>
   <td style="text-align: center;"><code>paleturquoise</code>（苍宝石绿）</td>
   <td><code>#afeeee</code></td>
   <td style="background: paleturquoise;"></td>
  </tr>
  <tr>
   <td style="background: #db7093;"></td>
   <td style="text-align: center;"><code>palevioletred</code>（苍紫罗兰）</td>
   <td><code>#db7093</code></td>
   <td style="background: palevioletred;"></td>
  </tr>
  <tr>
   <td style="background: #ffefd5;"></td>
   <td style="text-align: center;"><code>papayawhip</code>（木瓜色）</td>
   <td><code>#ffefd5</code></td>
   <td style="background: papayawhip;"></td>
  </tr>
  <tr>
   <td style="background: #ffdab9;"></td>
   <td style="text-align: center;"><code>peachpuff</code>（桃色）</td>
   <td><code>#ffdab9</code></td>
   <td style="background: peachpuff;"></td>
  </tr>
  <tr>
   <td style="background: #cd853f;"></td>
   <td style="text-align: center;"><code>peru</code>（秘鲁色）</td>
   <td><code>#cd853f</code></td>
   <td style="background: peru;"></td>
  </tr>
  <tr>
   <td style="background: #ffc0cb;"></td>
   <td style="text-align: center;"><code>pink</code>（粉）</td>
   <td><code>#ffc0cb</code></td>
   <td style="background: pink;"></td>
  </tr>
  <tr>
   <td style="background: #dda0dd;"></td>
   <td style="text-align: center;"><code>plum</code>（李子色）</td>
   <td><code>#dda0dd</code></td>
   <td style="background: plum;"></td>
  </tr>
  <tr>
   <td style="background: #b0e0e6;"></td>
   <td style="text-align: center;"><code>powderblue</code>（粉蓝）</td>
   <td><code>#b0e0e6</code></td>
   <td style="background: powderblue;"></td>
  </tr>
  <tr>
   <td style="background: #bc8f8f;"></td>
   <td style="text-align: center;"><code>rosybrown</code>（玫瑰粽）</td>
   <td><code>#bc8f8f</code></td>
   <td style="background: rosybrown;"></td>
  </tr>
  <tr>
   <td style="background: #4169e1;"></td>
   <td style="text-align: center;"><code>royalblue</code>（宝蓝）</td>
   <td><code>#4169e1</code></td>
   <td style="background: royalblue;"></td>
  </tr>
  <tr>
   <td style="background: #8b4513;"></td>
   <td style="text-align: center;"><code>saddlebrown</code>（马鞍棕）</td>
   <td><code>#8b4513</code></td>
   <td style="background: saddlebrown;"></td>
  </tr>
  <tr>
   <td style="background: #fa8072;"></td>
   <td style="text-align: center;"><code>salmon</code>（鲑肉色）</td>
   <td><code>#fa8072</code></td>
   <td style="background: salmon;"></td>
  </tr>
  <tr>
   <td style="background: #f4a460;"></td>
   <td style="text-align: center;"><code>sandybrown</code>（沙褐色）</td>
   <td><code>#f4a460</code></td>
   <td style="background: sandybrown;"></td>
  </tr>
  <tr>
   <td style="background: #2e8b57;"></td>
   <td style="text-align: center;"><code>seagreen</code>（海绿）</td>
   <td><code>#2e8b57</code></td>
   <td style="background: seagreen;"></td>
  </tr>
  <tr>
   <td style="background: #fff5ee;"></td>
   <td style="text-align: center;"><code>seashell</code>（贝壳白）</td>
   <td><code>#fff5ee</code></td>
   <td style="background: seashell;"></td>
  </tr>
  <tr>
   <td style="background: #a0522d;"></td>
   <td style="text-align: center;"><code>sienna</code>（赭）</td>
   <td><code>#a0522d</code></td>
   <td style="background: sienna;"></td>
  </tr>
  <tr>
   <td style="background: #87ceeb;"></td>
   <td style="text-align: center;"><code>skyblue</code>（天蓝）</td>
   <td><code>#87ceeb</code></td>
   <td style="background: skyblue;"></td>
  </tr>
  <tr>
   <td style="background: #6a5acd;"></td>
   <td style="text-align: center;"><code>slateblue</code>（青蓝）</td>
   <td><code>#6a5acd</code></td>
   <td style="background: slateblue;"></td>
  </tr>
  <tr>
   <td style="background: #708090;"></td>
   <td style="text-align: center;"><code>slategray</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（青灰）</td>
   <td><code>#708090</code></td>
   <td style="background: slategray;"></td>
  </tr>
  <tr>
   <td style="background: #708090;"></td>
   <td style="text-align: center;"><code>slategrey</code><sup><a href="#1" title="color_value#1">[*]</a></sup>（青灰）</td>
   <td><code>#708090</code></td>
   <td style="background: slategrey;"></td>
  </tr>
  <tr>
   <td style="background: #fffafa;"></td>
   <td style="text-align: center;"><code>snow</code>（雪白）</td>
   <td><code>#fffafa</code></td>
   <td style="background: snow;"></td>
  </tr>
  <tr>
   <td style="background: #00ff7f;"></td>
   <td style="text-align: center;"><code>springgreen</code>（春绿）</td>
   <td><code>#00ff7f</code></td>
   <td style="background: springgreen;"></td>
  </tr>
  <tr>
   <td style="background: #4682b4;"></td>
   <td style="text-align: center;"><code>steelblue</code>（铁青）</td>
   <td><code>#4682b4</code></td>
   <td style="background: steelblue;"></td>
  </tr>
  <tr>
   <td style="background: #d2b48c;"></td>
   <td style="text-align: center;"><code>tan</code>（棕褐）</td>
   <td><code>#d2b48c</code></td>
   <td style="background: tan;"></td>
  </tr>
  <tr>
   <td style="background: #d8bfd8;"></td>
   <td style="text-align: center;"><code>thistle</code>（苍紫）</td>
   <td><code>#d8bfd8</code></td>
   <td style="background: thistle;"></td>
  </tr>
  <tr>
   <td style="background: #ff6347;"></td>
   <td style="text-align: center;"><code>tomato</code>（番茄红）</td>
   <td><code>#ff6347</code></td>
   <td style="background: tomato;"></td>
  </tr>
  <tr>
   <td style="background: #40e0d0;"></td>
   <td style="text-align: center;"><code>turquoise</code>（蓝绿）</td>
   <td><code>#40e0d0</code></td>
   <td style="background: turquoise;"></td>
  </tr>
  <tr>
   <td style="background: #ee82ee;"></td>
   <td style="text-align: center;"><code>violet</code>（紫罗兰色）</td>
   <td><code>#ee82ee</code></td>
   <td style="background: violet;"></td>
  </tr>
  <tr>
   <td style="background: #f5deb3;"></td>
   <td style="text-align: center;"><code>wheat</code>（麦色）</td>
   <td><code>#f5deb3</code></td>
   <td style="background: wheat;"></td>
  </tr>
  <tr>
   <td style="background: #f5f5f5;"></td>
   <td style="text-align: center;"><code>whitesmoke</code>（烟白）</td>
   <td><code>#f5f5f5</code></td>
   <td style="background: whitesmoke;"></td>
  </tr>
  <tr>
   <td style="background: #9acd32;"></td>
   <td style="text-align: center;"><code>yellowgreen</code>（黄绿）</td>
   <td><code>#9acd32</code></td>
   <td style="background: yellowgreen;"></td>
  </tr>
  <tr>
   <td><a class="external" href="https://drafts.csswg.org/css-color/" hreflang="en" rel="noopener" title="CSS Color Module Level&nbsp;4" lang="en">CSS Color Module Level&nbsp;4</a></td>
   <td style="background: #639;"></td>
   <td style="text-align: center;"><code>rebeccapurple</code>（利百加紫）</td>
   <td><code>#663399</code></td>
   <td style="background: rebeccapurple;"></td>
  </tr>
 </tbody>
</table>
<p><a name="1">[*]</a> 从 IE 8.0 开始仅支持 'e'-grey 色 (带 e) (<code>gr<strong>e</strong>y</code>, <code>darkgr<strong>e</strong>y</code>, <code>darkslategr<strong>e</strong>y</code>, <code>dimgr<strong>e</strong>y</code>, <code>lightgr<strong>e</strong>y</code>, <code>lightslategr<strong>e</strong>y</code>) 。 IE 3 到 IE 6 仅支持 'a' 的变体: <code>gr<strong>a</strong>y</code>, <code>darkgr<strong>a</strong>y</code>, <code>darkslategr<strong>a</strong>y</code>, <code>dimgr<strong>a</strong>y</code>, <code>lightgr<strong>a</strong>y</code>, <code>lightslategr<strong>a</strong>y</code>。</p>
<p><a name="2">[**]</a>&nbsp; IE 7-8 只对 <a href="/zh-CN/docs/Web/CSS/background" title="background 是一种 CSS 简写属性，用于一次性集中定义各种背景属性，包括 color, image, origin 与 size, repeat 方式等等。"><code>background</code></a> 和 <a href="/zh-CN/docs/Web/CSS/border" title="CSS的border属性是一个用于设置各种单独的边界属性的简写属性。border可以用于设置一个或多个以下属性的值： border-width, border-style, border-color。"><code>border</code></a> 支持 <code>transparent</code> 关键字。在 IE 下<code> color:transparent</code> 被绘制成黑色。IE6 渲染透明边框也是黑色。</p>