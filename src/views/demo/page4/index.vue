<template>
  <d2-container>
    <div class="content">
      <div class="d-block comment-body markdown-body  js-comment-body">

        <h2>树</h2>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/28a036f2f868bcb0d146e9bd7c63053deb204dcf12cf2f30d06a4a181edd5b22/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d343931306633343466313034343938382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/28a036f2f868bcb0d146e9bd7c63053deb204dcf12cf2f30d06a4a181edd5b22/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d343931306633343466313034343938382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="树"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-4910f344f1044988.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p><strong>树</strong>的数据结构就像我们生活中的真实的树，只不过是倒过来的形状。</p>
        <p><strong>术语定义</strong></p>
        <ul>
          <li>节点：树中的每个元素称为节点，如 A、B、C、D、E、F、G、H、I、J。</li>
          <li>父节点：指向子节点的节点，如 A。</li>
          <li>子节点：被父节点指向的节点，如 A 的孩子 B、C、D。</li>
          <li>父子关系：相邻两节点的连线，称为父子关系，如 A 与 B，C 与 H，D 与 J。</li>
          <li>根节点：没有父节点的节点，如 A。</li>
          <li>叶子节点：没有子节点的节点，如 E、F、G、H、I、J。</li>
          <li>兄弟节点：具有相同父节点的多个节点称为兄弟节点，如 B、C、D。</li>
          <li>节点的高度：节点到叶子节点的<strong>最长路径</strong>所包含的边数。</li>
          <li>节点的深度：根节点到节点的路径所包含的边数。</li>
          <li>节点层数：节点的深度 +1（根节点的层数是 1 ）。</li>
          <li>树的高度：等于根节点的高度。</li>
          <li>森林： n 棵互不相交的树的集合。</li>
        </ul>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/14633b7413f1627d0de6624b1226a6c1e78abf4b597a177a2f9c4f3f627dcf63/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d353963656530666261393538376463392e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/14633b7413f1627d0de6624b1226a6c1e78abf4b597a177a2f9c4f3f627dcf63/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d353963656530666261393538376463392e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="树的高度、深度、层"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-59cee0fba9587dc9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>高度是从<strong>下往上</strong>度量，比如一个人的身高 180cm ，起点就是从 0 开始的。<br>
          深度是从<strong>上往下</strong>度量，比如泳池的深度 180cm ，起点也是从 0 开始的。<br>
          高度和深度是带有<strong>度</strong>字的，都是从 0 开始计数的。<br>
          而层数的计算，是和我们平时的楼层的计算是一样的，最底下那层是第 1 层，是从 1 开始计数的，所以根节点位于第 1 层，其他子节点依次加 1。</p>
        <h3>二叉树分类</h3>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/3f28530d2553dc306d4522a24d0e70e4e32207136bfe3d146917ef7eb3518d1e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d306139306539386265343233353937302e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/3f28530d2553dc306d4522a24d0e70e4e32207136bfe3d146917ef7eb3518d1e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d306139306539386265343233353937302e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="二叉树分类"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-0a90e98be4235970.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h4>二叉树</h4>
        <ul>
          <li>每个节点<strong>最多只有</strong> 2 个子节点的树，这两个节点分别是左子节点和右子节点。如上图中的 1、 2、3。<br>
            不过，二叉树并不要求每个节点都有两个子节点，有的节点只有左子节点，有的节点只有右子节点。以此类推，自己想四叉树、八叉树的结构图。</li>
        </ul>
        <h4>满二叉树</h4>
        <ul>
          <li>一种特殊的二叉树，除了叶子节点外，每个节点<strong>都有</strong>左右两个子节点，这种二叉树叫做满二叉树。如上图中的 2。</li>
        </ul>
        <h4>完全二叉树</h4>
        <ul>
          <li>一种特殊的二叉树，叶子节点都在最底下两层，最后一层叶子节都靠<strong>左</strong>排列，并且除了<strong>最后</strong>一层，其他层的节点个数都要达到<strong>最大</strong>，这种二叉树叫做完全二叉树。如上图的 3。<br>
            完全二叉树与不是完全二叉树的区分比较难，所以对比下图看看。</li>
        </ul>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/5ed7b9a0e1cd2ec02fe18fb012e63e6c055450c3fa91e03c00c5d4fd3c49fb80/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d376233613335393666323961363235302e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/5ed7b9a0e1cd2ec02fe18fb012e63e6c055450c3fa91e03c00c5d4fd3c49fb80/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d376233613335393666323961363235302e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="完全二叉树与不是完全二叉树"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-7b3a3596f29a6250.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h4>堆</h4>
        <p>之前的文章 <a
            href="https://github.com/biaochenxuying/blog/issues/34"
            data-hovercard-type="issue"
            data-hovercard-url="/biaochenxuying/blog/issues/34/hovercard"
          >栈内存与堆内存 、浅拷贝与深拷贝</a> 中有说到：JavaScript 中的引用类型（如对象、数组、函数等）是保存在堆内存中的对象，值大小不固定，栈内存中存放的该对象的访问地址指向堆内存中的对象，JavaScript 不允许直接访问堆内存中的位置，因此操作对象时，实际操作对象的引用。</p>
        <p>那么<strong>堆</strong>到底是什么呢 ？其数据结构又是怎样的呢 ？</p>
        <p>堆其实是一种特殊的树。只要满足这两点，它就是一个堆。</p>
        <ul>
          <li>堆是一个完全二叉树。<br>
            完全二叉树：除了最后一层，其他层的节点个数都是满的，最后一层的节点都靠左排列。</li>
          <li>堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。<br>
            也可以说：堆中每个节点的值都大于等于（或者小于等于）其左右子节点的值。这两种表述是等价的。</li>
        </ul>
        <p>对于每个节点的值都大于等于子树中每个节点值的堆，我们叫作<strong>大顶堆</strong>。对于每个节点的值都小于等于子树中每个节点值的堆，我们叫作<strong>小顶堆</strong>。</p>
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
        <h4>二叉查找树（Binary Search Tree）</h4>
        <ul>
          <li>一种特殊的二叉树，相对<strong>较小</strong>的值保存在<strong>左节点</strong>中，<strong>较大</strong>的值保存在<strong>右节点</strong>中，叫二叉查找树，也叫二叉搜索树。<br>
            二叉查找树是一种有序的树，所以支持快速查找、快速插入、删除一个数据。<br>
            下图中， 3 个都是二叉查找树，</li>
        </ul>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/cbf1863a603f547df2fd0c14d4b275803d98937affb11cf33b43ef3aec108521/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636164396262313664643862313465652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/cbf1863a603f547df2fd0c14d4b275803d98937affb11cf33b43ef3aec108521/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d636164396262313664643862313465652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="二叉查找树"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-cad9bb16dd8b14ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h4>平衡二叉查找树</h4>
        <ul>
          <li>平衡二叉查找树：<strong>二叉树中任意一个节点的左右子树的高度相差不能大于 1</strong>。<br>
            从这个定义来看，完全二叉树、满二叉树其实都是平衡二叉树，但是非完全二叉树也有可能是平衡二叉树。<br>
            平衡二叉查找树中<strong>平衡</strong>的意思，其实就是让整棵树左右看起来比较<strong>对称</strong>、比较<strong>平衡</strong>，不要出现左子树很高、右子树很矮的情况。这样就能让整棵树的高度相对来说低一些，相应的插入、删除、查找等操作的效率高一些。<br>
            平衡二叉查找树其实有很多，比如，Splay Tree（伸展树）、Treap（树堆）等，但是我们提到平衡二叉查找树，听到的基本都是红黑树。</li>
        </ul>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/0bdfba82e4c0b5eeb80b3c4e9f431863382d96c89c1ae7e88837446dc64e9f35/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d303066616363383737363733346436312e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/0bdfba82e4c0b5eeb80b3c4e9f431863382d96c89c1ae7e88837446dc64e9f35/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d303066616363383737363733346436312e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="平衡二叉树与非平衡二叉树"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-00facc8776734d61.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h4>红黑树（Red-Black Tree）</h4>
        <p>红黑树中的节点，一类被标记为黑色，一类被标记为红色。除此之外，一棵红黑树还需要满足这样几个要求：</p>
        <ul>
          <li>根节点是黑色的。</li>
          <li>每个叶子节点都是黑色的空节点（NIL），也就是说，叶子节点不存储数据。</li>
          <li>任何相邻的节点都不能同时为红色，也就是说，红色节点是被黑色节点隔开的。</li>
          <li>每个节点，从该节点到达其可达叶子节点的所有路径，都包含相同数目的黑色节点。</li>
        </ul>
        <p>下面两个都是红黑树。</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/590a98b289e9accf8cf3445bb9376e37cf2cc41eee068ca6dbbca8d51585fefa/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d656638613436323861336266633834612e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/590a98b289e9accf8cf3445bb9376e37cf2cc41eee068ca6dbbca8d51585fefa/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d656638613436323861336266633834612e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="红黑树"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-ef8a4628a3bfc84a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h3>存储</h3>
        <p><strong>完全二叉树的存储</strong></p>
        <ul>
          <li>链式存储<br>
            每个节点由 3 个字段，其中一个存储数据，另外两个是指向左右子节点的指针。<br>
            我们只要拎住根节点，就可以通过左右子节点的指针，把整棵树都串起来。<br>
            这种存储方式比较常用，大部分二叉树代码都是通过这种方式实现的。</li>
        </ul>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/d8fe05d095fe7df9795bd63a24cec92876cd8abc783675e3c556a7e50f39f6f4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d313965633461326164613231313864622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/d8fe05d095fe7df9795bd63a24cec92876cd8abc783675e3c556a7e50f39f6f4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d313965633461326164613231313864622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="链式存储"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-19ec4a2ada2118db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <ul>
          <li>顺序存储<br>
            用数组来存储，对于完全二叉树，如果节点 X 存储在数组中的下标为 i ，那么它的左子节点的存储下标为 2 * i ，右子节点的下标为 2 * i + 1，反过来，下标 i / 2 位置存储的就是该节点的父节点。<br>
            注意，根节点存储在下标为 1 的位置。完全二叉树用数组来存储是最省内存的方式。</li>
        </ul>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/ea9fb536e8ff7bfe8d5af19918b1359d2b03022a905c8c2d6cd2bfacfef9bc36/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d386533663935666531623237363333362e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/ea9fb536e8ff7bfe8d5af19918b1359d2b03022a905c8c2d6cd2bfacfef9bc36/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d386533663935666531623237363333362e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="顺序存储"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-8e3f95fe1b276336.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <h3>二叉树的遍历</h3>
        <p>经典的方法有三种：前序遍历、中序遍历、后序遍历。其中，前、中、后序，表示的是节点与它的左右子树节点遍历访问的先后顺序。</p>
        <p><strong>前序遍历（根 =&gt; 左 =&gt; 右）</strong></p>
        <ul>
          <li>对于树中的任意节点来说，先访问这个节点，然后再访问它的左子树，最后访问它的右子树。</li>
        </ul>
        <p><strong>中序遍历（左 =&gt; 根 =&gt; 右）</strong></p>
        <ul>
          <li>对于树中的任意节点来说，先访问它的左子树，然后再访问它的本身，最后访问它的右子树。</li>
        </ul>
        <p><strong>后序遍历（左 =&gt; 右 =&gt; 根）</strong></p>
        <ul>
          <li>对于树中的任意节点来说，先访问它的左子树，然后再访问它的右子树，最后访问它本身。</li>
        </ul>
        <p>实际上，二叉树的前、中、后序遍历就是一个递归的过程。</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/0c1718eef91948dfa796d6434fb5a451a155ae1478b11cf32cea50821fe1ba23/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d623865393936363431613461303033642e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/0c1718eef91948dfa796d6434fb5a451a155ae1478b11cf32cea50821fe1ba23/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d623865393936363431613461303033642e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="遍历"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-b8e996641a4a003d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <p>时间复杂度：3 种遍历方式中，每个节点最多会被访问 2 次，跟节点的个数 n 成正比，所以时间复杂度是 O(n)。</p>
        <h3>实现二叉查找树</h3>
        <p>二叉查找树的特点是：<strong>相对较小的值保存在左节点中，较大的值保存在右节点中。</strong></p>
        <p>代码实现二叉查找树，方法有以下这些。</p>
        <p><strong>方法</strong></p>
        <ul>
          <li>insert(key)：向树中插入一个新的键。</li>
          <li>search(key)：在树中查找一个键，如果节点存在，则返回 true；如果不存在，则返回 false。</li>
          <li>min：返回树中最小的值/键。</li>
          <li>max：返回树中最大的值/键。</li>
          <li>remove(key)：从树中移除某个键。</li>
        </ul>
        <p><strong>遍历</strong></p>
        <ul>
          <li>preOrderTraverse：通过<strong>先序遍历</strong>方式遍历所有节点。</li>
          <li>inOrderTraverse：通过<strong>中序遍历</strong>方式遍历所有节点。</li>
          <li>postOrderTraverse：通过<strong>后序遍历</strong>方式遍历所有节点。</li>
        </ul>
        <p><strong>具体代码</strong></p>
        <ul>
          <li>首先实现二叉查找树类的类</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-c">// 二叉查找树类</span>
<span class="pl-k">function</span> <span class="pl-v">BinarySearchTree</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-c">// 用于实例化节点的类</span>
    <span class="pl-k">var</span> <span class="pl-v">Node</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">key</span> <span class="pl-c1">=</span> <span class="pl-s1">key</span><span class="pl-kos">;</span> <span class="pl-c">// 节点的健值</span>
        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">left</span> <span class="pl-c1">=</span> <span class="pl-c1">null</span><span class="pl-kos">;</span> <span class="pl-c">// 指向左节点的指针</span>
        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">right</span> <span class="pl-c1">=</span> <span class="pl-c1">null</span><span class="pl-kos">;</span> <span class="pl-c">// 指向右节点的指针</span>
    <span class="pl-kos">}</span><span class="pl-kos">;</span>
    <span class="pl-k">var</span> <span class="pl-s1">root</span> <span class="pl-c1">=</span> <span class="pl-c1">null</span><span class="pl-kos">;</span> <span class="pl-c">// 将根节点置为null</span>
<span class="pl-kos">}</span></pre>
        </div>
        <ul>
          <li>insert 方法，向树中插入一个新的键。<br>
            遍历树，将插入节点的键值与遍历到的节点键值比较，如果前者大于后者，继续递归遍历右子节点，反之，继续遍历左子节点，直到找到一个空的节点，在该位置插入。</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">insert</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
    <span class="pl-k">var</span> <span class="pl-s1">newNode</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Node</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 实例化一个节点</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">root</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
        <span class="pl-s1">root</span> <span class="pl-c1">=</span> <span class="pl-s1">newNode</span><span class="pl-kos">;</span> <span class="pl-c">// 如果树为空，直接将该节点作为根节点</span>
    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
        <span class="pl-en">insertNode</span><span class="pl-kos">(</span><span class="pl-s1">root</span><span class="pl-kos">,</span><span class="pl-s1">newNode</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 插入节点（传入根节点作为参数）</span>
    <span class="pl-kos">}</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-c">// 插入节点的函数</span>
<span class="pl-k">var</span> <span class="pl-en">insertNode</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">,</span> <span class="pl-s1">newNode</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
    <span class="pl-c">// 如果插入节点的键值小于当前节点的键值</span>
    <span class="pl-c">// （第一次执行insertNode函数时，当前节点就是根节点）</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">newNode</span><span class="pl-kos">.</span><span class="pl-c1">key</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
            <span class="pl-c">// 如果当前节点的左子节点为空，就直接在该左子节点处插入</span>
            <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span> <span class="pl-c1">=</span> <span class="pl-s1">newNode</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
            <span class="pl-c">// 如果左子节点不为空，需要继续执行insertNode函数，</span>
            <span class="pl-c">// 将要插入的节点与左子节点的后代继续比较，直到找到能够插入的位置</span>
            <span class="pl-en">insertNode</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span><span class="pl-kos">,</span> <span class="pl-s1">newNode</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span>
    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
        <span class="pl-c">// 如果插入节点的键值大于当前节点的键值</span>
        <span class="pl-c">// 处理过程类似，只是insertNode函数继续比较的是右子节点</span>
        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
            <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span> <span class="pl-c1">=</span> <span class="pl-s1">newNode</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
            <span class="pl-en">insertNode</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">,</span> <span class="pl-s1">newNode</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span>
    <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre>
        </div>
        <p>在下图的树中插入健值为 6 的节点，过程如下：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/56ed367bb51ecf257f2e05c2b49eb547dc669da8d84beec4350ad8298d7df817/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d623639613535646239316465653163332e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/56ed367bb51ecf257f2e05c2b49eb547dc669da8d84beec4350ad8298d7df817/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d623639613535646239316465653163332e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-b69a55db91dee1c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <ul>
          <li>搜索最小值<br>
            在二叉搜索树里，不管是整个树还是其子树，最小值一定在树最左侧的最底层。<br>
            因此给定一颗树或其子树，只需要一直向左节点遍历到底就行了。</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">min</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-c">// min方法允许传入子树</span>
    <span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">node</span> <span class="pl-c1">||</span> <span class="pl-s1">root</span><span class="pl-kos">;</span>
    <span class="pl-c">// 一直遍历左侧子节点，直到底部</span>
    <span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-s1">node</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span> <span class="pl-c1">!==</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span>
    <span class="pl-k">return</span> <span class="pl-s1">node</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <ul>
          <li>搜索最大值<br>
            搜索最大值与搜索最小值类似，只是沿着树的右侧遍历。</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">max</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-c">// min方法允许传入子树</span>
    <span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">node</span> <span class="pl-c1">||</span> <span class="pl-s1">root</span><span class="pl-kos">;</span>
    <span class="pl-c">// 一直遍历左侧子节点，直到底部</span>
    <span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-s1">node</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span> <span class="pl-c1">!==</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span>
    <span class="pl-k">return</span> <span class="pl-s1">node</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <ul>
          <li>搜索特定值<br>
            搜索特定值的处理与插入值的处理类似。遍历树，将要搜索的值与遍历到的节点比较，如果前者大于后者，则递归遍历右侧子节点，反之，则递归遍历左侧子节点。</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">search</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
    <span class="pl-c">// 同样的，search方法允许在子树中查找值</span>
    <span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">node</span> <span class="pl-c1">||</span> <span class="pl-s1">root</span><span class="pl-kos">;</span>
    <span class="pl-k">return</span> <span class="pl-en">searchNode</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-en">searchNode</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
    <span class="pl-c">// 如果node是null，说明树中没有要查找的值，返回false</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
        <span class="pl-k">return</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">key</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
        <span class="pl-c">// 如果要查找的值小于该节点，继续递归遍历其左侧节点</span>
        <span class="pl-k">return</span> <span class="pl-en">searchNode</span><span class="pl-kos">(</span> <span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">key</span> <span class="pl-c1">&gt;</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
        <span class="pl-c">// 如果要查找的值大于该节点，继续递归遍历其右侧节点</span>
        <span class="pl-k">return</span> <span class="pl-en">searchNode</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
        <span class="pl-c">// 如果要查找的值等于该节点，说明查找成功，返回改节点</span>
        <span class="pl-k">return</span> <span class="pl-s1">node</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <ul>
          <li>移除节点<br>
            移除节点，首先要在树中查找到要移除的节点，再判断该节点是否有子节点、有一个子节点或者有两个子节点，最后分别处理。</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">remove</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
	<span class="pl-c">// 同样的，允许仅在子树中删除节点</span>
	<span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">node</span> <span class="pl-c1">||</span> <span class="pl-s1">root</span><span class="pl-kos">;</span>
	<span class="pl-k">return</span> <span class="pl-en">removeNode</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-s1">self</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-en">removeNode</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
	<span class="pl-c">// 如果 node 不存在，直接返回</span>
	<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span> <span class="pl-c1">===</span> <span class="pl-c1">false</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-k">return</span> <span class="pl-c1">null</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>

	<span class="pl-c">// 找到要删除的节点</span>
	<span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">self</span><span class="pl-kos">.</span><span class="pl-en">search</span><span class="pl-kos">(</span><span class="pl-s1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

	<span class="pl-c">// 第一种情况，该节点没有子节点</span>
	<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-c1">null</span><span class="pl-kos">;</span>
		<span class="pl-k">return</span> <span class="pl-s1">node</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>
	<span class="pl-c">// 第二种情况，该节点只有一个子节点的节点</span>
	<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-c">// 只有右节点</span>
		<span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">;</span>
		<span class="pl-k">return</span> <span class="pl-s1">node</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
		<span class="pl-c">// 只有左节点</span>
		<span class="pl-s1">node</span> <span class="pl-c1">=</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span><span class="pl-kos">;</span>
		<span class="pl-k">return</span> <span class="pl-s1">node</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span>
	<span class="pl-c">// 第三种情况，有有两个子节点的节点</span>
	<span class="pl-c">// 将右侧子树中的最小值，替换到要删除的位置</span>
	<span class="pl-c">// 找到最小值</span>
	<span class="pl-k">var</span> <span class="pl-s1">aux</span> <span class="pl-c1">=</span> <span class="pl-s1">self</span><span class="pl-kos">.</span><span class="pl-en">min</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-c">// 替换</span>
	<span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">key</span> <span class="pl-c1">=</span> <span class="pl-s1">aux</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">;</span>
	<span class="pl-c">// 删除最小值</span>
	<span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span> <span class="pl-c1">=</span> <span class="pl-en">removeNode</span><span class="pl-kos">(</span><span class="pl-s1">aux</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">,</span> <span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">return</span> <span class="pl-s1">node</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>第三种情况的处理过程，如下图所示。<br>
          当要删除的节点有两个子节点时，为了不破坏树的结构，删除后要替补上来的节点的键值大小必须在已删除节点的左、右子节点的键值之间，且替补上来的节点不应该有子节点，否则会产生一个节点有多个字节点的情况，因此，找右侧子树的最小值替换上来。<br>
          同理，找左侧子树的最大值替换上来也可以。</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/0e12be67a5e2dca86e9bb480171e3c07cfcf4f177f70f1b999f527cd7b591f62/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d366239353132306232643234633332382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/0e12be67a5e2dca86e9bb480171e3c07cfcf4f177f70f1b999f527cd7b591f62/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d366239353132306232643234633332382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-6b95120b2d24c328.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
        <ul>
          <li>先序遍历</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">preOrderTraverse</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
    <span class="pl-c">// 同样的，callback用于对遍历到的节点做操作</span>
    <span class="pl-en">preOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">root</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-en">preOrderTraverseNode</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-c">// 遍历到node为null为止</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span> <span class="pl-c1">!==</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-s1">callback</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 先处理当前节点</span>
        <span class="pl-en">preOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 再继续遍历左子节点</span>
        <span class="pl-en">preOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 最后遍历右子节点</span>
    <span class="pl-kos">}</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>用先序遍历遍历下图所示的树，并打印节点键值。<br>
          输出结果：11 7 5 3 6 9 8 10 15 13 12 14 20 18 25。<br>
          遍历过程如图：<br>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/facffb08b4a8898f9e8f451a43da2055178161fde689be4045958a300db17726/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d366363636639353464636233356637302e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/facffb08b4a8898f9e8f451a43da2055178161fde689be4045958a300db17726/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d366363636639353464636233356637302e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-6cccf954dcb35f70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a>
        </p>
        <ul>
          <li>中序遍历</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">inOrderTraverse</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
    <span class="pl-c">// callback用于对遍历到的节点做操作</span>
    <span class="pl-en">inOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">root</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-en">inOrderTraverseNode</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-c">// 遍历到node为null为止</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span> <span class="pl-c1">!==</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-c">// 优先遍历左边节点，保证从小到大遍历</span>
        <span class="pl-en">inOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-c">// 处理当前的节点</span>
        <span class="pl-s1">callback</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-c">// 遍历右侧节点</span>
        <span class="pl-en">inOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>对下图的树做中序遍历，并输出各个节点的键值。<br>
          依次输出：3 5 6 7 8 9 10 11 12 13 14 15 18 20 25。<br>
          遍历过程如图：<br>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/86a7547129856979bca721453d941872d3d6392c844d96725f37e4ec800fa5e5/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d626630363739366339626435323661652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/86a7547129856979bca721453d941872d3d6392c844d96725f37e4ec800fa5e5/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d626630363739366339626435323661652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-bf06796c9bd526ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a>
        </p>
        <ul>
          <li>后序遍历</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">postOrderTraverse</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
    <span class="pl-en">postOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">root</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-en">postOrderTraverseNode</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">node</span> <span class="pl-c1">!==</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-en">postOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">left</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//{1}</span>
        <span class="pl-en">postOrderTraverseNode</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">right</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//{2}</span>
        <span class="pl-s1">callback</span><span class="pl-kos">(</span><span class="pl-s1">node</span><span class="pl-kos">.</span><span class="pl-c1">key</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//{3}</span>
    <span class="pl-kos">}</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>可以看到，中序、先序、后序遍历的实现方式几乎一模一样，只是 {1}、{2}、{3} 行代码的执行顺序不同。<br>
          对下图的树进行后序遍历，并打印键值：3 6 5 8 10 9 7 12 14 13 18 25 20 15 11。<br>
          遍历过程如图：<br>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/46e432946a3744125be9234a78aa2237003f3cf51a8ffabc9356888a4aab850a/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d346538363532373435323462343133622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/46e432946a3744125be9234a78aa2237003f3cf51a8ffabc9356888a4aab850a/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d346538363532373435323462343133622e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt=""
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-4e865274524b413b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a>
        </p>
        <ul>
          <li>添加打印的方法 print。</li>
        </ul>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">print</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'root :'</span><span class="pl-kos">,</span> <span class="pl-s1">root</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-k">return</span> <span class="pl-s1">root</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre>
        </div>
        <p>测试过程：</p>
        <div class="highlight highlight-source-js">
          <pre><span class="pl-c">// 测试</span>
<span class="pl-k">var</span> <span class="pl-s1">binarySearchTree</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">BinarySearchTree</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-s1">arr</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">11</span><span class="pl-kos">,</span> <span class="pl-c1">7</span><span class="pl-kos">,</span> <span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">6</span><span class="pl-kos">,</span> <span class="pl-c1">9</span><span class="pl-kos">,</span> <span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-c1">10</span><span class="pl-kos">,</span> <span class="pl-c1">15</span><span class="pl-kos">,</span> <span class="pl-c1">13</span><span class="pl-kos">,</span> <span class="pl-c1">12</span><span class="pl-kos">,</span> <span class="pl-c1">14</span><span class="pl-kos">,</span> <span class="pl-c1">20</span><span class="pl-kos">,</span> <span class="pl-c1">18</span><span class="pl-kos">,</span> <span class="pl-c1">25</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">var</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
	<span class="pl-k">var</span> <span class="pl-s1">value</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">insert</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'先序遍历：'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-s1">arr</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">preOrderTraverse</span><span class="pl-kos">(</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
	<span class="pl-c">// console.log(value);</span>
	<span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'arr :'</span><span class="pl-kos">,</span> <span class="pl-s1">arr</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]</span>

<span class="pl-k">var</span> <span class="pl-s1">min</span> <span class="pl-c1">=</span> <span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">min</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'min:'</span><span class="pl-kos">,</span> <span class="pl-s1">min</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 3</span>
<span class="pl-k">var</span> <span class="pl-s1">max</span> <span class="pl-c1">=</span> <span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">max</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'max:'</span><span class="pl-kos">,</span> <span class="pl-s1">max</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 25</span>
<span class="pl-k">var</span> <span class="pl-s1">search</span> <span class="pl-c1">=</span> <span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">search</span><span class="pl-kos">(</span><span class="pl-c1">10</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'search:'</span><span class="pl-kos">,</span> <span class="pl-s1">search</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 10</span>
<span class="pl-k">var</span> <span class="pl-s1">remove</span> <span class="pl-c1">=</span> <span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">remove</span><span class="pl-kos">(</span><span class="pl-c1">13</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'remove:'</span><span class="pl-kos">,</span> <span class="pl-s1">remove</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 13</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'先序遍历：'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-s1">arr1</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">preOrderTraverse</span><span class="pl-kos">(</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
	<span class="pl-c">// console.log(value);</span>
	<span class="pl-s1">arr1</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'arr1 :'</span><span class="pl-kos">,</span> <span class="pl-s1">arr1</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// &nbsp;[11, 7, 5, 3, 6, 9, 8, 10, 15, 14, 12, 20, 18, 25]</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'中序遍历：'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-s1">arr2</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">inOrderTraverse</span><span class="pl-kos">(</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
	<span class="pl-c">// console.log(value);</span>
	<span class="pl-s1">arr2</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span> 
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'arr2 :'</span><span class="pl-kos">,</span> <span class="pl-s1">arr2</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//&nbsp;[3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 18, 20, 25]</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'后序遍历：'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-s1">arr3</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
<span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">postOrderTraverse</span><span class="pl-kos">(</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
	<span class="pl-c">// console.log(value);</span>
	<span class="pl-s1">arr3</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">'arr3 :'</span><span class="pl-kos">,</span> <span class="pl-s1">arr3</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// &nbsp;[3, 6, 5, 8, 10, 9, 7, 12, 14, 18, 25, 20, 15, 11]</span>

<span class="pl-s1">binarySearchTree</span><span class="pl-kos">.</span><span class="pl-en">print</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// 看控制台</span></pre>
        </div>
        <p>结果如下：</p>
        <p><a
            target="_blank"
            rel="noopener noreferrer"
            href="https://camo.githubusercontent.com/1a836c64f3f515372c8c1b0493d3055eaef2b5d6ca01d6ead563f149cf404117/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d613563386461356662623637343230372e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
          ><img
              src="https://camo.githubusercontent.com/1a836c64f3f515372c8c1b0493d3055eaef2b5d6ca01d6ead563f149cf404117/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d613563386461356662623637343230372e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"
              alt="测试结果"
              data-canonical-src="https://upload-images.jianshu.io/upload_images/12890819-a5c8da5fbb674207.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
              style="max-width:100%;"
            ></a></p>
      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'page4'
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