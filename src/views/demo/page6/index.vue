<template>
  <d2-container>
    <div class="content">
      <div class="d-block comment-body markdown-body  js-comment-body">
        <h2>1. 平均时间复杂度都为 O(nlogn)的算法</h2>
        <p>之所以把<strong>归并排序、快速排序、希尔排序、堆排序</strong>放在一起比较，是因为它们的平均时间复杂度都为 <strong>O(nlogn)</strong>。</p>
        <p>请大家带着问题：<strong>快排和归并用的都是分治思想，递推公式和递归代码也非常相似，那它们的区别在哪里呢 ?</strong> 来阅读下文。</p>
        <h2>2. 归并排序（Merge Sort）</h2>
        <p><strong>思想</strong></p>
        <p>排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了。</p>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1：把长度为n的输入序列分成两个长度为n/2的子序列。</li>
          <li>步骤2：对这两个子序列分别采用归并排序。</li>
          <li>步骤3：将两个排序好的子序列合并成一个最终的排序序列。</li>
        </ul>
        <p>归并排序采用的是<strong>分治思想</strong>。</p>
        <p>分治，顾名思义，就是分而治之，将一个大问题分解成小的子问题来解决。小的子问题解决了，大问题也就解决了。</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/702201553810c3011d6bbb1f7f05dd5018193be810231e0d4b8da3e72afb58f0/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d613138366265343162363264366636352e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/702201553810c3011d6bbb1f7f05dd5018193be810231e0d4b8da3e72afb58f0/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d613138366265343162363264366636352e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="merge-sort-example.png"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-a186be41b62d6f65.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <blockquote>
          <p>注：x &gt;&gt; 1 是位运算中的右移运算，表示右移一位，等同于 x 除以 2 再取整，即 x &gt;&gt; 1 === Math.floor(x / 2) 。</p>
        </blockquote>
        <p><strong>实现</strong></p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-k">const</span> <span class="pl-en">mergeSort</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-c">//采用自上而下的递归方法</span>
	<span class="pl-k">const</span> <span class="pl-s1">len</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span>
	<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">2</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-k">return</span> <span class="pl-s1">arr</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>
	<span class="pl-c">// length &gt;&gt; 1 和 Math.floor(len / 2) 等价</span>
	<span class="pl-k">let</span> <span class="pl-s1">middle</span> <span class="pl-c1">=</span> <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">floor</span><span class="pl-kos">(</span><span class="pl-s1">len</span> / <span class="pl-c1">2</span><span class="pl-kos">)</span><span class="pl-kos">,</span>
		<span class="pl-s1">left</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">,</span> <span class="pl-s1">middle</span><span class="pl-kos">)</span><span class="pl-kos">,</span>
		<span class="pl-s1">right</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">middle</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 拆分为两个子数组</span>
	<span class="pl-k">return</span> <span class="pl-en">merge</span><span class="pl-kos">(</span><span class="pl-en">mergeSort</span><span class="pl-kos">(</span><span class="pl-s1">left</span><span class="pl-kos">)</span><span class="pl-kos">,</span> <span class="pl-en">mergeSort</span><span class="pl-kos">(</span><span class="pl-s1">right</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>

<span class="pl-k">const</span> <span class="pl-en">merge</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">left</span><span class="pl-kos">,</span> <span class="pl-s1">right</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">const</span> <span class="pl-s1">result</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span>

	<span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-s1">left</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">right</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-c">// 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.</span>
		<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">left</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span> &lt;= <span class="pl-s1">right</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			<span class="pl-s1">result</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">left</span><span class="pl-kos">.</span><span class="pl-en">shift</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
		<span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
			<span class="pl-s1">result</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">right</span><span class="pl-kos">.</span><span class="pl-en">shift</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
		<span class="pl-kos">}</span>
	<span class="pl-kos">}</span>

	<span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-s1">left</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">)</span> <span class="pl-s1">result</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">left</span><span class="pl-kos">.</span><span class="pl-en">shift</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

	<span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-s1">right</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">)</span> <span class="pl-s1">result</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">right</span><span class="pl-kos">.</span><span class="pl-en">shift</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

	<span class="pl-k">return</span> <span class="pl-s1">result</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p><strong>测试</strong></p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-c">// 测试</span>
<span class="pl-k">const</span> <span class="pl-s1">arr</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">44</span><span class="pl-kos">,</span> <span class="pl-c1">38</span><span class="pl-kos">,</span> <span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">47</span><span class="pl-kos">,</span> <span class="pl-c1">15</span><span class="pl-kos">,</span> <span class="pl-c1">36</span><span class="pl-kos">,</span> <span class="pl-c1">26</span><span class="pl-kos">,</span> <span class="pl-c1">27</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">46</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">19</span><span class="pl-kos">,</span> <span class="pl-c1">50</span><span class="pl-kos">,</span> <span class="pl-c1">48</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">time</span><span class="pl-kos">(</span><span class="pl-s">'归并排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'arr :'</span><span class="pl-kos">,</span> <span class="pl-en">mergeSort</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">timeEnd</span><span class="pl-kos">(</span><span class="pl-s">'归并排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// arr : [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</span>
<span class="pl-c">// 归并排序耗时: 0.739990234375ms</span></pre>
        </div>
        <p><strong>分析</strong></p>
        <ul>
          <li>
            <p>第一，归并排序是原地排序算法吗 ？<br>
              这是因为归并排序的合并函数，在合并两个有序数组为一个有序数组时，需要借助额外的存储空间。<br>
              实际上，尽管每次合并操作都需要申请额外的内存空间，但在合并完成之后，临时开辟的内存空间就被释放掉了。在任意时刻，CPU 只会有一个函数在执行，也就只会有一个临时的内存空间在使用。临时内存空间最大也不会超过 n 个数据的大小，所以空间复杂度是 O(n)。<br>
              所以，归并排序不是原地排序算法。</p>
          </li>
          <li>
            <p>第二，归并排序是稳定的排序算法吗 ？<br>
              merge 方法里面的 left[0] &lt;= right[0] ，保证了值相同的元素，在合并前后的先后顺序不变。归并排序是一种稳定的排序方法。</p>
          </li>
          <li>
            <p>第三，归并排序的时间复杂度是多少 ？<br>
              从效率上看，归并排序可算是排序算法中的<strong>佼佼者</strong>。假设数组长度为 n，那么拆分数组共需 logn 步, 又每步都是一个普通的合并子数组的过程，时间复杂度为 O(n)，故其综合时间复杂度为 O(nlogn)。<br>
              最佳情况：T(n) = O(nlogn)。<br>
              最差情况：T(n) = O(nlogn)。<br>
              平均情况：T(n) = O(nlogn)。</p>
          </li>
        </ul>
        <p><strong>归并排序动画演示</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/440f0c443b65c985281fb4d38cef14231d1b6a51e206741970ff6c4fc3f62d51/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d333233373236323539303664663361652e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
          >
            <el-card style="text-align:center">
              <img
                src="./imgs/play.png"
                alt=""
                class="play-style"
              >
            </el-card>
          </a></p>

        <el-button
          type="primary"
          round
          size="medium"
          @click="$open('https://visualgo.net/zh/sorting')"
        >动手试一试</el-button>

        <h2>3. 快速排序 （Quick Sort）</h2>
        <p>快速排序的特点就是快，而且效率高！它是处理大数据最快的排序算法之一。</p>
        <p><strong>思想</strong></p>
        <ul>
          <li>先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。</li>
          <li>左右分别用一个空数组去存储比较后的数据。</li>
          <li>最后递归执行上述操作，直到数组长度 &lt;= 1;</li>
        </ul>
        <p>特点：快速，常用。</p>
        <p>缺点：需要另外声明两个数组，浪费了内存空间资源。</p>
        <p><strong>算法描述</strong></p>
        <p>快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：</p>
        <ul>
          <li>步骤1：从数列中挑出一个元素，称为 “基准”（pivot ）。</li>
          <li>步骤2：重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。</li>
          <li>步骤3：递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。</li>
        </ul>
        <p><strong>实现</strong></p>
        <p>方法一：</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-k">const</span> <span class="pl-en">quickSort1</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span> &lt;= <span class="pl-c1">1</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-k">return</span> <span class="pl-s1">arr</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>
	<span class="pl-c">//取基准点</span>
	<span class="pl-k">const</span> <span class="pl-s1">midIndex</span> <span class="pl-c1">=</span> <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">floor</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span> / <span class="pl-c1">2</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-c">//取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。</span>
	<span class="pl-k">const</span> <span class="pl-s1">valArr</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">splice</span><span class="pl-kos">(</span><span class="pl-s1">midIndex</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">const</span> <span class="pl-s1">midIndexVal</span> <span class="pl-c1">=</span> <span class="pl-s1">valArr</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-k">const</span> <span class="pl-s1">left</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span> <span class="pl-c">//存放比基准点小的数组</span>
	<span class="pl-k">const</span> <span class="pl-s1">right</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span> <span class="pl-c">//存放比基准点大的数组</span>
	<span class="pl-c">//遍历数组，进行判断分配</span>
	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">midIndexVal</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			<span class="pl-s1">left</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//比基准点小的放在左边数组</span>
		<span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
			<span class="pl-s1">right</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//比基准点大的放在右边数组</span>
		<span class="pl-kos">}</span>
	<span class="pl-kos">}</span>
	<span class="pl-c">//递归执行以上操作，对左右两个数组进行操作，直到数组长度为 &lt;= 1</span>
	<span class="pl-k">return</span> <span class="pl-en">quickSort1</span><span class="pl-kos">(</span><span class="pl-s1">left</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">concat</span><span class="pl-kos">(</span><span class="pl-s1">midIndexVal</span><span class="pl-kos">,</span> <span class="pl-en">quickSort1</span><span class="pl-kos">(</span><span class="pl-s1">right</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">const</span> <span class="pl-s1">array2</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'quickSort1 '</span><span class="pl-kos">,</span> <span class="pl-en">quickSort1</span><span class="pl-kos">(</span><span class="pl-s1">array2</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// quickSort1: [1, 2, 3, 4, 5]</span></pre>
        </div>
        <p>方法二：</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-c">// 快速排序</span>
<span class="pl-k">const</span> <span class="pl-en">quickSort</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">left</span><span class="pl-kos">,</span> <span class="pl-s1">right</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">let</span> <span class="pl-s1">len</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">,</span>
		<span class="pl-s1">partitionIndex</span><span class="pl-kos">;</span>
	<span class="pl-s1">left</span> <span class="pl-c1">=</span> <span class="pl-k">typeof</span> <span class="pl-s1">left</span> != <span class="pl-s">'number'</span> ? <span class="pl-c1">0</span> : <span class="pl-s1">left</span><span class="pl-kos">;</span>
	<span class="pl-s1">right</span> <span class="pl-c1">=</span> <span class="pl-k">typeof</span> <span class="pl-s1">right</span> != <span class="pl-s">'number'</span> ? <span class="pl-s1">len</span> <span class="pl-c1">-</span> <span class="pl-c1">1</span> : <span class="pl-s1">right</span><span class="pl-kos">;</span>

	<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">left</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">right</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-s1">partitionIndex</span> <span class="pl-c1">=</span> <span class="pl-en">partition</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">left</span><span class="pl-kos">,</span> <span class="pl-s1">right</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
		<span class="pl-en">quickSort</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">left</span><span class="pl-kos">,</span> <span class="pl-s1">partitionIndex</span> <span class="pl-c1">-</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
		<span class="pl-en">quickSort</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">partitionIndex</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-s1">right</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>
	<span class="pl-k">return</span> <span class="pl-s1">arr</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>

<span class="pl-k">const</span> <span class="pl-en">partition</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">left</span><span class="pl-kos">,</span> <span class="pl-s1">right</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-c">//分区操作</span>
	<span class="pl-k">let</span> <span class="pl-s1">pivot</span> <span class="pl-c1">=</span> <span class="pl-s1">left</span><span class="pl-kos">,</span> <span class="pl-c">//设定基准值（pivot）</span>
		<span class="pl-s1">index</span> <span class="pl-c1">=</span> <span class="pl-s1">pivot</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>
	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-s1">index</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> &lt;= <span class="pl-s1">right</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">pivot</span><span class="pl-kos">]</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			<span class="pl-en">swap</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">i</span><span class="pl-kos">,</span> <span class="pl-s1">index</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
			<span class="pl-s1">index</span><span class="pl-c1">++</span><span class="pl-kos">;</span>
		<span class="pl-kos">}</span>
	<span class="pl-kos">}</span>
	<span class="pl-en">swap</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">pivot</span><span class="pl-kos">,</span> <span class="pl-s1">index</span> <span class="pl-c1">-</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">return</span> <span class="pl-s1">index</span> <span class="pl-c1">-</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>

<span class="pl-k">const</span> <span class="pl-en">swap</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">i</span><span class="pl-kos">,</span> <span class="pl-s1">j</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">let</span> <span class="pl-s1">temp</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">temp</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>测试</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-c">// 测试</span>
<span class="pl-k">const</span> <span class="pl-s1">array</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'原始array:'</span><span class="pl-kos">,</span> <span class="pl-s1">array</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">const</span> <span class="pl-s1">newArr</span> <span class="pl-c1">=</span> <span class="pl-en">quickSort</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'newArr:'</span><span class="pl-kos">,</span> <span class="pl-s1">newArr</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// 原始 array: &nbsp;[5, 4, 3, 2, 1]</span>
<span class="pl-c">// newArr: &nbsp;   [1, 4, 3, 2, 5]</span></pre>
        </div>
        <p><strong>分析</strong></p>
        <ul>
          <li>
            <p>第一，快速排序是原地排序算法吗 ？<br>
              因为 partition() 函数进行分区时，不需要很多额外的内存空间，所以快排是<strong>原地排序</strong>算法。</p>
          </li>
          <li>
            <p>第二，快速排序是稳定的排序算法吗 ？<br>
              和选择排序相似，快速排序每次交换的元素都有可能不是相邻的，因此它有可能打破原来值为相同的元素之间的顺序。因此，快速排序并不稳定。</p>
          </li>
          <li>
            <p>第三，快速排序的时间复杂度是多少 ？<br>
              极端的例子：如果数组中的数据原来已经是有序的了，比如 1，3，5，6，8。如果我们每次选择最后一个元素作为 pivot，那每次分区得到的两个区间都是不均等的。我们需要进行大约 n 次分区操作，才能完成快排的整个过程。每次分区我们平均要扫描大约 n / 2 个元素，这种情况下，快排的时间复杂度就从 O(nlogn) 退化成了 O(n<sup>2</sup>)。<br>
              最佳情况：T(n) = O(nlogn)。<br>
              最差情况：T(n) = O(n<sup>2</sup>)。<br>
              平均情况：T(n) = O(nlogn)。</p>
          </li>
        </ul>
        <p><strong>快速排序动画演示</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/faeef0c91a3db24a8ec687a45671158124d3b0706bf405f3c5433ee89f393545/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d373038663562363837663662646536352e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
          >
            <el-card style="text-align:center">
              <img
                src="./imgs/play.png"
                alt=""
                class="play-style"
              >
            </el-card>
          </a></p>
        <el-button
          type="primary"
          round
          size="medium"
          @click="$open('https://visualgo.net/zh/sorting')"
        >动手试一试</el-button>
        <p><strong>解答开篇问题</strong></p>
        <p>快排和归并用的都是分治思想，递推公式和递归代码也非常相似，那它们的区别在哪里呢 ？</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/cc90f1c380ef15f5d684f2d4d6ed414c619a4a2e21506e714a6ea09288d37bc1/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d336532396239643264393336393035642e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/cc90f1c380ef15f5d684f2d4d6ed414c619a4a2e21506e714a6ea09288d37bc1/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d336532396239643264393336393035642e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="快速排序与归并排序"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-3e29b9d2d936905d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>可以发现：</p>
        <ul>
          <li>归并排序的处理过程是<strong>由下而上</strong>的，先处理子问题，然后再合并。</li>
          <li>而快排正好相反，它的处理过程是<strong>由上而下</strong>的，先分区，然后再处理子问题。</li>
          <li>归并排序虽然是稳定的、时间复杂度为 O(nlogn) 的排序算法，但是它是非原地排序算法。</li>
          <li>归并之所以是非原地排序算法，主要原因是合并函数无法在原地执行。</li>
          <li>快速排序通过设计巧妙的原地分区函数，可以实现原地排序，解决了归并排序占用太多内存的问题。</li>
        </ul>
        <h2>4. 希尔排序（Shell Sort）</h2>
        <p><strong>思想</strong></p>
        <ul>
          <li>先将整个待排序的记录序列分割成为若干子序列。</li>
          <li>分别进行直接插入排序。</li>
          <li>待整个序列中的记录基本有序时，再对全体记录进行依次直接插入排序。</li>
        </ul>
        <p><strong>过程</strong></p>
        <ol>
          <li>举个易于理解的例子：[35, 33, 42, 10, 14, 19, 27, 44]，我们采取间隔 4。创建一个位于 4 个位置间隔的所有值的虚拟子列表。下面这些值是 { 35, 14 }，{ 33, 19 }，{ 42, 27 } 和 { 10, 44 }。</li>
        </ol>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/7c256f1b4b05586c7f9996efce09c39df94dc92a95402291adef3df4bd322fc3/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d653538333130653363383935363164612e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/7c256f1b4b05586c7f9996efce09c39df94dc92a95402291adef3df4bd322fc3/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d653538333130653363383935363164612e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="栗子"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-e58310e3c89561da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <ol start="2">
          <li>我们比较每个子列表中的值，并在原始数组中交换它们（如果需要）。完成此步骤后，新数组应如下所示。</li>
        </ol>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/867e585902c591802f2b70cac682850a27cd68e7aa674f91bc95f2ae99d608c7/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d346436623262353163613366303462642e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/867e585902c591802f2b70cac682850a27cd68e7aa674f91bc95f2ae99d608c7/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d346436623262353163613366303462642e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="栗子"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-4d6b2b51ca3f04bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <ol start="3">
          <li>然后，我们采用 2 的间隔，这个间隙产生两个子列表：{ 14, 27, 35, 42 }， { 19, 10, 33, 44 }。</li>
        </ol>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/fc6daa6a4d0428d2b0d9fe931e183a5f26d5203cd00da3e13eaa502009a8a219/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d333864636333346361613361396432632e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/fc6daa6a4d0428d2b0d9fe931e183a5f26d5203cd00da3e13eaa502009a8a219/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d333864636333346361613361396432632e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="栗子"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-38dcc34caa3a9d2c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <ol start="4">
          <li>我们比较并交换原始数组中的值（如果需要）。完成此步骤后，数组变成：[14, 10, 27, 19, 35, 33, 42, 44]，图如下所示，10 与 19 的位置互换一下。</li>
        </ol>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/e8af713f06e780954920fc519211f559ab3223d917f6332e84f21c44c4433b32/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d346664633330313961386334656331312e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/e8af713f06e780954920fc519211f559ab3223d917f6332e84f21c44c4433b32/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d346664633330313961386334656331312e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="image.png"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-4fdc3019a8c4ec11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <ol start="5">
          <li>最后，我们使用值间隔 1 对数组的其余部分进行排序，Shell sort 使用插入排序对数组进行排序。</li>
        </ol>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/ea6a3d29ebba2c5cfb851919156e7012fd0a00628da117a1cb319c253bb0d979/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d323566356530353736326461616134392e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/ea6a3d29ebba2c5cfb851919156e7012fd0a00628da117a1cb319c253bb0d979/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d323566356530353736326461616134392e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="栗子"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-25f5e05762daaa49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p><strong>实现</strong></p>
        <pre><code>const shellSort = arr =&gt; {
	let len = arr.length,
		temp,
		gap = 1;
	console.time('希尔排序耗时');
	while (gap &lt; len / 3) {
		//动态定义间隔序列
		gap = gap * 3 + 1;
	}
	for (gap; gap &gt; 0; gap = Math.floor(gap / 3)) {
		for (let i = gap; i &lt; len; i++) {
			temp = arr[i];
			let j = i - gap;
			for (; j &gt;= 0 &amp;&amp; arr[j] &gt; temp; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
			console.log('arr  :', arr);
		}
	}
	console.timeEnd('希尔排序耗时');
	return arr;
};
</code></pre>
        <p>测试</p>
        <pre><code>// 测试
const array = [35, 33, 42, 10, 14, 19, 27, 44];
console.log('原始array:', array);
const newArr = shellSort(array);
console.log('newArr:', newArr);
// 原始 array: &nbsp;&nbsp;[35, 33, 42, 10, 14, 19, 27, 44]
// arr      : &nbsp;&nbsp;[14, 33, 42, 10, 35, 19, 27, 44]
// arr      : &nbsp;&nbsp;[14, 19, 42, 10, 35, 33, 27, 44]
// arr      : &nbsp;&nbsp;[14, 19, 27, 10, 35, 33, 42, 44]
// arr      : &nbsp;&nbsp;[14, 19, 27, 10, 35, 33, 42, 44]
// arr      : &nbsp;&nbsp;[14, 19, 27, 10, 35, 33, 42, 44]
// arr      : &nbsp;&nbsp;[14, 19, 27, 10, 35, 33, 42, 44]
// arr      : &nbsp;&nbsp;[10, 14, 19, 27, 35, 33, 42, 44]
// arr      : &nbsp;&nbsp;[10, 14, 19, 27, 35, 33, 42, 44]
// arr      : &nbsp;&nbsp;[10, 14, 19, 27, 33, 35, 42, 44]
// arr      : &nbsp;&nbsp;[10, 14, 19, 27, 33, 35, 42, 44]
// arr      : &nbsp;&nbsp;[10, 14, 19, 27, 33, 35, 42, 44]
// 希尔排序耗时: 3.592041015625ms
// newArr: &nbsp;   [10, 14, 19, 27, 33, 35, 42, 44]
</code></pre>
        <p><strong>分析</strong></p>
        <ul>
          <li>
            <p>第一，希尔排序是原地排序算法吗 ？<br>
              希尔排序过程中，只涉及相邻数据的交换操作，只需要常量级的临时空间，空间复杂度为 O(1) 。所以，希尔排序是<strong>原地排序</strong>算法。</p>
          </li>
          <li>
            <p>第二，希尔排序是稳定的排序算法吗 ？<br>
              我们知道，单次直接插入排序是稳定的，它不会改变相同元素之间的相对顺序，但在多次不同的插入排序过程中，相同的元素可能在各自的插入排序中移动，可能导致相同元素相对顺序发生变化。<br>
              因此，希尔排序<strong>不稳定</strong>。</p>
          </li>
          <li>
            <p>第三，希尔排序的时间复杂度是多少 ？<br>
              最佳情况：T(n) = O(n logn)。<br>
              最差情况：T(n) = O(n (log(n))<sup>2</sup>)。<br>
              平均情况：T(n) = 取决于间隙序列。</p>
          </li>
        </ul>
        <p><strong>希尔排序动画演示</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/c2a32120c534b4490f37c6a7a8df44691f442e6166f7e9015d8e00175f89da24/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636461633564616663353337613036612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
          >
            <el-card style="text-align:center">
              <img
                src="./imgs/play.png"
                alt=""
                class="play-style"
              >
            </el-card>
          </a></p>
        <h2>5. 堆排序（Heap Sort）</h2>
        <p><strong>堆的定义</strong></p>
        <p>堆其实是一种特殊的树。只要满足这两点，它就是一个堆。</p>
        <ul>
          <li>堆是一个完全二叉树。<br>
            完全二叉树：除了最后一层，其他层的节点个数都是满的，最后一层的节点都靠左排列。</li>
          <li>堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。<br>
            也可以说：堆中每个节点的值都大于等于（或者小于等于）其左右子节点的值。这两种表述是等价的。</li>
        </ul>
        <p>对于每个节点的值都<strong>大于等于</strong>子树中每个节点值的堆，我们叫作<strong>大顶堆</strong>。<br>
          对于每个节点的值都<strong>小于等于</strong>子树中每个节点值的堆，我们叫作<strong>小顶堆</strong>。</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/284f94d9b759c6a903739835f857de4045218521bbbe01ddf29845f14519751e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d626130303034636663326334633864342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/284f94d9b759c6a903739835f857de4045218521bbbe01ddf29845f14519751e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d626130303034636663326334633864342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="区分堆、大顶堆、小顶堆"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-ba0004cfc2c4c8d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>其中图 1 和 图 2 是大顶堆，图 3 是小顶堆，图 4 不是堆。除此之外，从图中还可以看出来，对于同一组数据，我们可以构建多种不同形态的堆。</p>
        <p><strong>思想</strong></p>
        <ol>
          <li>将初始待排序关键字序列 (R1, R2 .... Rn) 构建成大顶堆，此堆为初始的无序区；</li>
          <li>将堆顶元素 R[1] 与最后一个元素 R[n] 交换，此时得到新的无序区 (R1, R2, ..... Rn-1) 和新的有序区 (Rn) ，且满足 R[1, 2 ... n-1] &lt;= R[n]。</li>
          <li>由于交换后新的堆顶 R[1] 可能违反堆的性质，因此需要对当前无序区 (R1, R2 ...... Rn-1) 调整为新堆，然后再次将 R[1] 与无序区最后一个元素交换，得到新的无序区 (R1, R2 .... Rn-2) 和新的有序区 (Rn-1, Rn)。不断重复此过程，直到有序区的元素个数为 n - 1，则整个排序过程完成。</li>
        </ol>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1：将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区。</li>
          <li>步骤2：将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]&lt;=R[n]。</li>
          <li>步骤3：由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。</li>
        </ul>
        <p><strong>实现</strong></p>
        <pre><code>// 堆排序
const heapSort = array =&gt; {
	console.time('堆排序耗时');
	// 初始化大顶堆，从第一个非叶子结点开始
	for (let i = Math.floor(array.length / 2 - 1); i &gt;= 0; i--) {
		heapify(array, i, array.length);
	}
	// 排序，每一次 for 循环找出一个当前最大值，数组长度减一
	for (let i = Math.floor(array.length - 1); i &gt; 0; i--) {
		// 根节点与最后一个节点交换
		swap(array, 0, i);
		// 从根节点开始调整，并且最后一个结点已经为当前最大值，不需要再参与比较，所以第三个参数为 i，即比较到最后一个结点前一个即可
		heapify(array, 0, i);
	}
	console.timeEnd('堆排序耗时');
	return array;
};

// 交换两个节点
const swap = (array, i, j) =&gt; {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设结点 i 以下的子堆已经是一个大顶堆，heapify 函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
// 后面将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 heapify 操作，所以就满足了结点 i 以下的子堆已经是一大顶堆
const heapify = (array, i, length) =&gt; {
	let temp = array[i]; // 当前父节点
	// j &lt; length 的目的是对结点 i 以下的结点全部做顺序调整
	for (let j = 2 * i + 1; j &lt; length; j = 2 * j + 1) {
		temp = array[i]; // 将 array[i] 取出，整个过程相当于找到 array[i] 应处于的位置
		if (j + 1 &lt; length &amp;&amp; array[j] &lt; array[j + 1]) {
			j++; // 找到两个孩子中较大的一个，再与父节点比较
		}
		if (temp &lt; array[j]) {
			swap(array, i, j); // 如果父节点小于子节点:交换；否则跳出
			i = j; // 交换后，temp 的下标变为 j
		} else {
			break;
		}
	}
};
</code></pre>
        <p>测试</p>
        <pre><code>const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log('原始array:', array);
const newArr = heapSort(array);
console.log('newArr:', newArr);
// 原始 array: &nbsp;[4, 6, 8, 5, 9, 1, 2, 5, 3, 2]
// 堆排序耗时: 0.15087890625ms
// newArr: &nbsp;   [1, 2, 2, 3, 4, 5, 5, 6, 8, 9]
</code></pre>
        <p><strong>分析</strong></p>
        <ul>
          <li>
            <p>第一，堆排序是原地排序算法吗 ？<br>
              整个堆排序的过程，都只需要极个别临时存储空间，所以堆排序是原地排序算法。</p>
          </li>
          <li>
            <p>第二，堆排序是稳定的排序算法吗 ？<br>
              因为在排序的过程，存在将堆的最后一个节点跟堆顶节点互换的操作，所以就有可能改变值相同数据的原始相对顺序。<br>
              所以，堆排序是<strong>不稳定</strong>的排序算法。</p>
          </li>
          <li>
            <p>第三，堆排序的时间复杂度是多少 ？<br>
              堆排序包括建堆和排序两个操作，建堆过程的时间复杂度是 O(n)，排序过程的时间复杂度是 O(nlogn)，所以，堆排序整体的时间复杂度是 O(nlogn)。<br>
              最佳情况：T(n) = O(nlogn)。<br>
              最差情况：T(n) = O(nlogn)。<br>
              平均情况：T(n) = O(nlogn)。</p>
          </li>
        </ul>
        <p><strong>堆排序动画演示（一）</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/51f314c0aa034ffe9bdf705b7b3f8391d9dd1e54d329ff76a8772e56fd176b72/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d363263633863333563653434396530322e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
          >
            <el-card style="text-align:center">
              <img
                src="./imgs/play.png"
                alt=""
                class="play-style"
              >
            </el-card>
          </a></p>
        <p><strong>堆排序动画演示（二）</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/84cfe29671dfcc66fb4da136fd34b6c02ef9dc057f882a4cc19957971cc5238f/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d373934366162366566363234633138342e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
          >
            <el-card style="text-align:center">
              <img
                src="./imgs/play.png"
                alt=""
                class="play-style"
              >
            </el-card>
          </a></p>
        <h2>6. 排序算法的复杂性对比</h2>
        <p><strong>复杂性对比</strong></p>
        <table role="table">
          <thead>
            <tr>
              <th align="center">名称</th>
              <th align="center">最好</th>
              <th align="center">平均</th>
              <th align="center">最坏</th>
              <th align="center">内存</th>
              <th align="center">稳定性</th>
              <th align="center">备注</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">归并排序</td>
              <td align="center">nlog(n)</td>
              <td align="center">nlog(n)</td>
              <td align="center">nlog(n)</td>
              <td align="center">n</td>
              <td align="center">Yes</td>
              <td align="center">...</td>
            </tr>
            <tr>
              <td align="center">快速排序</td>
              <td align="center">nlog(n)</td>
              <td align="center">nlog(n)</td>
              <td align="center">n<sup>2</sup></td>
              <td align="center">log(n)</td>
              <td align="center">No</td>
              <td align="center">在 in-place 版本下，内存复杂度通常是 O(log(n))</td>
            </tr>
            <tr>
              <td align="center">希尔排序</td>
              <td align="center">nlog(n)</td>
              <td align="center">取决于差距序列</td>
              <td align="center">n(log(n))<sup>2</sup></td>
              <td align="center">1</td>
              <td align="center">No</td>
              <td align="center">...</td>
            </tr>
            <tr>
              <td align="center">堆排序</td>
              <td align="center">nlog(n)</td>
              <td align="center">nlog(n)</td>
              <td align="center">nlog(n)</td>
              <td align="center">1</td>
              <td align="center">No</td>
              <td align="center">...</td>
            </tr>
          </tbody>
        </table>
        <table role="table">
          <thead>
            <tr>
              <th align="center">名称</th>
              <th align="center">平均</th>
              <th align="center">最好</th>
              <th align="center">最坏</th>
              <th align="center">空间</th>
              <th align="center">稳定性</th>
              <th align="center">排序方式</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">归并排序</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(n)</td>
              <td align="center">Yes</td>
              <td align="center">Out-place</td>
            </tr>
            <tr>
              <td align="center">快速排序</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(n<sup>2</sup>)</td>
              <td align="center">O(logn)</td>
              <td align="center">No</td>
              <td align="center">In-place</td>
            </tr>
            <tr>
              <td align="center">希尔排序</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(n log<sup>2</sup> n)</td>
              <td align="center">O(n log<sup>2</sup> n)</td>
              <td align="center">O(1)</td>
              <td align="center">No</td>
              <td align="center">In-place</td>
            </tr>
            <tr>
              <td align="center">堆排序</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(n log n)</td>
              <td align="center">O(1)</td>
              <td align="center">No</td>
              <td align="center">In-place</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'page6'
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
.play-style {
  opacity: 0.4;
}
.play-style:hover {
  opacity: 1;
}
</style>