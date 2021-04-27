<template>
  <d2-container>
    <div class="content">
      <div class="d-block comment-body markdown-body  js-comment-body">
        <h2>1. 平均时间复杂度都为 O(n<sup>2</sup>)的算法</h2>
        <p>之所以把<strong>冒泡排序、选择排序、插入排序</strong>放在一起比较，是因为它们的平均时间复杂度都为<strong>O(n<sup>2</sup>)</strong>。</p>
        <p>请大家带着问题：<strong>为什么插入排序比冒泡排序更受欢迎 ？</strong>来阅读下文。</p>
        <h2>2. 如何分析一个排序算法</h2>
        <p>复杂度分析是整个算法学习的精髓。</p>
        <ul>
          <li>时间复杂度: 一个算法执行所耗费的时间。</li>
          <li>空间复杂度: 运行完一个程序所需内存的大小。</li>
        </ul>
        <p>学习排序算法，我们除了学习它的算法原理、代码实现之外，更重要的是要学会如何评价、分析一个排序算法。</p>
        <p>分析一个排序算法，要从 <strong>执行效率</strong>、<strong>内存消耗</strong>、<strong>稳定性</strong> 三方面入手。</p>
        <h3>2.1 执行效率</h3>
        <p><strong>1. 最好情况、最坏情况、平均情况时间复杂度</strong></p>
        <p>我们在分析排序算法的时间复杂度时，要分别给出最好情况、最坏情况、平均情况下的时间复杂度。<br>
          除此之外，你还要说出最好、最坏时间复杂度对应的要排序的原始数据是什么样的。</p>
        <p><strong>2. 时间复杂度的系数、常数 、低阶</strong></p>
        <p>我们知道，时间复杂度反应的是数据规模 n 很大的时候的一个增长趋势，所以它表示的时候会忽略系数、常数、低阶。</p>
        <p>但是实际的软件开发中，我们排序的可能是 10 个、100 个、1000 个这样规模很小的数据，所以，在对同一阶时间复杂度的排序算法性能对比的时候，我们就要把系数、常数、低阶也考虑进来。</p>
        <p><strong>3. 比较次数和交换（或移动）次数</strong></p>
        <p>这一节和下一节讲的都是基于比较的排序算法。基于比较的排序算法的执行过程，会涉及两种操作，一种是元素比较大小，另一种是元素交换或移动。</p>
        <p>所以，如果我们在分析排序算法的执行效率的时候，应该把比较次数和交换（或移动）次数也考虑进去。</p>
        <h3>2.2 内存消耗</h3>
        <p>也就是看空间复杂度。</p>
        <p>还需要知道如下术语：</p>
        <ul>
          <li><strong>内排序</strong>：所有排序操作都在内存中完成；</li>
          <li><strong>外排序</strong>：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；</li>
          <li><strong>原地排序</strong>：原地排序算法，就是特指空间复杂度是 O(1) 的排序算法。<br>
            其中，冒泡排序就是原地排序算法。</li>
        </ul>
        <h3>2.3 稳定性</h3>
        <ul>
          <li>稳定：如果待排序的序列中存在值<strong>相等</strong>的元素，经过排序之后，相等元素之间原有的先后顺序<strong>不变</strong>。<br>
            比如： a 原本在 b 前面，而 a = b，排序之后，a 仍然在 b 的前面；</li>
          <li>不稳定：如果待排序的序列中存在值<strong>相等</strong>的元素，经过排序之后，相等元素之间原有的先后顺序<strong>改变</strong>。<br>
            比如：a 原本在 b 的前面，而 a = b，排序之后， a 在 b 的后面；</li>
        </ul>
        <h2>3. 冒泡排序</h2>
        <p><strong>思想</strong></p>
        <ul>
          <li>冒泡排序只会操作相邻的两个数据。</li>
          <li>每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。</li>
          <li>一次冒泡会让至少一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作。</li>
        </ul>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1: 比较相邻的元素。如果第一个比第二个大，就交换它们两个</li>
          <li>步骤2: 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数</li>
          <li>步骤3: 针对所有的元素重复以上的步骤，除了最后一个</li>
          <li>步骤4: 重复步骤1~3，直到排序完成</li>
        </ul>
        <p><strong>特点</strong></p>
        <ul>
          <li>优点：排序算法的基础，简单实用易于理解。</li>
          <li>缺点：比较次数多，效率较低。</li>
        </ul>
        <p><strong>实现</strong></p>
        <pre><code>// 冒泡排序（未优化）
const bubbleSort = arr =&gt; {
	console.time('改进前冒泡排序耗时');
	const length = arr.length;
	if (length &lt;= 1) return;
	// i &lt; length - 1 是因为外层只需要 length-1 次就排好了，第 length 次比较是多余的。
	for (let i = 0; i &lt; length - 1; i++) {
		// j &lt; length - i - 1 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
		for (let j = 0; j &lt; length - i - 1; j++) {
			if (arr[j] &gt; arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.log('改进前 arr :', arr);
	console.timeEnd('改进前冒泡排序耗时');
};
</code></pre>
        <p>优化：当某次冒泡操作已经没有数据交换时，说明已经达到完全有序，不用再继续执行后续的冒泡操作。</p>
        <pre><code>// 冒泡排序（已优化）
const bubbleSort2 = arr =&gt; {
	console.time('改进后冒泡排序耗时');
	const length = arr.length;
	if (length &lt;= 1) return;
	// i &lt; length - 1 是因为外层只需要 length-1 次就排好了，第 length 次比较是多余的。
	for (let i = 0; i &lt; length - 1; i++) {
		let hasChange = false; // 提前退出冒泡循环的标志位
		// j &lt; length - i - 1 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
		for (let j = 0; j &lt; length - i - 1; j++) {
			if (arr[j] &gt; arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				hasChange = true; // 表示有数据交换
			}
		}

		if (!hasChange) break; // 如果 false 说明所有元素已经到位，没有数据交换，提前退出
	}
	console.log('改进后 arr :', arr);
	console.timeEnd('改进后冒泡排序耗时');
};
</code></pre>
        <p><strong>测试</strong></p>
        <pre><code>// 测试
const arr = [7, 8, 4, 5, 6, 3, 2, 1];
bubbleSort(arr);
// 改进前 arr : [1, 2, 3, 4, 5, 6, 7, 8]
// 改进前冒泡排序耗时: 0.43798828125ms

const arr2 = [7, 8, 4, 5, 6, 3, 2, 1];
bubbleSort2(arr2);
// 改进后 arr : [1, 2, 3, 4, 5, 6, 7, 8]
// 改进后冒泡排序耗时: 0.318115234375ms
</code></pre>
        <p><strong>分析</strong></p>
        <ul>
          <li>第一，冒泡排序是原地排序算法吗 ？<br>
            冒泡的过程只涉及相邻数据的交换操作，只需要常量级的临时空间，所以它的空间复杂度为 O(1)，是一个<strong>原地</strong>排序算法。</li>
          <li>第二，冒泡排序是稳定的排序算法吗 ？<br>
            在冒泡排序中，只有交换才可以改变两个元素的前后顺序。<br>
            为了保证冒泡排序算法的稳定性，当有相邻的两个元素大小相等的时候，我们不做交换，相同大小的数据在排序前后不会改变顺序。<br>
            所以冒泡排序是<strong>稳定</strong>的排序算法。</li>
          <li>第三，冒泡排序的时间复杂度是多少 ？<br>
            最佳情况：T(n) = O(n)，当数据已经是正序时。<br>
            最差情况：T(n) = O(n<sup>2</sup>)，当数据是反序时。<br>
            平均情况：T(n) = O(n<sup>2</sup>)。</li>
        </ul>
        <p><strong>冒泡排序动画演示（一）</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/d86c328deea0e2c6fd6a4ec5bfd6b37c05db7224cf21e6098f89033930646885/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d363864353534363961633433396263362e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
          >
            <el-card style="text-align:center">
              <img
                src="./imgs/play.png"
                alt=""
                class="play-style"
              >
            </el-card>
          </a></p>
        <p><strong>冒泡排序动画演示（二）</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/70747a67f6231007e205efcd132d29b16c6d04394989567b63c6e3dce45f581d/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d333934386465393664346132383533302e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
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

        <h2>4. 选择排序</h2>
        <p><strong>思路</strong></p>
        <p>选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。</p>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。</li>
          <li>步骤2：再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。</li>
          <li>步骤3：重复第二步，直到所有元素均排序完毕。</li>
        </ul>
        <p><strong>实现</strong></p>
        <pre><code>const selectionSort = array =&gt; {
	const len = array.length;
	let minIndex, temp;
	for (let i = 0; i &lt; len - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j &lt; len; j++) {
			if (array[j] &lt; array[minIndex]) {
				// 寻找最小的数
				minIndex = j; // 将最小数的索引保存
			}
		}
		temp = array[i];
		array[i] = array[minIndex];
		array[minIndex] = temp;
		console.log('array: ', array);
	}
	return array;
};
</code></pre>
        <p>测试</p>
        <pre><code>// 测试
const array = [5, 4, 3, 2, 1];
console.log('原始array:', array);
selectionSort(array);
// 原始 array: &nbsp;[5, 4, 3, 2, 1]
// array: &nbsp;		 [1, 4, 3, 2, 5]
// array: &nbsp;		 [1, 2, 3, 4, 5]
// array: 		&nbsp;[1, 2, 3, 4, 5]
// array: &nbsp;		 [1, 2, 3, 4, 5]
</code></pre>
        <p><strong>分析</strong></p>
        <ul>
          <li>第一，选择排序是原地排序算法吗 ？<br>
            选择排序空间复杂度为 O(1)，是一种<strong>原地</strong>排序算法。</li>
          <li>第二，选择排序是稳定的排序算法吗 ？<br>
            选择排序每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，这样破坏了稳定性。所以，选择排序是一种<strong>不稳定</strong>的排序算法。</li>
          <li>第三，选择排序的时间复杂度是多少 ？<br>
            无论是正序还是逆序，选择排序都会遍历 n<sup>2</sup> / 2 次来排序，所以，最佳、最差和平均的复杂度是一样的。<br>
            最佳情况：T(n) = O(n<sup>2</sup>)。<br>
            最差情况：T(n) = O(n<sup>2</sup>)。<br>
            平均情况：T(n) = O(n<sup>2</sup>)。</li>
        </ul>
        <p><strong>选择排序动画演示</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/4666a4666d3bcd69f4fef7f3d7611173e50e6c541b3acde24e1a75da0e532c7b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d323764646662363336656162666630332e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
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

        <h2>5. 插入排序</h2>
        <p>插入排序又为分为 <strong>直接插入排序</strong> 和优化后的 <strong>拆半插入排序</strong> 与 <strong>希尔排序</strong>，我们通常说的插入排序是指直接插入排序。</p>
        <p><strong>一、直接插入</strong></p>
        <p><strong>思想</strong></p>
        <p>一般人打扑克牌，整理牌的时候，都是按牌的大小（从小到大或者从大到小）整理牌的，那每摸一张新牌，就扫描自己的牌，把新牌插入到相应的位置。</p>
        <p>插入排序的工作原理：通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。</p>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1：从第一个元素开始，该元素可以认为已经被排序；</li>
          <li>步骤2：取出下一个元素，在已经排序的元素序列中从后向前扫描；</li>
          <li>步骤3：如果该元素（已排序）大于新元素，将该元素移到下一位置；</li>
          <li>步骤4：重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；</li>
          <li>步骤5：将新元素插入到该位置后；</li>
          <li>步骤6：重复步骤 2~5。</li>
        </ul>
        <p><strong>实现</strong></p>
        <pre><code>// 插入排序
const insertionSort = array =&gt; {
	const len = array.length;
	if (len &lt;= 1) return

	let preIndex, current;
	for (let i = 1; i &lt; len; i++) {
		preIndex = i - 1; //待比较元素的下标
		current = array[i]; //当前元素
		while (preIndex &gt;= 0 &amp;&amp; array[preIndex] &gt; current) {
			//前置条件之一: 待比较元素比当前元素大
			array[preIndex + 1] = array[preIndex]; //将待比较元素后移一位
			preIndex--; //游标前移一位
		}
		if (preIndex + 1 != i) {
			//避免同一个元素赋值给自身
			array[preIndex + 1] = current; //将当前元素插入预留空位
			console.log('array :', array);
		}
	}
	return array;
};
</code></pre>
        <p>测试</p>
        <pre><code>// 测试
const array = [5, 4, 3, 2, 1];
console.log("原始 array :", array);
insertionSort(array);
// 原始 array:   &nbsp;[5, 4, 3, 2, 1]
// array: &nbsp;		 [4, 5, 3, 2, 1]
// array: &nbsp;		 [3, 4, 5, 2, 1]
// array: 		&nbsp;[2, 3, 4, 5, 1]
// array: &nbsp;		 [1, 2, 3, 4, 5]
</code></pre>
        <p><strong>分析</strong></p>
        <ul>
          <li>第一，插入排序是原地排序算法吗 ？<br>
            插入排序算法的运行并不需要额外的存储空间，所以空间复杂度是 O(1)，所以，这是一个<strong>原地</strong>排序算法。</li>
          <li>第二，插入排序是稳定的排序算法吗 ？<br>
            在插入排序中，对于值相同的元素，我们可以选择将后面出现的元素，插入到前面出现元素的后面，这样就可以保持原有的前后顺序不变，所以插入排序是<strong>稳定</strong>的排序算法。</li>
          <li>第三，插入排序的时间复杂度是多少 ？<br>
            最佳情况：T(n) = O(n)，当数据已经是正序时。<br>
            最差情况：T(n) = O(n<sup>2</sup>)，当数据是反序时。<br>
            平均情况：T(n) = O(n<sup>2</sup>)。</li>
        </ul>
        <p><strong>直接插入排序动画演示</strong></p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/43073411424d4d09258bb167a865492b41f4c478f2947fb5a9349398b085f326/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d386261313137353036333732653937652e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970"
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

        <p><strong>二、拆半插入</strong></p>
        <p>插入排序也有一种优化算法，叫做<strong>拆半插入</strong>。</p>
        <p><strong>思想</strong></p>
        <p>折半插入排序是直接插入排序的升级版，鉴于插入排序第一部分为已排好序的数组, 我们不必按顺序依次寻找插入点, 只需比较它们的中间值与待插入元素的大小即可。</p>
        <p><strong>算法描述</strong></p>
        <ul>
          <li>步骤1：取 0 ~ i-1 的中间点 ( m = (i-1)&gt;&gt;1 )，array[i] 与 array[m] 进行比较，若 array[i] &lt; array[m]，则说明待插入的元素 array[i] 应该处于数组的 0 ~ m 索引之间；反之，则说明它应该处于数组的 m ~ i-1 索引之间。</li>
          <li>步骤2：重复步骤 1，每次缩小一半的查找范围，直至找到插入的位置。</li>
          <li>步骤3：将数组中插入位置之后的元素全部后移一位。</li>
          <li>步骤4：在指定位置插入第 i 个元素。</li>
        </ul>
        <blockquote>
          <p>注：x&gt;&gt;1 是位运算中的右移运算，表示右移一位，等同于 x 除以 2 再取整，即 x&gt;&gt;1 == Math.floor(x/2) 。</p>
        </blockquote>
        <pre><code>// 折半插入排序
const binaryInsertionSort = array =&gt; {
	const len = array.length;
	if (len &lt;= 1) return;

	let current, i, j, low, high, m;
	for (i = 1; i &lt; len; i++) {
		low = 0;
		high = i - 1;
		current = array[i];

		while (low &lt;= high) {
			//步骤 1 &amp; 2 : 折半查找
			m = (low + high) &gt;&gt; 1; // 注: x&gt;&gt;1 是位运算中的右移运算, 表示右移一位, 等同于 x 除以 2 再取整, 即 x&gt;&gt;1 == Math.floor(x/2) .
			if (array[i] &gt;= array[m]) {
				//值相同时, 切换到高半区，保证稳定性
				low = m + 1; //插入点在高半区
			} else {
				high = m - 1; //插入点在低半区
			}
		}
		for (j = i; j &gt; low; j--) {
			//步骤 3: 插入位置之后的元素全部后移一位
			array[j] = array[j - 1];
			console.log('array2 :', JSON.parse(JSON.stringify(array)));
		}
		array[low] = current; //步骤 4: 插入该元素
	}
	console.log('array2 :', JSON.parse(JSON.stringify(array)));
	return array;
};
</code></pre>
        <p>测试</p>
        <pre><code>const array2 = [5, 4, 3, 2, 1];
console.log('原始 array2:', array2);
binaryInsertionSort(array2);
// 原始 array2:  [5, 4, 3, 2, 1]
// array2 : &nbsp;&nbsp;  [5, 5, 3, 2, 1]
// array2 : &nbsp;&nbsp;  [4, 5, 5, 2, 1]
// array2 : &nbsp;&nbsp;  [4, 4, 5, 2, 1]
// array2 : &nbsp;&nbsp;  [3, 4, 5, 5, 1]
// array2 : &nbsp;&nbsp;  [3, 4, 4, 5, 1]
// array2 : &nbsp;&nbsp;  [3, 3, 4, 5, 1]
// array2 : &nbsp;&nbsp;  [2, 3, 4, 5, 5]
// array2 : &nbsp;&nbsp;  [2, 3, 4, 4, 5]
// array2 : &nbsp;&nbsp;  [2, 3, 3, 4, 5]
// array2 : &nbsp;&nbsp;  [2, 2, 3, 4, 5]
// array2 : &nbsp;&nbsp;  [1, 2, 3, 4, 5]
</code></pre>
        <p><strong>注意</strong>：和直接插入排序类似，折半插入排序每次交换的是相邻的且值为不同的元素，它并不会改变值相同的元素之间的顺序，因此它是稳定的。</p>
        <p><strong>三、希尔排序</strong></p>
        <p>希尔排序是一个平均时间复杂度为 O(nlogn) 的算法，会在下一个章节和 归并排序、快速排序、堆排序 一起讲，本文就不展开了。</p>

        <h2>6. 解答开篇</h2>
        <p><strong>为什么插入排序比冒泡排序更受欢迎 ？</strong></p>
        <p>冒泡排序和插入排序的时间复杂度都是 O(n<sup>2</sup>)，都是原地排序算法，为什么插入排序要比冒泡排序更受欢迎呢 ？</p>
        <p>这里关乎到 逆序度、满有序度、有序度。</p>
        <ul>
          <li><strong>有序度</strong>：是数组中具有有序关系的元素对的个数。<br>
            有序元素对用数学表达式表示就是这样：</li>
        </ul>
        <pre><code>有序元素对：a[i] &lt;= a[j], 如果 i &lt; j。
</code></pre>
        <ul>
          <li>
            <p><strong>满有序度</strong>：把完全有序的数组的有序度叫作 <strong>满有序度</strong>。</p>
          </li>
          <li>
            <p><strong>逆序度</strong>：正好跟有序度相反（默认从小到大为有序）。</p>
          </li>
        </ul>
        <pre><code>逆序元素对：a[i] &gt; a[j], 如果 i &lt; j。
</code></pre>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/9569b47092f184221ad22b92f6694a701ae9b9f01f628ba21ceea8092a42b868/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d666436376539663763303031336538382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/9569b47092f184221ad22b92f6694a701ae9b9f01f628ba21ceea8092a42b868/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d666436376539663763303031336538382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-fd67e9f7c0013e88.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>同理，对于一个倒序排列的数组，比如 6，5，4，3，2，1，有序度是 0；<br>
          对于一个完全有序的数组，比如 1，2，3，4，5，6，有序度就是 <em><em>n</em>(n-1)/2</em>* ，也就是满有序度为 15。</p>
        <p><strong>原因</strong></p>
        <ul>
          <li>冒泡排序不管怎么优化，元素交换的次数是一个固定值，是原始数据的逆序度。</li>
          <li>插入排序是同样的，不管怎么优化，元素移动的次数也等于原始数据的逆序度。</li>
          <li>但是，冒泡排序的数据交换要比插入排序的数据移动要复杂，冒泡排序需要 3 个赋值操作，而插入排序只需要 1 个，数据量一旦大了，这差别就非常明显了。</li>
        </ul>
        <h2>7. 排序算法的复杂性对比</h2>
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
              <td align="center">冒泡排序</td>
              <td align="center">O(n<sup>2</sup>)</td>
              <td align="center">O(n)</td>
              <td align="center">O(n<sup>2</sup>)</td>
              <td align="center">O(1)</td>
              <td align="center">Yes</td>
              <td align="center">In-place</td>
            </tr>
            <tr>
              <td align="center">插入排序</td>
              <td align="center">O(n<sup>2</sup>)</td>
              <td align="center">O(n)</td>
              <td align="center">O(n<sup>2</sup>)</td>
              <td align="center">O(1)</td>
              <td align="center">Yes</td>
              <td align="center">In-place</td>
            </tr>
            <tr>
              <td align="center">选择排序</td>
              <td align="center">O(n<sup>2</sup>)</td>
              <td align="center">O(n<sup>2</sup>)</td>
              <td align="center">O(n<sup>2</sup>)</td>
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
  name: 'page5'
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