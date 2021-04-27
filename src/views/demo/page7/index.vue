<template>
  <d2-container>
    <div class="content">
      <div class="d-block comment-body markdown-body  js-comment-body">
        <h2>1. 平均时间复杂度都为 O(n)的算法</h2>
        <p>之所以把 <strong>计数排序、桶排序、基数排序</strong> 放在一起比较，是因为它们的平均时间复杂度都为 <strong>O(n)</strong>。</p>
        <p>因为这三个排序算法的时间复杂度是线性的，所以我们把这类排序算法叫作 <strong>线性排序</strong>（Linear sort）。</p>
        <p>之所以能做到线性的时间复杂度，主要原因是，这三个算法不是基于比较的排序算法，都不涉及元素之间的比较操作。</p>
        <p>另外，请大家带着问题来阅读下文，问题：<strong>如何根据年龄给 100 万用户排序 ？</strong></p>
        <h2>2. 计数排序（Counting Sort）</h2>
        <p><strong>思想</strong></p>
        <ul>
          <li>找出待排序的数组中最大和最小的元素。</li>
          <li>统计数组中每个值为 i 的元素出现的次数，存入新数组 countArr 的第 i 项。</li>
          <li>对所有的计数累加（从 countArr 中的第一个元素开始，每一项和前一项相加）。</li>
          <li>反向填充目标数组：将每个元素 i 放在新数组的第 countArr[i] 项，每放一个元素就将 countArr[i] 减去 1 。</li>
        </ul>
        <p>关键在于理解最后反向填充时的操作。</p>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1：找出待排序的数组中最大和最小的元素。</li>
          <li>步骤2：统计数组中每个值为i的元素出现的次数，存入数组C的第i项。</li>
          <li>步骤3：对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）。</li>
          <li>步骤4：反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。</li>
        </ul>
        <p><strong>使用条件</strong></p>
        <ul>
          <li>只能用在数据范围不大的场景中，若数据范围 k 比要排序的数据 n 大很多，就不适合用计数排序。</li>
          <li>计数排序只能给非负整数排序，其他类型需要在不改变相对大小情况下，转换为非负整数。</li>
          <li>比如如果考试成绩精确到小数后一位，就需要将所有分数乘以 10，转换为整数。</li>
        </ul>
        <p><strong>实现</strong></p>
        <p>方法一：</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-k">const</span> <span class="pl-en">countingSort</span> <span class="pl-c1">=</span> <span class="pl-s1">array</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">let</span> <span class="pl-s1">len</span> <span class="pl-c1">=</span> <span class="pl-s1">array</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">,</span>
		<span class="pl-s1">result</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">,</span>
		<span class="pl-s1">countArr</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">,</span>
		<span class="pl-s1">min</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">max</span> <span class="pl-c1">=</span> <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">time</span><span class="pl-kos">(</span><span class="pl-s">'计数排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">len</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-c">// 获取最小，最大 值</span>
		<span class="pl-s1">min</span> <span class="pl-c1">=</span> <span class="pl-s1">min</span> <span class="pl-c1">&lt;=</span> <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> ? <span class="pl-s1">min</span> : <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
		<span class="pl-s1">max</span> <span class="pl-c1">=</span> <span class="pl-s1">max</span> <span class="pl-c1">&gt;=</span> <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> ? <span class="pl-s1">max</span> : <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
		<span class="pl-s1">countArr</span><span class="pl-kos">[</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">countArr</span><span class="pl-kos">[</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">]</span> ? <span class="pl-s1">countArr</span><span class="pl-kos">[</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">]</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span> : <span class="pl-c1">1</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>
	<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'countArr :'</span><span class="pl-kos">,</span> <span class="pl-s1">countArr</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-c">// 从最小值 -&gt; 最大值,将计数逐项相加</span>
	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">j</span> <span class="pl-c1">=</span> <span class="pl-s1">min</span><span class="pl-kos">;</span> <span class="pl-s1">j</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">max</span><span class="pl-kos">;</span> <span class="pl-s1">j</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-s1">countArr</span><span class="pl-kos">[</span><span class="pl-s1">j</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">countArr</span><span class="pl-kos">[</span><span class="pl-s1">j</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">]</span> <span class="pl-c1">||</span> <span class="pl-c1">0</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-kos">(</span><span class="pl-s1">countArr</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span> <span class="pl-c1">||</span> <span class="pl-c1">0</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>
	<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'countArr 2:'</span><span class="pl-kos">,</span> <span class="pl-s1">countArr</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-c">// countArr 中,下标为 array 数值，数据为 array 数值出现次数；反向填充数据进入 result 数据</span>
	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">k</span> <span class="pl-c1">=</span> <span class="pl-s1">len</span> <span class="pl-c1">-</span> <span class="pl-c1">1</span><span class="pl-kos">;</span> <span class="pl-s1">k</span> <span class="pl-c1">&gt;=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">k</span><span class="pl-c1">--</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-c">// result[位置] = array 数据</span>
		<span class="pl-s1">result</span><span class="pl-kos">[</span><span class="pl-s1">countArr</span><span class="pl-kos">[</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">k</span><span class="pl-kos">]</span><span class="pl-kos">]</span> <span class="pl-c1">-</span> <span class="pl-c1">1</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">k</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
		<span class="pl-c">// 减少 countArr 数组中保存的计数</span>
		<span class="pl-s1">countArr</span><span class="pl-kos">[</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">k</span><span class="pl-kos">]</span><span class="pl-kos">]</span><span class="pl-c1">--</span><span class="pl-kos">;</span>
		<span class="pl-c">// console.log("array[k]:", array[k], 'countArr[array[k]] :', countArr[array[k]],)</span>
		<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'result:'</span><span class="pl-kos">,</span> <span class="pl-s1">result</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>
	<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">timeEnd</span><span class="pl-kos">(</span><span class="pl-s">'计数排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">return</span> <span class="pl-s1">result</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>测试</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-k">const</span> <span class="pl-s1">array</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-c1">7</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">7</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">9</span><span class="pl-kos">,</span> <span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">6</span><span class="pl-kos">,</span> <span class="pl-c1">9</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'原始 array: '</span><span class="pl-kos">,</span> <span class="pl-s1">array</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">const</span> <span class="pl-s1">newArr</span> <span class="pl-c1">=</span> <span class="pl-en">countingSort</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'newArr: '</span><span class="pl-kos">,</span> <span class="pl-s1">newArr</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// 原始 array: &nbsp;[2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2]</span>
<span class="pl-c">// 计数排序耗时:   5.6708984375ms</span>
<span class="pl-c">// newArr: &nbsp;	 [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]</span></pre>
        </div>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/93b985bebc52550a2e3bb0619b7a714a174ce50bcee546cebb323d5664d8c99a/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d663235343131343362636436393133382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/93b985bebc52550a2e3bb0619b7a714a174ce50bcee546cebb323d5664d8c99a/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d663235343131343362636436393133382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="测试结果"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-f2541143bcd69138.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>方法二：</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-k">const</span> <span class="pl-en">countingSort2</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">maxValue</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">time</span><span class="pl-kos">(</span><span class="pl-s">'计数排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-s1">maxValue</span> <span class="pl-c1">=</span> <span class="pl-s1">maxValue</span> <span class="pl-c1">||</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span>
	<span class="pl-k">let</span> <span class="pl-s1">bucket</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Array</span><span class="pl-kos">(</span><span class="pl-s1">maxValue</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">,</span>
		<span class="pl-s1">sortedIndex</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span>
	<span class="pl-kos">(</span><span class="pl-s1">arrLen</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">)</span><span class="pl-kos">,</span> <span class="pl-kos">(</span><span class="pl-s1">bucketLen</span> <span class="pl-c1">=</span> <span class="pl-s1">maxValue</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">arrLen</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">bucket</span><span class="pl-kos">[</span><span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">]</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			<span class="pl-s1">bucket</span><span class="pl-kos">[</span><span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span>
		<span class="pl-kos">}</span>
		<span class="pl-s1">bucket</span><span class="pl-kos">[</span><span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">]</span><span class="pl-c1">++</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>

	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">j</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">j</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">bucketLen</span><span class="pl-kos">;</span> <span class="pl-s1">j</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-s1">bucket</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span> <span class="pl-c1">&gt;</span> <span class="pl-c1">0</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			<span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">sortedIndex</span><span class="pl-c1">++</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">j</span><span class="pl-kos">;</span>
			<span class="pl-s1">bucket</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span><span class="pl-c1">--</span><span class="pl-kos">;</span>
		<span class="pl-kos">}</span>
	<span class="pl-kos">}</span>
	<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">timeEnd</span><span class="pl-kos">(</span><span class="pl-s">'计数排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">return</span> <span class="pl-s1">arr</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>测试</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-k">const</span> <span class="pl-s1">array2</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-c1">7</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">7</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">9</span><span class="pl-kos">,</span> <span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">6</span><span class="pl-kos">,</span> <span class="pl-c1">9</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'原始 array2: '</span><span class="pl-kos">,</span> <span class="pl-s1">array2</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">const</span> <span class="pl-s1">newArr2</span> <span class="pl-c1">=</span> <span class="pl-en">countingSort2</span><span class="pl-kos">(</span><span class="pl-s1">array2</span><span class="pl-kos">,</span> <span class="pl-c1">21</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'newArr2: '</span><span class="pl-kos">,</span> <span class="pl-s1">newArr2</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// 原始 array: &nbsp;[2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2]</span>
<span class="pl-c">// 计数排序耗时:   0.043212890625ms</span>
<span class="pl-c">// newArr: &nbsp;	 [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]</span></pre>
        </div>
        <p><strong>例子</strong></p>
        <p>可以认为，<strong>计数排序其实是桶排序的一种特殊情况</strong>。</p>
        <p>当要排序的 n 个数据，所处的范围并不大的时候，比如最大值是 k，我们就可以把数据划分成 k 个桶。每个桶内的数据值都是相同的，省掉了桶内排序的时间。</p>
        <p>我们都经历过高考，高考查分数系统你还记得吗？我们查分数的时候，系统会显示我们的成绩以及所在省的排名。如果你所在的省有 50 万考生，如何通过成绩快速排序得出名次呢？</p>
        <ul>
          <li>考生的满分是 900 分，最小是 0 分，这个数据的范围很小，所以我们可以分成 901 个桶，对应分数从 0 分到 900 分。</li>
          <li>根据考生的成绩，我们将这 50 万考生划分到这 901 个桶里。桶内的数据都是分数相同的考生，所以并不需要再进行排序。</li>
          <li>我们只需要依次扫描每个桶，将桶内的考生依次输出到一个数组中，就实现了 50 万考生的排序。</li>
          <li>因为只涉及扫描遍历操作，所以时间复杂度是 O(n)。</li>
        </ul>
        <p><strong>分析</strong></p>
        <ul>
          <li>第一，计数排序是原地排序算法吗 ？<br>
            因为计数排序的空间复杂度为 O(n + k)，k 是待排序列最大值，所以不是原地排序算法。</li>
          <li>第二，计数排序是稳定的排序算法吗 ？<br>
            计数排序不改变相同元素之间原本相对的顺序，因此它是稳定的排序算法。</li>
          <li>第三，计数排序的时间复杂度是多少 ？<br>
            最佳情况：T(n) = O(n + k)<br>
            最差情况：T(n) = O(n + k)<br>
            平均情况：T(n) = O(k)<br>
            k：桶的个数。</li>
        </ul>
        <p><strong>计数排序动画演示</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/0fa291c15cedb28ff24528ddfcc5586f844109c7a4c42bb30f67326a23323dfa/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d343362323666323630643930356337372e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
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

        <h2>3. 桶排序（Bucket Sort）</h2>
        <p>桶排序是计数排序的升级版，也采用了<strong>分治思想</strong>。</p>
        <p><strong>思想</strong></p>
        <ul>
          <li>将要排序的数据分到有限数量的几个有序的桶里。</li>
          <li>每个桶里的数据再单独进行排序（一般用插入排序或者快速排序）。</li>
          <li>桶内排完序之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的了。</li>
        </ul>
        <p>比如：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/0cc33d283695a0e16d6354cee7eb459970f4092151d4416a4b61d52e8144a2ca/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d666265326233653364366435366238652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/0cc33d283695a0e16d6354cee7eb459970f4092151d4416a4b61d52e8144a2ca/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d666265326233653364366435366238652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-fbe2b3e3d6d56b8e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>桶排序利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。</p>
        <p>为了使桶排序更加高效，我们需要做到这两点：</p>
        <ul>
          <li>在额外空间充足的情况下，尽量增大桶的数量。</li>
          <li>使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中。</li>
        </ul>
        <p>桶排序的核心：就在于怎么把元素平均分配到每个桶里，合理的分配将大大提高排序的效率。</p>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1：人为设置一个BucketSize，作为每个桶所能放置多少个不同数值（例如当BucketSize==5时，该桶可以存放｛1,2,3,4,5｝这几种数字，但是容量不限，即可以存放100个3）。</li>
          <li>步骤2：遍历输入数据，并且把数据一个一个放到对应的桶里去。</li>
          <li>步骤3：对每个不是空的桶进行排序，可以使用其它排序方法，也可以递归使用桶排序。</li>
          <li>步骤4：从不是空的桶里把排好序的数据拼接起来</li>
        </ul>
        <p>注意，如果递归使用桶排序为各个桶排序，则当桶数量为1时要手动减小BucketSize增加下一循环桶的数量，否则会陷入死循环，导致内存溢出。</p>
        <p><strong>实现</strong></p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-c">// 桶排序</span>
<span class="pl-k">const</span> <span class="pl-en">bucketSort</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">,</span> <span class="pl-s1">bucketSize</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">===</span> <span class="pl-c1">0</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-k">return</span> <span class="pl-s1">array</span><span class="pl-kos">;</span>
  <span class="pl-kos">}</span>

  <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">time</span><span class="pl-kos">(</span><span class="pl-s">'桶排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span>
  <span class="pl-k">let</span> <span class="pl-s1">minValue</span> <span class="pl-c1">=</span> <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
  <span class="pl-k">let</span> <span class="pl-s1">maxValue</span> <span class="pl-c1">=</span> <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
  <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">1</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">array</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">minValue</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
      <span class="pl-s1">minValue</span> <span class="pl-c1">=</span> <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span> <span class="pl-c">//输入数据的最小值</span>
    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">&gt;</span> <span class="pl-s1">maxValue</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
      <span class="pl-s1">maxValue</span> <span class="pl-c1">=</span> <span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span> <span class="pl-c">//输入数据的最大值</span>
    <span class="pl-kos">}</span>
  <span class="pl-kos">}</span>

  <span class="pl-c">//桶的初始化</span>
  <span class="pl-k">const</span> <span class="pl-c1">DEFAULT_BUCKET_SIZE</span> <span class="pl-c1">=</span> <span class="pl-c1">5</span><span class="pl-kos">;</span> <span class="pl-c">//设置桶的默认数量为 5</span>
  <span class="pl-s1">bucketSize</span> <span class="pl-c1">=</span> <span class="pl-s1">bucketSize</span> <span class="pl-c1">||</span> <span class="pl-c1">DEFAULT_BUCKET_SIZE</span><span class="pl-kos">;</span>
  <span class="pl-k">const</span> <span class="pl-s1">bucketCount</span> <span class="pl-c1">=</span> <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">floor</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">maxValue</span> <span class="pl-c1">-</span> <span class="pl-s1">minValue</span><span class="pl-kos">)</span> <span class="pl-c1">/</span> <span class="pl-s1">bucketSize</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>
  <span class="pl-k">const</span> <span class="pl-s1">buckets</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Array</span><span class="pl-kos">(</span><span class="pl-s1">bucketCount</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">buckets</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
  <span class="pl-kos">}</span>

  <span class="pl-c">//利用映射函数将数据分配到各个桶中</span>
  <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">array</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">floor</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">-</span> <span class="pl-s1">minValue</span><span class="pl-kos">)</span> <span class="pl-c1">/</span> <span class="pl-s1">bucketSize</span><span class="pl-kos">)</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-kos">}</span>

  <span class="pl-s1">array</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span>
  <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">buckets</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-en">quickSort</span><span class="pl-kos">(</span><span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//对每个桶进行排序，这里使用了快速排序</span>
    <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">var</span> <span class="pl-s1">j</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">j</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">j</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
      <span class="pl-s1">array</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span>
  <span class="pl-kos">}</span>
  <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">timeEnd</span><span class="pl-kos">(</span><span class="pl-s">'桶排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

  <span class="pl-k">return</span> <span class="pl-s1">array</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>

<span class="pl-c">// 快速排序</span>
<span class="pl-k">const</span> <span class="pl-en">quickSort</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">,</span> <span class="pl-s1">left</span><span class="pl-kos">,</span> <span class="pl-s1">right</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">let</span> <span class="pl-s1">len</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">,</span>
		<span class="pl-s1">partitionIndex</span><span class="pl-kos">;</span>
	<span class="pl-s1">left</span> <span class="pl-c1">=</span> <span class="pl-k">typeof</span> <span class="pl-s1">left</span> <span class="pl-c1">!=</span> <span class="pl-s">'number'</span> ? <span class="pl-c1">0</span> : <span class="pl-s1">left</span><span class="pl-kos">;</span>
	<span class="pl-s1">right</span> <span class="pl-c1">=</span> <span class="pl-k">typeof</span> <span class="pl-s1">right</span> <span class="pl-c1">!=</span> <span class="pl-s">'number'</span> ? <span class="pl-s1">len</span> <span class="pl-c1">-</span> <span class="pl-c1">1</span> : <span class="pl-s1">right</span><span class="pl-kos">;</span>

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
	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-s1">index</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;=</span> <span class="pl-s1">right</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
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
        <p><strong>测试</strong></p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-k">const</span> <span class="pl-s1">array</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">6</span><span class="pl-kos">,</span> <span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">9</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'原始array:'</span><span class="pl-kos">,</span> <span class="pl-s1">array</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">const</span> <span class="pl-s1">newArr</span> <span class="pl-c1">=</span> <span class="pl-en">bucketSort</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'newArr:'</span><span class="pl-kos">,</span> <span class="pl-s1">newArr</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// 原始 array: &nbsp;[4, 6, 8, 5, 9, 1, 2, 5, 3, 2]</span>
<span class="pl-c">// 堆排序耗时:   0.133056640625ms</span>
<span class="pl-c">// newArr: &nbsp;	 [1, 2, 2, 3, 4, 5, 5, 6, 8, 9]</span></pre>
        </div>
        <p><strong>分析</strong></p>
        <ul>
          <li>第一，桶排序是原地排序算法吗 ？</li>
        </ul>
        <p>因为桶排序的空间复杂度，也即内存消耗为 O(n)，所以<strong>不是</strong>原地排序算法。</p>
        <ul>
          <li>第二，桶排序是稳定的排序算法吗 ？</li>
        </ul>
        <p>取决于每个桶的排序方式，比如：快排就不稳定，归并就稳定。</p>
        <ul>
          <li>第三，桶排序的时间复杂度是多少 ？</li>
        </ul>
        <p>因为桶内部的排序可以有多种方法，是会对桶排序的时间复杂度产生很重大的影响。所以，桶排序的时间复杂度可以是多种情况的。</p>
        <p><strong>总的来说</strong><br>
          最佳情况：当输入的数据可以均匀的分配到每一个桶中。<br>
          最差情况：当输入的数据被分配到了同一个桶中。</p>
        <p>以下是<strong>桶的内部排序</strong>为<strong>快速排序</strong>的情况：</p>
        <p>如果要排序的数据有 n 个，我们把它们均匀地划分到 m 个桶内，每个桶里就有 k =n / m 个元素。每个桶内部使用快速排序，时间复杂度为 O(k * logk)。<br>
          m 个桶排序的时间复杂度就是 O(m * k * logk)，因为 k = n / m，所以整个桶排序的时间复杂度就是 O(n*log(n/m))。<br>
          当桶的个数 m 接近数据个数 n 时，log(n/m) 就是一个非常小的常量，这个时候桶排序的时间复杂度接近 O(n)。</p>
        <p>最佳情况：T(n) = O(n)。当输入的数据可以均匀的分配到每一个桶中。<br>
          最差情况：T(n) = O(nlogn)。当输入的数据被分配到了同一个桶中。<br>
          平均情况：T(n) = O(n)。</p>
        <blockquote>
          <p>桶排序最好情况下使用线性时间 O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为 O(n)。<br>
            很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。</p>
        </blockquote>
        <p><strong>适用场景</strong></p>
        <ul>
          <li>桶排序比较适合用在外部排序中。</li>
          <li>外部排序就是数据存储在外部磁盘且数据量大，但内存有限，无法将整个数据全部加载到内存中。</li>
        </ul>
        <p><strong>桶排序动画演示</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/561f96bab17964846692d0dfe032c7475c5b9d96b7b23dad99ab571b746cfc3c/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d393630323161373931313830656261302e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
          >
            <el-card style="text-align:center">
              <img
                src="./imgs/play.png"
                alt=""
                class="play-style"
              >
            </el-card>
          </a></p>

        <h2>4. 基数排序（Radix Sort）</h2>
        <p><strong>思想</strong></p>
        <p>基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。</p>
        <p>由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。</p>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1：取得数组中的最大数，并取得位数。</li>
          <li>步骤2：arr为原始数组，从最低位开始取每个位组成radix数组。</li>
          <li>步骤3：对radix进行计数排序（利用计数排序适用于小范围数的特点）。</li>
        </ul>
        <p><strong>例子</strong></p>
        <p>假设我们有 10 万个手机号码，希望将这 10 万个手机号码从小到大排序，你有什么比较快速的排序方法呢 ？</p>
        <p>这个问题里有这样的规律：假设要比较两个手机号码 a，b 的大小，如果在前面几位中，a 手机号码已经比 b 手机号码大了，那后面的几位就不用看了。所以是基于<strong>位</strong>来比较的。</p>
        <p>桶排序、计数排序能派上用场吗 ？手机号码有 11 位，范围太大，显然不适合用这两种排序算法。针对这个排序问题，有没有时间复杂度是 O(n) 的算法呢 ？ 有，就是基数排序。</p>
        <p><strong>使用条件</strong></p>
        <ul>
          <li>要求数据可以分割独立的<strong>位</strong>来比较；</li>
          <li>位之间由递进关系，如果 a 数据的高位比 b 数据大，那么剩下的地位就不用比较了；</li>
          <li>每一位的数据范围不能太大，要可以用线性排序，否则基数排序的时间复杂度无法做到 O(n)。</li>
        </ul>
        <p><strong>方案</strong></p>
        <p>按照优先从高位或低位来排序有两种实现方案:</p>
        <ul>
          <li>MSD：由高位为基底，先按 k1 排序分组，同一组中记录, 关键码 k1 相等，再对各组按 k2 排序分成子组, 之后，对后面的关键码继续这样的排序分组，直到按最次位关键码 kd 对各子组排序后，再将各组连接起来，便得到一个有序序列。MSD 方式适用于位数多的序列。</li>
          <li>LSD：由低位为基底，先从 kd 开始排序，再对 kd - 1 进行排序，依次重复，直到对 k1 排序后便得到一个有序序列。LSD 方式适用于位数少的序列。</li>
        </ul>
        <p><strong>实现</strong></p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-c">/**</span>
<span class="pl-c">	* name: 基数排序</span>
<span class="pl-c">	* <span class="pl-k">@param</span>  array 待排序数组</span>
<span class="pl-c">	* <span class="pl-k">@param</span>  max 最大位数</span>
<span class="pl-c">	*/</span>
<span class="pl-k">const</span> <span class="pl-en">radixSort</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">,</span> <span class="pl-s1">max</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">time</span><span class="pl-kos">(</span><span class="pl-s">'计数排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">const</span> <span class="pl-s1">buckets</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-k">let</span> <span class="pl-s1">unit</span> <span class="pl-c1">=</span> <span class="pl-c1">10</span><span class="pl-kos">,</span>
		<span class="pl-s1">base</span> <span class="pl-c1">=</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>
	<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">max</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">,</span> <span class="pl-s1">base</span> <span class="pl-c1">*=</span> <span class="pl-c1">10</span><span class="pl-kos">,</span> <span class="pl-s1">unit</span> <span class="pl-c1">*=</span> <span class="pl-c1">10</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">j</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">j</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">array</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">j</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			<span class="pl-k">let</span> <span class="pl-s1">index</span> <span class="pl-c1">=</span> <span class="pl-c1">~</span><span class="pl-c1">~</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span> <span class="pl-c1">%</span> <span class="pl-s1">unit</span><span class="pl-kos">)</span> <span class="pl-c1">/</span> <span class="pl-s1">base</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//依次过滤出个位，十位等等数字</span>
			<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">index</span><span class="pl-kos">]</span> <span class="pl-c1">==</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
				<span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">index</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span> <span class="pl-c">//初始化桶</span>
			<span class="pl-kos">}</span>
			<span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">index</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//往不同桶里添加数据</span>
		<span class="pl-kos">}</span>
		<span class="pl-k">let</span> <span class="pl-s1">pos</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">,</span>
			<span class="pl-s1">value</span><span class="pl-kos">;</span>
		<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">j</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">,</span> <span class="pl-s1">length</span> <span class="pl-c1">=</span> <span class="pl-s1">buckets</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">j</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">length</span><span class="pl-kos">;</span> <span class="pl-s1">j</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span> <span class="pl-c1">!=</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
				<span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">value</span> <span class="pl-c1">=</span> <span class="pl-s1">buckets</span><span class="pl-kos">[</span><span class="pl-s1">j</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-en">shift</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-c1">!=</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
					<span class="pl-s1">array</span><span class="pl-kos">[</span><span class="pl-s1">pos</span><span class="pl-c1">++</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">value</span><span class="pl-kos">;</span> <span class="pl-c">//将不同桶里数据挨个捞出来，为下一轮高位排序做准备，由于靠近桶底的元素排名靠前，因此从桶底先捞</span>
				<span class="pl-kos">}</span>
			<span class="pl-kos">}</span>
		<span class="pl-kos">}</span>
	<span class="pl-kos">}</span>
	<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">timeEnd</span><span class="pl-kos">(</span><span class="pl-s">'计数排序耗时'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">return</span> <span class="pl-s1">array</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>测试</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-k">const</span> <span class="pl-s1">array</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">44</span><span class="pl-kos">,</span> <span class="pl-c1">38</span><span class="pl-kos">,</span> <span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">47</span><span class="pl-kos">,</span> <span class="pl-c1">15</span><span class="pl-kos">,</span> <span class="pl-c1">36</span><span class="pl-kos">,</span> <span class="pl-c1">26</span><span class="pl-kos">,</span> <span class="pl-c1">27</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">46</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">19</span><span class="pl-kos">,</span> <span class="pl-c1">50</span><span class="pl-kos">,</span> <span class="pl-c1">48</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'原始array:'</span><span class="pl-kos">,</span> <span class="pl-s1">array</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">const</span> <span class="pl-s1">newArr</span> <span class="pl-c1">=</span> <span class="pl-en">radixSort</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'newArr:'</span><span class="pl-kos">,</span> <span class="pl-s1">newArr</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// 原始 array: &nbsp;[3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]</span>
<span class="pl-c">// 堆排序耗时:   0.064208984375ms</span>
<span class="pl-c">// newArr: &nbsp;	 [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</span></pre>
        </div>
        <p><strong>分析</strong></p>
        <ul>
          <li>
            <p>第一，基数排序是原地排序算法吗 ？<br>
              因为计数排序的空间复杂度为 O(n + k)，所以不是原地排序算法。</p>
          </li>
          <li>
            <p>第二，基数排序是稳定的排序算法吗 ？<br>
              基数排序不改变相同元素之间的相对顺序，因此它是稳定的排序算法。</p>
          </li>
          <li>
            <p>第三，基数排序的时间复杂度是多少 ？<br>
              最佳情况：T(n) = O(n * k)<br>
              最差情况：T(n) = O(n * k)<br>
              平均情况：T(n) = O(n * k)<br>
              k 是待排序列最大值。</p>
          </li>
        </ul>
        <p>LSD 基数排序动图演示：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/53e78f817d36467707502dd0627a39ce1f4978c1eae99d4281b1921743e906b8/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d616666303165663461316531396637342e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
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
        <h2>5. 解答开篇</h2>
        <p>回过头来看看开篇的思考题：<strong>如何根据年龄给 100 万用户排序 ？</strong></p>
        <p>你可能会说，我用上一节讲的归并、快排就可以搞定啊！是的，它们也可以完成功能，但是时间复杂度最低也是 O(nlogn)。</p>
        <p>有没有更快的排序方法呢 ？以下是参考答案。</p>
        <ul>
          <li>实际上，根据年龄给 100 万用户排序，就类似按照成绩给 50 万考生排序。</li>
          <li>我们假设年龄的范围最小 1 岁，最大不超过 120 岁。</li>
          <li>我们可以遍历这 100 万用户，根据年龄将其划分到这 120 个桶里，然后依次顺序遍历这 120 个桶中的元素。</li>
          <li>这样就得到了按照年龄排序的 100 万用户数据。</li>
        </ul>
        <h2>6. 复杂性对比</h2>
        <p><strong>基数排序 vs 计数排序 vs 桶排序</strong></p>
        <p>基数排序有两种方法：</p>
        <ul>
          <li>MSD 从高位开始进行排序</li>
          <li>LSD 从低位开始进行排序</li>
        </ul>
        <p>这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：</p>
        <ul>
          <li>基数排序：根据键值的每位数字来分配桶；</li>
          <li>计数排序：每个桶只存储单一键值；</li>
          <li>桶排序：每个桶存储一定范围的数值；</li>
        </ul>
        <p><strong>复杂性对比</strong></p>
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
              <td align="center">桶排序</td>
              <td align="center">O(n + k)</td>
              <td align="center">O(n + k)</td>
              <td align="center">O(n<sup>2</sup>)</td>
              <td align="center">O(n + k)</td>
              <td align="center">Yes</td>
              <td align="center">Out-place</td>
            </tr>
            <tr>
              <td align="center">计数排序</td>
              <td align="center">O(n + k)</td>
              <td align="center">O(n + k)</td>
              <td align="center">O(n + k)</td>
              <td align="center">O(k)</td>
              <td align="center">Yes</td>
              <td align="center">Out-place</td>
            </tr>
            <tr>
              <td align="center">基数排序</td>
              <td align="center">O(n * k)</td>
              <td align="center">O(n * k)</td>
              <td align="center">O(n * k)</td>
              <td align="center">O(n + k)</td>
              <td align="center">Yes</td>
              <td align="center">Out-place</td>
            </tr>
          </tbody>
        </table>
        <p>n: 数据规模</p>
        <blockquote>
          <p>桶排序的时间复杂度可以是多种情况的，取决于桶内的排序。</p>
        </blockquote>
      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'page7'
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