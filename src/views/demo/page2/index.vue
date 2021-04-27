<template>
  <d2-container>
    <div class="content">
      <div class="d-block comment-body markdown-body  js-comment-body">

        <h2>1. 线性表与非线性表</h2>
        <p><strong>线性表</strong>（Linear List）：就是数据排成像一条线一样的结构。每个线性表上的数据最多只有前和后两个方向。数组、链表、队列、栈 等就是线性表结构。</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/574771db72ab154edbe2d44e688df15ca5855a2a8028d7af39ae23fab67e7bc0/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636665393938626365303866616534332e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/574771db72ab154edbe2d44e688df15ca5855a2a8028d7af39ae23fab67e7bc0/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636665393938626365303866616534332e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="线性表"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-cfe998bce08fae43.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p><strong>非线性表</strong>：数据之间并不是简单的前后关系。二叉树、堆、图 就是非线性表。</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/76c20596ab327f19827b8f9268ec8bf37a3247773cc899e7deaa5fde18f3ec11/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d396164376138393434323430313036622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/76c20596ab327f19827b8f9268ec8bf37a3247773cc899e7deaa5fde18f3ec11/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d396164376138393434323430313036622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="非线性表"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-9ad7a8944240106b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>本文主要讲线性表，非线性表会在后面章节讲。</p>
        <h2>2. 数组</h2>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/a4e2ab042dd34f9758d82d1b0dfd1d372393a6cc3f4463d28a90ee76ead2209b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d333333323832306632623365346466322e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/a4e2ab042dd34f9758d82d1b0dfd1d372393a6cc3f4463d28a90ee76ead2209b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d333333323832306632623365346466322e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="数组"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-3332820f2b3e4df2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h3>定义</h3>
        <ul>
          <li>数组 (Array) 是一个有序的数据集合，我们可以通过数组名称 (name) 和索引 (index) 进行访问。</li>
          <li>数组的索引是从 0 开始的。</li>
        </ul>
        <h3>特点</h3>
        <ul>
          <li>
            <p><strong>数组是用一组连续的内存空间来存储的</strong>。<br>
              所以数组支持 <strong>随机访问</strong>，根据下标随机访问的时间复杂度为 O(1)。</p>
          </li>
          <li>
            <p><strong>低效的插入和删除</strong>。<br>
              数组为了保持内存数据的连续性，会导致插入、删除这两个操作比较低效，因为底层通常是要进行大量的数据搬移来保持数据的连续性。<br>
              插入与删除的时间复杂度如下：<br>
              插入：从最好 O(1) ，最坏 O(n) ，平均 O(n)<br>
              删除：从最好 O(1) ，最坏 O(n) ，平均 O(n)</p>
          </li>
        </ul>
        <h3>注意</h3>
        <p>但是因为 JavaScript 是<strong>弱类型</strong>的语言，弱类型则允许隐式类型转换。</p>
        <p><strong>隐式</strong>：是指源码中没有明显的类型转换代码。也就是说，一个变量，可以赋值字符串，也可以赋值数值。</p>
        <pre><code>let str = "string"
str = 123 
console.log(str)  //   123
</code></pre>
        <p>你还可以直接让字符串类型的变量和数值类型的变量相加，虽然得出的最终结果未必是你想象的那样，但一定不会报错。</p>
        <pre><code>let a = 123
let b = "456"
let c = a + b
// 数值加字符串，结果是字符串
console.log(c)  //   "123456"
</code></pre>
        <p>数组的每一项可以是不同的类型，比如：</p>
        <pre><code>// 数组的类型有 数值、字符串，还可以随意变更类型
const arr = [ 12, 34, "abc" ]
arr[2] = { "key": "value" }  // 把数组的第二项变成对象
console.log(arr) //  [ 12, 34,  { "key": "value"} ]
</code></pre>
        <p>定义的数组的大小是可变的，不像强类型语言，定义某个数组变量的时候就要定义该变量的大小。</p>
        <pre><code>const arr = [ 12, 34, "abc"] 
arr.push({ "key": "value" }) // 添加一项 对象
consolelog(arr) //  [ 12, 34, "abc", { "key": "value" } ]
</code></pre>
        <h3>实现</h3>
        <p>JavaScript 原生支持数组，而且提供了很多操作方法，这里不展开讲。</p>
        <h2>3. 栈</h2>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/6671f8d469bae98bd135d6b4224a9f126267d7b235451d5e2aacff834c9b1148/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d363131303632336634306331616438362e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/6671f8d469bae98bd135d6b4224a9f126267d7b235451d5e2aacff834c9b1148/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d363131303632336634306331616438362e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="栈"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-6110623f40c1ad86.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h3>定义</h3>
        <ol>
          <li>后进者先出，先进者后出，简称 <strong>后进先出</strong>（LIFO），这就是典型的<strong>栈</strong>结构。</li>
          <li>新添加的或待删除的元素都保存在栈的末尾，称作<strong>栈顶</strong>，另一端就叫<strong>栈底</strong>。</li>
          <li>在栈里，新元素都靠近栈顶，旧元素都接近栈底。</li>
          <li>从栈的操作特性来看，是一种 <strong>操作受限</strong>的线性表，只允许在一端插入和删除数据。</li>
          <li>不包含任何元素的栈称为<strong>空栈</strong>。</li>
        </ol>
        <p>栈也被用在编程语言的编译器和内存中保存变量、方法调用等，比如函数的调用栈。</p>
        <h3>实现</h3>
        <p>栈的方法：</p>
        <ul>
          <li>push(element)：添加一个（或几个）新元素到栈顶。</li>
          <li>pop()：移除栈顶的元素，同时返回被移除的元素。</li>
          <li>peek()：返回栈顶的元素，不对栈做任何修改。</li>
          <li>isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。</li>
          <li>clear()：移除栈里的所有元素。</li>
          <li>size()：返回栈里的元素个数。</li>
        </ul>
        <pre><code>// Stack类
function Stack() {
  this.items = [];

  // 添加新元素到栈顶
  this.push = function(element) {
    this.items.push(element);
  };
  // 移除栈顶元素，同时返回被移除的元素
  this.pop = function() {
    return this.items.pop();
  };
  // 查看栈顶元素
  this.peek = function() {
    return this.items[this.items.length - 1];
  };
  // 判断是否为空栈
  this.isEmpty = function() {
    return this.items.length === 0;
  };
  // 清空栈
  this.clear = function() {
    this.items = [];
  };
  // 查询栈的长度
  this.size = function() {
    return this.items.length;
  };
  // 打印栈里的元素
  this.print = function() {
    console.log(this.items.toString());
  };
}
</code></pre>
        <p>测试：</p>
        <pre><code>// 创建Stack实例
var stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(5); // undefined
stack.push(8); // undefined
console.log(stack.peek()); // 8
stack.push(11); // undefined
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false
stack.push(15); // undefined
stack.pop(); // 15
console.log(stack.size()); // 3
stack.print(); // 5,8,11
stack.clear(); // undefined
console.log(stack.size()); // 0
</code></pre>
        <h2>4. 队列</h2>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/99ec4af808129ddb40d8fbfdbc62b1b7567774965638e17ba611467dd411857c/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d653136626230653833303563616136622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/99ec4af808129ddb40d8fbfdbc62b1b7567774965638e17ba611467dd411857c/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d653136626230653833303563616136622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="队列"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-e16bb0e8305caa6b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h3>普通队列</h3>
        <h4>定义</h4>
        <ul>
          <li>队列是遵循 FIFO（First In First Out，<strong>先进先出</strong>）原则的一组有序的项。</li>
          <li>队列在尾部添加新元素，并从顶部移除元素。</li>
          <li>最新添加的元素必须排在队列的末尾。</li>
          <li>队列只有 入队 push() 和出队 pop()。</li>
        </ul>
        <h4>实现</h4>
        <p>队列里面有一些声明的辅助方法：</p>
        <ul>
          <li>enqueue(element)：向队列尾部添加新项。</li>
          <li>dequeue()：移除队列的第一项，并返回被移除的元素。</li>
          <li>front()：返回队列中第一个元素，队列不做任何变动。</li>
          <li>isEmpty()：如果队列中不包含任何元素，返回 true，否则返回 false。</li>
          <li>size()：返回队列包含的元素个数，与数组的 length 属性类似。</li>
          <li>print()：打印队列中的元素。</li>
          <li>clear()：清空整个队列。</li>
        </ul>
        <p>代码：</p>
        <pre><code>// Queue类
function Queue() {
	this.items = [];

	// 向队列尾部添加元素
	this.enqueue = function(element) {
		this.items.push(element);
	};

	// 移除队列的第一个元素，并返回被移除的元素
	this.dequeue = function() {
		return this.items.shift();
	};

	// 返回队列的第一个元素
	this.front = function() {
		return this.items[0];
	};

	// 判断是否为空队列
	this.isEmpty = function() {
		return this.items.length === 0;
	};

	// 获取队列的长度
	this.size = function() {
		return this.items.length;
	};

	// 清空队列
	this.clear = function() {
		this.items = [];
	};

	// 打印队列里的元素
	this.print = function() {
		console.log(this.items.toString());
	};
}
</code></pre>
        <p>测试：</p>
        <pre><code>// 创建Queue实例
var queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue('John'); // undefined
queue.enqueue('Jack'); // undefined
queue.enqueue('Camila'); // undefined
queue.print(); // "John,Jack,Camila"
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
queue.dequeue(); // "John"
queue.dequeue(); // "Jack"
queue.print(); // "Camila"
queue.clear(); // undefined
console.log(queue.size()); // 0
</code></pre>
        <h3>优先队列</h3>
        <h4>定义</h4>
        <p>优先队列中元素的添加和移除是依赖<strong>优先级</strong>的。</p>
        <p><strong>应用</strong></p>
        <ul>
          <li>一个现实的例子就是机场登机的顺序。头等舱和商务舱乘客的优先级要高于经济舱乘客。</li>
          <li>再比如：火车，老年人、孕妇和带小孩的乘客是享有优先检票权的。</li>
        </ul>
        <p><strong>优先队列分为两类</strong></p>
        <ul>
          <li>最小优先队列</li>
          <li>最大优先队列</li>
        </ul>
        <p>最小优先队列是把优先级的值最小的元素被放置到队列的最前面（代表最高的优先级）。<br>
          比如：有四个元素："John", "Jack", "Camila", "Tom"，他们的优先级值分别为 4，3，2，1。<br>
          那么最小优先队列排序应该为："Tom"，"Camila"，"Jack"，"John"。</p>
        <p>最大优先队列正好相反，把优先级值最大的元素放置在队列的最前面。<br>
          以上面的为例，最大优先队列排序应该为："John", "Jack", "Camila", "Tom"。</p>
        <p><strong>实现</strong></p>
        <p>实现一个优先队列，有两种选项：</p>
        <ul>
          <li>
            <ol>
              <li>设置优先级，根据优先级正确添加元素，然后和普通队列一样正常移除</li>
            </ol>
          </li>
          <li>
            <ol start="2">
              <li>设置优先级，和普通队列一样正常按顺序添加，然后根据优先级移除</li>
            </ol>
          </li>
        </ul>
        <p>这里最小优先队列和最大优先队列我都采用第一种方式实现，大家可以尝试一下第二种。</p>
        <p>下面只重写 enqueue() 方法和 print() 方法，其他方法和上面的普通队列完全相同。</p>
        <p><strong>实现最小优先队列</strong></p>
        <pre><code>// 定义最小优先队列
function MinPriorityQueue () {
  this.items = [];

  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.isEmpty = isEmpty;
  this.size = size;
  this.clear = clear;
  this.print = print;
}
</code></pre>
        <p>实现最小优先队列 enqueue() 方法和 print() 方法：</p>
        <pre><code>// 优先队列添加元素，要根据优先级判断在队列中的插入顺序
function enqueue (element, priority) {
  var queueElement = {
    element: element,
    priority: priority
  };

  if (this.isEmpty()) {
    this.items.push(queueElement);
  } else {
    var added = false;
    for (var i = 0; i &lt; this.size(); i++) {
      if (queueElement.priority &lt; this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break ;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }
}

// 打印队列里的元素
function print () {
  var strArr = [];

  strArr = this.items.map(function (item) {
    return `${item.element}-&gt;${item.priority}`;
  });

  console.log(strArr.toString());
}
</code></pre>
        <p>最小优先队列测试：</p>
        <pre><code>// 创建最小优先队列minPriorityQueue实例
var minPriorityQueue = new MinPriorityQueue();

console.log(minPriorityQueue.isEmpty());     // true
minPriorityQueue.enqueue("John", 1);         // undefined
minPriorityQueue.enqueue("Jack", 3);         // undefined
minPriorityQueue.enqueue("Camila", 2);       // undefined
minPriorityQueue.enqueue("Tom", 3);          // undefined
minPriorityQueue.print();                    // "John-&gt;1,Camila-&gt;2,Jack-&gt;3,Tom-&gt;3"
console.log(minPriorityQueue.size());        // 4
console.log(minPriorityQueue.isEmpty());     // false
minPriorityQueue.dequeue();                  // {element: "John", priority: 1}
minPriorityQueue.dequeue();                  // {element: "Camila", priority: 2}
minPriorityQueue.print();                    // "Jack-&gt;3,Tom-&gt;3"
minPriorityQueue.clear();                    // undefined
console.log(minPriorityQueue.size());        // 0
</code></pre>
        <p><strong>实现最大优先队列</strong></p>
        <pre><code>// 最大优先队列 MaxPriorityQueue 类
function MaxPriorityQueue () {
  this.items = [];

  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.isEmpty = isEmpty;
  this.size = size;
  this.clear = clear;
  this.print = print;
}

// 优先队列添加元素，要根据优先级判断在队列中的插入顺序
function enqueue (element, priority) {
  var queueElement = {
    element: element,
    priority: priority
  };

  if (this.isEmpty()) {
    this.items.push(queueElement);
  } else {
    var added = false;

    for (var i = 0; i &lt; this.items.length; i++) {
      // 注意，只需要将这里改为大于号就可以了
      if (queueElement.priority &gt; this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break ;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }
}
</code></pre>
        <p>最大优先队列测试：</p>
        <pre><code>// 创建最大优先队列maxPriorityQueue实例
var maxPriorityQueue = new MaxPriorityQueue();

console.log(maxPriorityQueue.isEmpty());     // true
maxPriorityQueue.enqueue("John", 1);         // undefined
maxPriorityQueue.enqueue("Jack", 3);         // undefined
maxPriorityQueue.enqueue("Camila", 2);       // undefined
maxPriorityQueue.enqueue("Tom", 3);          // undefined
maxPriorityQueue.print();                    // "Jack-&gt;3,Tom-&gt;3,Camila-&gt;2,John-&gt;1"
console.log(maxPriorityQueue.size());        // 4
console.log(maxPriorityQueue.isEmpty());     // false
maxPriorityQueue.dequeue();                  // {element: "Jack", priority: 3}
maxPriorityQueue.dequeue();                  // {element: "Tom", priority: 3}
maxPriorityQueue.print();                    // "Camila-&gt;2,John-&gt;1"
maxPriorityQueue.clear();                    // undefined
console.log(maxPriorityQueue.size());        // 0
</code></pre>
        <h3>循环队列</h3>
        <h4>定义</h4>
        <p>循环队列，顾名思义，它长得像一个环。把它想像成一个圆的钟就对了。</p>
        <p>关键是：确定好队空和队满的判定条件。</p>
        <p>循环队列的一个例子就是击鼓传花游戏（Hot Potato）。在这个游戏中，孩子们围城一个圆圈，击鼓的时候把花尽快的传递给旁边的人。某一时刻击鼓停止，这时花在谁的手里，谁就退出圆圈直到游戏结束。重复这个过程，直到只剩一个孩子（胜者）。</p>
        <p>下面我们在普通队列的基础上，实现一个模拟的击鼓传花游戏，下面只写击鼓传花的代码片段：</p>
        <pre><code>// 实现击鼓传花
function hotPotato (nameList, num) {
  var queue = new Queue();

  for (var i = 0; i &lt; nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';

  while (queue.size() &gt; 1) {
    // 循环 num 次，队首出来去到队尾
    for (var i = 0; i &lt; num; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 循环 num 次过后，移除当前队首的元素
    eliminated = queue.dequeue();
    console.log(`${eliminated} 在击鼓传花中被淘汰！`);
  }

  // 最后只剩一个元素
  return queue.dequeue();
}

// 测试
var nameList = ["John", "Jack", "Camila", "Ingrid", "Carl"];
var winner = hotPotato(nameList, 10);
console.log(`最后的胜利者是：${winner}`);
</code></pre>
        <p>执行结果为：</p>
        <pre><code>// John 在击鼓传花中被淘汰！
// Ingrid 在击鼓传花中被淘汰！ 
// Jack 在击鼓传花中被淘汰！
// Camila 在击鼓传花中被淘汰！
// 最后的胜利者是：Carl
</code></pre>
        <p><strong>队列小结</strong></p>
        <p>一些具有某些额外特性的队列，比如：循环队列、阻塞队列、并发队列。它们在很多偏底层系统、框架、中间件的开发中，起着关键性的作用。</p>
        <h2>5. 链表</h2>
        <h3>定义</h3>
        <ul>
          <li>链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的，它是通过 <strong>指针</strong> 将 <strong>零散的内存块</strong> 串连起来的。</li>
          <li>每个元素由一个存储元素本身的 <strong>节点</strong> 和一个指向下一个元素的 <strong>引用</strong>（也称指针或链接）组成。</li>
        </ul>
        <p>简单的链接结构图：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/626d555992d9ca825cb616a08a0401b6808554b29f60d74a0c390bbd354c7347/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d613463623739336139323736643335382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/626d555992d9ca825cb616a08a0401b6808554b29f60d74a0c390bbd354c7347/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d613463623739336139323736643335382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="单链表结构图"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-a4cb793a9276d358.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>其中，data 中保存着数据，next 保存着下一个链表的引用。<br>
          上图中，我们说 data2 跟在 data1 后面，而不是说 data2 是链表中的第二个元素。值得注意的是，我们将链表的尾元素指向了 null 节点，表示链接结束的位置。</p>
        <h3>特点</h3>
        <ul>
          <li>
            <p><strong>链表是通过指针将零散的内存块串连起来的</strong>。<br>
              所以链表不支持 <strong>随机访问</strong>，如果要找特定的项，只能从头开始遍历，直到找到某个项。<br>
              所以访问的时间复杂度为 O(n)。</p>
          </li>
          <li>
            <p><strong>高效的插入和删除</strong>。<br>
              链表中插入或者删除一个数据，我们并不需要为了保持内存的连续性而搬移结点，因为链表的存储空间本身就不是连续的，只需要考虑相邻结点的指针改变。<br>
              所以，在链表中插入和删除一个数据是非常快速的，时间复杂度为 O(1)。</p>
          </li>
        </ul>
        <p>三种最常见的链表结构，它们分别是：</p>
        <ul>
          <li>单链表</li>
          <li>双向链表</li>
          <li>循环链表</li>
        </ul>
        <h3>单链表</h3>
        <h4>定义</h4>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/626d555992d9ca825cb616a08a0401b6808554b29f60d74a0c390bbd354c7347/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d613463623739336139323736643335382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/626d555992d9ca825cb616a08a0401b6808554b29f60d74a0c390bbd354c7347/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d613463623739336139323736643335382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="单链表结构图"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-a4cb793a9276d358.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>由于链表的起始点的确定比较麻烦，因此很多链表的实现都会在链表的最前面添加一个特殊的节点，称为 <strong>头节点</strong>，表示链表的头部。</p>
        <p>经过改造，链表就成了如下的样子：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/470c561d9a88ef01a2f6efbeaceb81febb070631bd6669fd4518af76fc920f32/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d303632386661333562613066343230352e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/470c561d9a88ef01a2f6efbeaceb81febb070631bd6669fd4518af76fc920f32/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d303632386661333562613066343230352e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="有头节点的链表"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-0628fa35ba0f4205.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>针对链表的插入和删除操作，我们只需要考虑相邻结点的指针改变，所以插入与删除的时间复杂度为 O(1)。</p>
        <p>在 d2 节点后面插入 d4 节点：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/37485900abd8ef4448b41e9d09de2b4679a848c304615143bcfe9b9782170185/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d303638373766373430353163336465622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/37485900abd8ef4448b41e9d09de2b4679a848c304615143bcfe9b9782170185/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d303638373766373430353163336465622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="插入节点"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-06877f74051c3deb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>删除 d4 节点：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/0d13d24b5ff539ed2d1c189438f8db54206df3ea097112030d51acccad7df95e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d343031666135313065313733383735382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/0d13d24b5ff539ed2d1c189438f8db54206df3ea097112030d51acccad7df95e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d343031666135313065313733383735382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="删除节点"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-401fa510e1738758.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h4>实现</h4>
        <ul>
          <li>Node 类用来表示节点。</li>
          <li>LinkedList 类提供插入节点、删除节点等一些操作。</li>
        </ul>
        <p>单向链表的八种常用操作：</p>
        <ul>
          <li>append(element)：尾部添加元素。</li>
          <li>insert(position, element)：特定位置插入一个新的项。</li>
          <li>removeAt(position)：特定位置移除一项。</li>
          <li>remove(element)：移除一项。</li>
          <li>indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回 -1。</li>
          <li>isEmpty()：如果链表中不包含任何元素，返回 true，如果链表长度大于 0，返回 false。</li>
          <li>size()：返回链表包含的元素个数，与数组的 length 属性类似。</li>
          <li>getHead()：返回链表的第一个元素。</li>
          <li>toString()：由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值。</li>
          <li>print()：打印链表的所有元素。</li>
        </ul>
        <p>具体代码：</p>
        <pre><code>// 单链表
function SinglyLinkedList() {
	// 节点
	function Node(element) {
		this.element = element; // 当前节点的元素
		this.next = null; // 下一个节点指针
	}

	var length = 0; // 链表的长度
	var head = null; // 链表的头部节点

	// 向链表尾部添加一个新的节点
	this.append = function(element) {
		var node = new Node(element);
		var currentNode = head;

		// 判断是否为空链表
		if (head === null) {
			// 是空链表，就把当前节点作为头部节点
			head = node;
		} else {
			// 从 head 开始一直找到最后一个 node
			while (currentNode.next) {
				// 后面还有 node
				currentNode = currentNode.next;
			}
			// 把当前节点的 next 指针 指向 新的节点
			currentNode.next = node;
		}
		// 链表的长度加 1
		length++;
	};

	// 向链表特定位置插入一个新节点
	this.insert = function(position, element) {
		if (position &lt; 0 || position &gt; length) {
			// 越界
			return false;
		} else {
			var node = new Node(element);
			var index = 0;
			var currentNode = head;
			var previousNode;

			// 在最前插入节点
			if (position === 0) {
				node.next = currentNode;
				head = node;
			} else {
				// 循环找到位置
				while (index &lt; position) {
					index++;
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
				// 把前一个节点的指针指向新节点，新节点的指针指向当前节点，保持连接性
				previousNode.next = node;
				node.next = currentNode;
			}

			length++;

			return true;
		}
	};

	// 从链表的特定位置移除一项
	this.removeAt = function(position) {
		if ((position &lt; 0 &amp;&amp; position &gt;= length) || length === 0) {
			// 越界
			return false;
		} else {
			var currentNode = head;
			var index = 0;
			var previousNode;

			if (position === 0) {
				head = currentNode.next;
			} else {
				// 循环找到位置
				while (index &lt; position) {
					index++;
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
				// 把当前节点的 next 指针 指向 当前节点的 next 指针，即是 删除了当前节点
				previousNode.next = currentNode.next;
			}

			length--;

			return true;
		}
	};

	// 从链表中移除指定项
	this.remove = function(element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	// 返回元素在链表的索引，如果链表中没有该元素则返回 -1
	this.indexOf = function(element) {
		var currentNode = head;
		var index = 0;

		while (currentNode) {
			if (currentNode.element === element) {
				return index;
			}

			index++;
			currentNode = currentNode.next;
		}

		return -1;
	};

	// 如果链表中不包含任何元素，返回 true，如果链表长度大于 0，返回 false
	this.isEmpty = function() {
		return length === 0;
	};

	// 返回链表包含的元素个数，与数组的 length 属性类似
	this.size = function() {
		return length;
	};

	// 获取链表头部元素
	this.getHead = function() {
		return head.element;
	};

	// 由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值
	this.toString = function() {
		var currentNode = head;
		var string = '';

		while (currentNode) {
			string += ',' + currentNode.element;
			currentNode = currentNode.next;
		}

		return string.slice(1);
	};

	// 打印链表数据
	this.print = function() {
		console.log(this.toString());
	};

	// 获取整个链表
	this.list = function() {
		console.log('head: ', head);
		return head;
	};
}
</code></pre>
        <p>测试：</p>
        <pre><code>// 创建单向链表实例
var singlyLinked = new SinglyLinkedList();
console.log(singlyLinked.removeAt(0)); // false
console.log(singlyLinked.isEmpty()); // true
singlyLinked.append('Tom');
singlyLinked.append('Peter');
singlyLinked.append('Paul');
singlyLinked.print(); // "Tom,Peter,Paul"
singlyLinked.insert(0, 'Susan');
singlyLinked.print(); // "Susan,Tom,Peter,Paul"
singlyLinked.insert(1, 'Jack');
singlyLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(singlyLinked.getHead()); // "Susan"
console.log(singlyLinked.isEmpty()); // false
console.log(singlyLinked.indexOf('Peter')); // 3
console.log(singlyLinked.indexOf('Cris')); // -1
singlyLinked.remove('Tom');
singlyLinked.removeAt(2);
singlyLinked.print(); // "Susan,Jack,Paul"
singlyLinked.list(); // 具体控制台
</code></pre>
        <p>整个链表数据在 JavaScript 里是怎样的呢 ？</p>
        <p>为了看这个数据，特意写了个 list 函数：</p>
        <pre><code>// 获取整个链表
	this.list = function() {
		console.log('head: ', head);
		return head;
	};
</code></pre>
        <p>重点上上面的最后一行代码： singlyLinked.list() ，打印的数据如下：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/23097969bb2cebfb20319bbfd1c30aa0818c1668cc4ba06f6228f6d5693aa792/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d633032353231393836356131633764652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/23097969bb2cebfb20319bbfd1c30aa0818c1668cc4ba06f6228f6d5693aa792/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d633032353231393836356131633764652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-c025219865a1c7de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>所以，在 JavaScript 中，单链表的真实数据有点类似于对象，实际上是 Node 类生成的实例。</p>
        <h3>双向链表</h3>
        <p>单向链表只有一个方向，结点只有一个后继指针 next 指向后面的结点。<br>
          而双向链表，它支持两个方向，每个结点不止有一个后继指针 next 指向后面的结点，还有一个前驱指针 prev 指向前面的结点。</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/fa48d1db9f96432c2af86ac3f9944cd293d90efe90f024f947b8e9ab4cf69f6b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d626138326665346134313464333337322e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/fa48d1db9f96432c2af86ac3f9944cd293d90efe90f024f947b8e9ab4cf69f6b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d626138326665346134313464333337322e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="双向链表"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-ba82fe4a414d3372.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/c352d6c3e41574c2c9ea059d261ff1dfe117e2285bcc40b27f46cb9f6de07be5/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636562666663363234613535323033302e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/c352d6c3e41574c2c9ea059d261ff1dfe117e2285bcc40b27f46cb9f6de07be5/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636562666663363234613535323033302e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="插入"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-cebffc624a552030.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/8bb1fe4bd0fe5f566b64b6419b99be0dd44af5bd2a8530f75054361b519014a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d396435323762353932373962626230632e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/8bb1fe4bd0fe5f566b64b6419b99be0dd44af5bd2a8530f75054361b519014a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d396435323762353932373962626230632e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="删除"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-9d527b59279bbb0c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p><strong>单向链表与又向链表比较</strong></p>
        <ul>
          <li>双向链表需要额外的两个空间来存储后继结点和前驱结点的地址。<br>
            所以，如果存储同样多的数据，双向链表要比单链表占用更多的内存空间。<br>
            虽然两个指针比较浪费存储空间，但可以支持双向遍历，这样也带来了双向链表操作的灵活性。</li>
          <li>双向链表提供了两种迭代列表的方法：<strong>从头到尾，或者从尾到头</strong>。<br>
            我们可以访问一个特定节点的下一个或前一个元素。</li>
          <li>在单向链表中，如果迭代链表时错过了要找的元素，就需要回到链表起点，重新开始迭代。</li>
          <li>在双向链表中，可以从任一节点，向前或向后迭代，这是双向链表的一个优点。</li>
          <li>所以，双向链表可以支持 O(1) 时间复杂度的情况下找到前驱结点，正是这样的特点，也使双向链表在某些情况下的插入、删除等操作都要比单链表简单、高效。</li>
        </ul>
        <h4>实现</h4>
        <p>具体代码：</p>
        <pre><code>// 创建双向链表 DoublyLinkedList 类
function DoublyLinkedList() {
  function Node(element) {
    this.element = element; //当前节点的元素
    this.next = null; //下一个节点指针
    this.previous = null; //上一个节点指针
  }

  var length = 0; // 链表长度
  var head = null; // 链表头部
  var tail = null; // 链表尾部

  // 向链表尾部添加一个新的项
  this.append = function(element) {
    var node = new Node(element);
    var currentNode = tail;

    // 判断是否为空链表
    if (currentNode === null) {
      // 空链表
      head = node;
      tail = node;
    } else {
      currentNode.next = node;
      node.prev = currentNode;
      tail = node;
    }

    length++;
  };

  // 向链表特定位置插入一个新的项
  this.insert = function(position, element) {
    if (position &lt; 0 || position &gt; length) {
      // 越界
      return false;
    } else {
      var node = new Node(element);
      var index = 0;
      var currentNode = head;
      var previousNode;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = currentNode;
          currentNode.prev = node;
          head = node;
        }
      } else if (position === length) {
        this.append(element);
      } else {
        while (index &lt; position) {
          index++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        previousNode.next = node;
        node.next = currentNode;

        node.prev = previousNode;
        currentNode.prev = node;
      }

      length++;

      return true;
    }
  };

  // 从链表的特定位置移除一项
  this.removeAt = function(position) {
    if ((position &lt; 0 &amp;&amp; position &gt;= length) || length === 0) {
      // 越界
      return false;
    } else {
      var currentNode = head;
      var index = 0;
      var previousNode;

      if (position === 0) {
        // 移除第一项
        if (length === 1) {
          head = null;
          tail = null;
        } else {
          head = currentNode.next;
          head.prev = null;
        }
      } else if (position === length - 1) {
        // 移除最后一项
        if (length === 1) {
          head = null;
          tail = null;
        } else {
          currentNode = tail;
          tail = currentNode.prev;
          tail.next = null;
        }
      } else {
        while (index &lt; position) {
          index++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        previousNode = currentNode.next.prev;
      }

      length--;

      return true;
    }
  };

  // 从链表中移除指定项
  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  // 返回元素在链表的索引，如果链表中没有该元素则返回 -1
  this.indexOf = function(element) {
    var currentNode = head;
    var index = 0;

    while (currentNode) {
      if (currentNode.element === element) {
        return index;
      }

      index++;
      currentNode = currentNode.next;
    }

    return -1;
  };

  // 如果链表中不包含任何元素，返回 true ，如果链表长度大于 0 ，返回 false
  this.isEmpty = function() {
    return length == 0;
  };

  // 返回链表包含的元素个数，与数组的 length 属性类似
  this.size = function() {
    return length;
  };

  // 获取链表头部元素
  this.getHead = function() {
    return head.element;
  };

  // 由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值
  this.toString = function() {
    var currentNode = head;
    var string = '';

    while (currentNode) {
      string += ',' + currentNode.element;
      currentNode = currentNode.next;
    }

    return string.slice(1);
  };

  this.print = function() {
    console.log(this.toString());
  };

  // 获取整个链表
  this.list = function() {
    console.log('head: ', head);
    return head;
  };
}
</code></pre>
        <p>测试：</p>
        <pre><code>// 创建双向链表
var doublyLinked = new DoublyLinkedList();
console.log(doublyLinked.isEmpty()); // true
doublyLinked.append('Tom');
doublyLinked.append('Peter');
doublyLinked.append('Paul');
doublyLinked.print(); // "Tom,Peter,Paul"
doublyLinked.insert(0, 'Susan');
doublyLinked.print(); // "Susan,Tom,Peter,Paul"
doublyLinked.insert(1, 'Jack');
doublyLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(doublyLinked.getHead()); // "Susan"
console.log(doublyLinked.isEmpty()); // false
console.log(doublyLinked.indexOf('Peter')); // 3
console.log(doublyLinked.indexOf('Cris')); // -1
doublyLinked.remove('Tom');
doublyLinked.removeAt(2);
doublyLinked.print(); // "Susan,Jack,Paul"
doublyLinked.list(); // 请看控制台输出
</code></pre>
        <p>整个链表数据在 JavaScript 里是怎样的呢 ？</p>
        <pre><code>// 获取整个链表
  this.list = function() {
    console.log('head: ', head);
    return head;
  };
</code></pre>
        <p>调用 doublyLinked.list(); .</p>
        <p>控制台输出如下：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/b2ab5461bda411344399cc33f7e8c81592d4d52d699698ee5ea9798730a17ef2/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d313636393264656635626137636439382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/b2ab5461bda411344399cc33f7e8c81592d4d52d699698ee5ea9798730a17ef2/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d313636393264656635626137636439382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-16692def5ba7cd98.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>链表代码实现的关键是弄清楚：前节点与后节点与边界。</p>
        <h3>循环链表</h3>
        <p>循环链表是一种特殊的单链表。<br>
          循环链表和单链表相似，节点类型都是一样。<br>
          唯一的区别是，在创建循环链表的时候，让其<strong>头节点的 next 属性指向它本身</strong>。<br>
          即：</p>
        <pre><code>head.next = head;
</code></pre>
        <p>这种行为会导致链表中每个节点的 next 属性都指向链表的头节点，换句话说，也就是<strong>链表的尾节点指向了头节点，形成了一个循环链表</strong>。如下图所示：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/521a52f17863a94af409198fa8edbcd3cd1ba924fdab0196e5e134cdb3f94ea3/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d396563356532386238376430643134342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/521a52f17863a94af409198fa8edbcd3cd1ba924fdab0196e5e134cdb3f94ea3/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d396563356532386238376430643134342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="循环链表"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-9ec5e28b87d0d144.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p><strong>循环链表</strong>：在单链表的基础上，将尾节点的指针指向头结点，就构成了一个循环链表。环形链表从任意一个节点开始，都可以遍历整个链表。</p>
        <p>代码：</p>
        <pre><code>// 循环链表
function CircularLinkedList() {
	// 节点
	function Node(element) {
		this.element = element; // 当前节点的元素
		this.next = null; // 下一个节点指针
	}

	var length = 0,
		head = null;

	this.append = function(element) {
		var node = new Node(element),
			current;

		if (!head) {
			head = node;
			// 头的指针指向自己
			node.next = head;
		} else {
			current = head;

			while (current.next !== head) {
				current = current.next;
			}

			current.next = node;
			// 最后一个节点指向头节点
			node.next = head;
		}

		length++;
		return true;
	};

	this.insert = function(position, element) {
		if (position &gt; -1 &amp;&amp; position &lt; length) {
			var node = new Node(element),
				index = 0,
				current = head,
				previous;

			if (position === 0) {
				// 头节点指向自己
				node.next = head;
				head = node;
			} else {
				while (index++ &lt; position) {
					previous = current;
					current = current.next;
				}
				previous.next = node;
				node.next = current;
			}
			length++;
			return true;
		} else {
			return false;
		}
	};
	this.removeAt = function(position) {
		if (position &gt; -1 &amp;&amp; position &lt; length) {
			var current = head,
				previous,
				index = 0;
			if (position === 0) {
				head = current.next;
			} else {
				while (index++ &lt; position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			length--;
			return current.element;
		} else {
			return false;
		}
	};
	this.remove = function(element) {
		var current = head,
			previous,
			indexCheck = 0;
		while (current &amp;&amp; indexCheck &lt; length) {
			if (current.element === element) {
				if (indexCheck == 0) {
					head = current.next;
					length--;
					return true;
				} else {
					previous.next = current.next;
					length--;
					return true;
				}
			} else {
				previous = current;
				current = current.next;
				indexCheck++;
			}
		}
		return false;
	};
	this.remove = function() {
		if (length === 0) {
			return false;
		}
		var current = head,
			previous,
			indexCheck = 0;
		if (length === 1) {
			head = null;
			length--;
			return current.element;
		}
		while (indexCheck++ &lt; length) {
			previous = current;
			current = current.next;
		}
		previous.next = head;
		length--;
		return current.element;
	};
	this.indexOf = function(element) {
		var current = head,
			index = 0;
		while (current &amp;&amp; index &lt; length) {
			if (current.element === element) {
				return index;
			} else {
				index++;
				current = current.next;
			}
		}
		return -1;
	};
	this.isEmpty = function() {
		return length === 0;
	};
	this.size = function() {
		return length;
	};

	// 由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值
	this.toString = function() {
		var current = head,
			string = '',
			indexCheck = 0;
		while (current &amp;&amp; indexCheck &lt; length) {
			string += ',' + current.element;
			current = current.next;
			indexCheck++;
		}
		return string.slice(1);
	};

	// 获取链表头部元素
	this.getHead = function() {
		return head.element;
	};

	// 打印链表数据
	this.print = function() {
		console.log(this.toString());
	};

	// 获取整个链表
	this.list = function() {
		console.log('head: ', head);
		return head;
	};
}
</code></pre>
        <p>测试：</p>
        <pre><code>// 创建单向链表实例
var circularLinked = new CircularLinkedList();
console.log(circularLinked.removeAt(0)); // false
console.log(circularLinked.isEmpty()); // true
circularLinked.append('Tom');
circularLinked.append('Peter');
circularLinked.append('Paul');
circularLinked.print(); // "Tom,Peter,Paul"
circularLinked.insert(0, 'Susan');
circularLinked.print(); // "Susan,Tom,Peter,Paul"
circularLinked.insert(1, 'Jack');
circularLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(circularLinked.getHead()); // "Susan"
console.log(circularLinked.isEmpty()); // false
console.log(circularLinked.indexOf('Peter')); // 3
console.log(circularLinked.indexOf('Cris')); // -1
circularLinked.remove('Tom');
circularLinked.removeAt(2);
circularLinked.print(); // "Susan,Jack,Paul"
circularLinked.list(); // 具体控制台
</code></pre>
        <p>整个链表数据在 JavaScript 里是怎样的呢 ？</p>
        <pre><code>// 获取整个链表
  this.list = function() {
    console.log('head: ', head);
    return head;
  };
</code></pre>
        <p>调用 circularLinked.list() 。</p>
        <p>控制台输出如下：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/0a356edbfd1085ffaea77c27cd69123616b7bedb051ff154c4971b78c358314e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d623931633566393332613966666261352e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/0a356edbfd1085ffaea77c27cd69123616b7bedb051ff154c4971b78c358314e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d623931633566393332613966666261352e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-b91c5f932a9ffba5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>你知道大家发现没有，为什么从 1 - 4 - 1 了，还有 next 节点，而且是还可以一直点 next ，重复的展开下去，这正是 <strong>循环</strong> 的原因。</p>

      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'page2'
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