const e=JSON.parse('{"key":"v-50c7e451","path":"/posts/Docker%E6%8D%A2%E6%BA%90.html","title":"","lang":"en-US","frontmatter":{"icon":"edit","date":"2024-12-14T00:00:00.000Z","category":["Docker"],"tag":["red","round"],"star":true,"sticky":true,"description":"配置Docker使用国内镜像源的步骤如下： 对于Windows和macOS用户： 打开Docker Desktop应用。 进入Settings（设置）&gt; Docker Engine。 在JSON配置中添加国内镜像源地址，例如：{ \\"registry-mirrors\\": [ \\"https://docker.mirrors.ustc.edu.cn\\", \\"https://registry.docker-cn.com\\", \\"http://hub-mirror.c.163.com\\", \\"https://mirror.ccs.tencentyun.com\\" ] } 应用并重启Docker Desktop。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/Docker%E6%8D%A2%E6%BA%90.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"配置Docker使用国内镜像源的步骤如下： 对于Windows和macOS用户： 打开Docker Desktop应用。 进入Settings（设置）&gt; Docker Engine。 在JSON配置中添加国内镜像源地址，例如：{ \\"registry-mirrors\\": [ \\"https://docker.mirrors.ustc.edu.cn\\", \\"https://registry.docker-cn.com\\", \\"http://hub-mirror.c.163.com\\", \\"https://mirror.ccs.tencentyun.com\\" ] } 应用并重启Docker Desktop。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-14T07:53:56.000Z"}],["meta",{"property":"article:tag","content":"red"}],["meta",{"property":"article:tag","content":"round"}],["meta",{"property":"article:published_time","content":"2024-12-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-14T07:53:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-14T07:53:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"对于Windows和macOS用户：","slug":"对于windows和macos用户","link":"#对于windows和macos用户","children":[]},{"level":3,"title":"对于Linux用户：","slug":"对于linux用户","link":"#对于linux用户","children":[]}],"git":{"createdTime":1734162836000,"updatedTime":1734162836000,"contributors":[{"name":"junjun","email":"294784045@qq.com","commits":1}]},"readingTime":{"minutes":0.84,"words":252},"filePathRelative":"posts/Docker换源.md","localizedDate":"December 14, 2024","excerpt":"<p>配置Docker使用国内镜像源的步骤如下：</p>\\n<h3> 对于Windows和macOS用户：</h3>\\n<ol>\\n<li>打开Docker Desktop应用。</li>\\n<li>进入Settings（设置）&gt; Docker Engine。</li>\\n<li>在JSON配置中添加国内镜像源地址，例如：<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"registry-mirrors\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token string\\">\\"https://docker.mirrors.ustc.edu.cn\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"https://registry.docker-cn.com\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"http://hub-mirror.c.163.com\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"https://mirror.ccs.tencentyun.com\\"</span>\\n  <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>应用并重启Docker Desktop。</li>\\n</ol>","autoDesc":true}');export{e as data};
