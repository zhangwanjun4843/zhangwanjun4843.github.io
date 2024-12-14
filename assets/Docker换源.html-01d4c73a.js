import{_ as n,W as s,X as a,a2 as e}from"./framework-0bc3c581.js";const t={},i=e(`<p>配置Docker使用国内镜像源的步骤如下：</p><h3 id="对于windows和macos用户" tabindex="-1"><a class="header-anchor" href="#对于windows和macos用户" aria-hidden="true">#</a> 对于Windows和macOS用户：</h3><ol><li>打开Docker Desktop应用。</li><li>进入Settings（设置）&gt; Docker Engine。</li><li>在JSON配置中添加国内镜像源地址，例如：<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://registry.docker-cn.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;http://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirror.ccs.tencentyun.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>应用并重启Docker Desktop。</li></ol><h3 id="对于linux用户" tabindex="-1"><a class="header-anchor" href="#对于linux用户" aria-hidden="true">#</a> 对于Linux用户：</h3><ol><li>打开终端。</li><li>编辑Docker的配置文件<code>/etc/docker/daemon.json</code>，如果没有该文件，则创建它。</li><li>在配置文件中添加以下内容，替换为相应的国内镜像源地址：<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://docker.hpcloud.cloud&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://docker.m.daocloud.io&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://docker.unsee.tech&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://docker.1panel.live&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;http://mirrors.ustc.edu.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://docker.chenby.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;http://mirror.azure.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://dockerpull.org&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://dockerhub.icu&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://hub.rat.dev&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>保存并关闭文件。</li><li>重启Docker服务：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>运行以下命令来验证镜像源配置是否生效：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;Registry Mirrors&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>如果输出显示配置的镜像源地址，说明设置成功。</li></ol>`,5),o=[i];function c(l,r){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","Docker换源.html.vue"]]);export{u as default};
