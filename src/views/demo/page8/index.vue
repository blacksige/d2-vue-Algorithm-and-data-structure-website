<template>
  <d2-container>
    <div class="content">
      <div>

        <h1 style="text-align:center">排序算法总结</h1>
        <h2>1.十大经典排序算法的时间复杂度与空间复杂度比较。</h2>
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
        <p>名词解释：</p>
        <ul>
          <li><strong>n</strong>&nbsp;：数据规模；</li>
          <li><strong>k</strong>&nbsp;：桶的个数；</li>
          <li><strong>In-place</strong>&nbsp;: 占用常数内存，不占用额外内存；</li>
          <li><strong>Out-place</strong>&nbsp;: 占用额外内存。</li>
          <li><strong>稳定</strong>&nbsp;：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；</li>
          <li><strong>不稳定</strong>&nbsp;：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；</li>
          <li><strong>内排序</strong>&nbsp;：所有排序操作都在内存中完成；</li>
          <li><strong>外排序</strong>&nbsp;：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；</li>
          <li><strong>时间复杂度</strong>&nbsp;： 一个算法执行所耗费的时间。</li>
          <li><strong>空间复杂度</strong>&nbsp;：运行完一个程序所需内存的大小。</li>
        </ul>

        <h2>2.算法分类</h2>
        <img
          alt="image"
          class="has"
          src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzMyMjA2MzctMTA1NTA4ODExOC5wbmc?x-oss-process=image/format,png"
        >

        <h2>3.比较和非比较的区别</h2>
        <p style="text-indent:2em">常见的<strong>快速排序、归并排序、堆排序、冒泡排序</strong>&nbsp;等属于<strong>比较排序</strong>&nbsp;。
          在排序的最终结果里，元素之间的次序依赖于它们之间的比较。每个数都必须和其他数进行比较，才能确定自己的位置&nbsp;。</p>
        <p style="text-indent:2em">在冒泡排序之类的排序中，问题规模为n，又因为需要比较n次，所以平均时间复杂度为O(n²)。在归并排序、快速排序之类的排序中，问题规模通过分治法消减为logN次，所以时间复杂度平均O(nlogn)。
        <p style="text-indent:2em">比较排序的优势是，适用于各种规模的数据，也不在乎数据的分布，都能进行排序。可以说，比较排序适用于一切需要排序的情况。</p>
        <p style="text-indent:2em"><strong>计数排序、基数排序、桶排序</strong>则属于<strong>非比较排序</strong>&nbsp;。非比较排序是通过确定每个元素之前，应该有多少个元素来排序。针对数组arr，计算arr[i]之前有多少个元素，则唯一确定了arr[i]在排序后数组中的位置&nbsp;。</p>
        <p style="text-indent:2em">非比较排序只要确定每个元素之前的已有的元素个数即可，所有一次遍历即可解决。算法时间复杂度O(n)。非比较排序时间复杂度低，但由于非比较排序需要占用空间来确定唯一位置。所以对数据规模和数据分布有一定的要求。</p>

      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'page8'
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