This is a short and easily accessible post about the intruiging topic of 


A tiny computer program may need ages to be computed. Even on the fastest computers. I am not referring to an [infinite loop](https://en.wikipedia.org/wiki/Infinite_loop). Such loop is computing endlessly. Here, a special class of computer programs is meant. These programs can compute very large numbers with just a few lines of code.   

Welcome of the world of [hyperoperations](https://en.wikipedia.org/wiki/Hyperoperation).

This brief post is meant to be an easy-to-read introduction to hyperoperations. Some basic programming knowledge will be helpful but not required to understand the basic ideas. At the end of the post you will learn how to compute the largest number you've ever seen on your computer. Unless, you saw a higher number already.

Do you remember early school classes? The [mathematical operation](https://en.wikipedia.org/wiki/Operation_(mathematics)) [multiplication](https://en.wikipedia.org/wiki/Multiplication) is nothing else than repeated [addition](https://de.wikipedia.org/wiki/Addition). And [exponentiation](https://en.wikipedia.org/wiki/Exponentiation) is repeated multiplication. Here are some examples:

$$
\begin{align}
3\times 2 &= \underbrace{2+2+2}_{3\,\text{times}}\\
2^3 &= \underbrace{2\times 2\times 2}_{3\,\text{times}}
\end{align}
$$

The horizontal braces annotate the number of repetitions.

Easy, right. This is just common math. However, not so commonly known is that these two mathematical operations are members of a hierarchy of more and more heavy-to-compute operations. One can also repeat exponentiation and then repeat whatever comes after exponentiation and so on. The computations get heavier because at each level of this hierarchy the computational work of the level below gets multiplied.  

It is very easy to write a computer program that constructs hyperoperations. In the following code box a [Python](https://www.python.org/) program is shown that defines a hyperoperator constructor and then uses it to prints out the results of some computations:

<pre><code class="lang-python">def hyper(k):
  if k is 1:
    return lambda x, y: x + y
  #if k is 2:
  #  return lambda x, y: x * y
  else:
    def operator(x, y):
      lower_operator = hyper(k-1)
      z = 0 if k < 3 else 1
      for i in range(y):
        z = lower_operator(x, z)
      return z
    return operator

print(
  hyper(1)(2,3),
  hyper(2)(2,3),
  hyper(3)(2,3),
  hyper(4)(2,3),
  #hyper(4)(2,5),
  hyper(5)(2,3)
)
</code></pre>

A few lines are inactive. These are preceeded by the `#` (comment) symbol. More on this later.

If you have Python installed, then give it a try and open a command line console. Type `python`, copy the code above and paste it right after the `>>>` prompt. The response should be:

<pre><code class="lang-default">
5 6 8 16 65536
</code></pre>

These are results for $2+3$ (`hyper(1)`), $2\times 3$ (`hyper(2)`), and $2^3$ (`hyper(3)`). The next hyperoperation, `hyper(4)`, is sometimes written as ${}^3 2$ and called [tetration](https://en.wikipedia.org/wiki/Tetration), a mixture of *iteration* and *tetra-* (four). With just two small inputs, $1$ and $2$, the result is already $65536$.

Now, put the code into a text editor and change the line:

<pre><code class="lang-python">
#hyper(4)(2,5),
</code></pre>

to:

<pre><code class="lang-python">
hyper(4)(2,5),
</code></pre>

This activates the computation of the $5$th tetration of $2$. Running this code takes a very, very long time. Let's not await the end. Close the console window.

A simple trick speed speeds up the code. The idea is to use the built-in multiplication for `hyper(2)`. Activate the remaining two deactivated lines such that they become:

<pre><code class="lang-python">
if k is 2:
  return lambda x, y: x * y
</code></pre>

Running the code again should yield a much quicker result. My computer (Intel i7-5820K based) responses almost immediately.

The result should now be printed to the console window. An impressive number made of $19729$ digits. Here is a cut version:

<pre><code class="lang-default">
20035299304068464649790723515602557504478254755697
... (19629 more digits)
95337539755822087777506072339445587895905719156736
</code></pre>

A larger part of this number is shown in the background image at the top of this post.

This post hardly scratches the surface of the topic of hyperoperations.

Have fun.

Jens