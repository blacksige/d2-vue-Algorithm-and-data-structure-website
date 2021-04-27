<template>
  <d2-container>
    <div class="content">
      <div class="d-block comment-body markdown-body  js-comment-body">

        <h2>1. 定义</h2>
        <ul>
          <li>方法或函数调用自身的方式称为递归调用，调用称为递，返回称为归。</li>
        </ul>
        <p>现实例子：周末你带着女朋友去电影院看电影，女朋友问你，咱们现在坐在第几排啊 ？电影院里面太黑了，看不清，没法数，现在你怎么办 ？</p>
        <p>于是你就问前面一排的人他是第几排，你想只要在他的数字上加一，就知道自己在哪一排了。<br>
          但是，前面的人也看不清啊，所以他也问他前面的人。<br>
          就这样一排一排往前问，直到问到第一排的人，说我在第一排，然后再这样一排一排再把数字传回来。<br>
          直到你前面的人告诉你他在哪一排，于是你就知道答案了。</p>
        <p>基本上，所有的递归问题都可以用递推公式来表示，比如:</p>
        <pre><code>f(n) = f(n-1) + 1; 
// 其中，f(1) = 1 
</code></pre>
        <p>f(n) 表示你想知道自己在哪一排，f(n-1) 表示前面一排所在的排数，f(1) = 1 表示第一排的人知道自己在第一排。</p>
        <p>有了这个递推公式，我们就可以很轻松地将它改为递归代码，如下：</p>
        <pre><code>function f(n) {
  if (n == 1) return 1;
  return f(n-1) + 1;
}
</code></pre>
        <h2>2. 为什么使用递归 ？递归的优缺点 ？</h2>
        <ul>
          <li>优点：代码的表达力很强，写起来简洁。</li>
          <li>缺点：空间复杂度高、有堆栈溢出风险、存在重复计算、过多的函数调用会耗时较多等问题。</li>
        </ul>
        <h2>3. 什么样的问题可以用递归解决呢 ？</h2>
        <p>一个问题只要同时满足以下 3 个条件，就可以用递归来解决。</p>
        <ul>
          <li>
            <ol>
              <li>问题的解可以分解为几个子问题的解。何为子问题 ？就是数据规模更小的问题。<br>
                比如，前面讲的电影院的例子，你要知道，<strong>自己在哪一排</strong>的问题，可以分解为<strong>前一排的人在哪一排</strong>这样一个子问题。</li>
            </ol>
          </li>
          <li>
            <ol start="2">
              <li>问题与子问题，除了数据规模不同，求解思路完全一样<br>
                比如电影院那个例子，你求解<strong>自己在哪一排</strong>的思路，和前面一排人求解<strong>自己在哪一排</strong>的思路，是一模一样的。</li>
            </ol>
          </li>
          <li>
            <ol start="3">
              <li>存在递归终止条件<br>
                比如电影院的例子，第一排的人不需要再继续询问任何人，就知道自己在哪一排，也就是 f(1) = 1，这就是递归的终止条件。</li>
            </ol>
          </li>
        </ul>
        <h2>4. 递归常见问题及解决方案</h2>
        <ul>
          <li>
            <ol>
              <li>警惕堆栈溢出：可以声明一个全局变量来控制递归的深度，从而避免堆栈溢出。</li>
            </ol>
          </li>
          <li>
            <ol start="2">
              <li>警惕重复计算：通过某种数据结构来保存已经求解过的值，从而避免重复计算。</li>
            </ol>
          </li>
        </ul>
        <h2>5. 如何实现递归 ？</h2>
        <p><strong>1. 递归代码编写</strong></p>
        <p>写递归代码的关键就是找到如何将大问题分解为小问题的规律，并且基于此写出递推公式，然后再推敲终止条件，最后将递推公式和终止条件翻译成代码。</p>
        <p><strong>2. 递归代码理解</strong></p>
        <p>对于递归代码，若试图想清楚整个递和归的过程，实际上是进入了一个思维误区。</p>
        <p>那该如何理解递归代码呢 ？</p>
        <ul>
          <li>如果一个问题 A 可以分解为若干个子问题 B、C、D，你可以假设子问题 B、C、D 已经解决。</li>
          <li>而且，你只需要思考问题 A 与子问题 B、C、D 两层之间的关系即可，不需要一层层往下思考子问题与子子问题，子子问题与子子子问题之间的关系。</li>
          <li>屏蔽掉递归细节，这样子理解起来就简单多了。</li>
        </ul>
        <p>因此，<strong>理解递归代码，就把它抽象成一个递推公式，不用想一层层的调用关系，不要试图用人脑去分解递归的每个步骤。</strong></p>
        <h2>6. 例子</h2>
        <h4>1. 一个阶乘的例子：</h4>
        <pre><code>function fact(num) {
  if (num &lt;= 1) {
    return 1;
  } else {
    return num * fact(num - 1);
    }
}
fact(3) // 结果为 6
</code></pre>
        <p>以下代码可导致出错：</p>
        <pre><code>var anotherFact = fact; 
fact = null; 
alert(antherFact(4)); //出错 
</code></pre>
        <p>由于 fact 已经不是函数了，所以出错。</p>
        <p><strong>使用 arguments.callee</strong></p>
        <p>arguments.callee 是一个指向正在执行的函数的指针，arguments.callee 返回正在被执行的对现象。<br>
          新的函数为：</p>
        <pre><code>function fact(num){ 
    if (num &lt;= 1){ 
        return 1; 
    }else{ 
        return num * arguments.callee(num - 1); //此处更改了。 
    } 
} 
var anotherFact = fact; 
fact = null; 
alert(antherFact(4)); // 结果为 24
</code></pre>
        <h4>2. 再看一个多叉树的例子</h4>
        <p>先看图</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/7501bae70bc24e57a910253b13fab7e05c25297b9dada540cae40778ad5d6ecc/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636565306538386233396664616561622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/7501bae70bc24e57a910253b13fab7e05c25297b9dada540cae40778ad5d6ecc/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636565306538386233396664616561622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="多叉树"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-cee0e88b39fdaeab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p><strong>叶子结点</strong>：就是深度为 0 的结点，也就是没有孩子结点的结点，简单的说就是一个二叉树任意一个分支上的终端节点。</p>
        <p>数据结构格式，参考如下代码：</p>
        <pre><code>const json = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        {
          name: 'E',
        },
        {
          name: 'F',
        },
        {
          name: 'G',
        }
      ]
    },
    {
      name: 'C',
      children: [
        {
          name: 'H'
        }
      ]
    },
    {
      name: 'D',
      children: [
        {
          name: 'I',
        },
        {
          name: 'J',
        }
      ]
    }
  ]
}
</code></pre>
        <p><strong>我们如何获取根节点的所有叶子节点个数呢 ？</strong></p>
        <p>递归代码如下：</p>
        <pre><code>/**
 * 获取根节点的所有 叶子节点 个数
 * @param {Object} json Object 对象
 */
function getLeafCountTree(json) {
  if(!json.children){
      return 1;
  } else {
      let leafCount = 0;
      for(let i = 0 ; i &lt; json.children.length ; i++){
          // leafCount = leafCount + getLeafCountTree(json.children[i]);
          leafCount = leafCount + arguments.callee(json.children[i]);
      }
      return leafCount;
  }
}
</code></pre>
        <p>递归遍历是比较常用的方法，比如：省市区遍历成树、多叉树、阶乘等。</p>
      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'page3'
}
</script>

<style lang="scss" scoped>
.content {
  width: 60%;
  margin: 0 auto;
  background-color: #ebf1f6;
  padding: 30px 60px;
  border-radius: 12px;
}
</style>