---
layout: default
---
<div class="header">
	<h1>Index of {{ site.name }}{{ page.url }}</h1>
	{% include header.html %}
</div>
<hr class="line">
<div class="posts">
	<table>
		<tr>
			<td><a href="/tags">Tags-List/</a></td>
			<td>&nbsp;-&nbsp;</td>
			<td>&nbsp;-&nbsp;</td>
		</tr>
	{% for post in site.posts %}
		<tr>
			<td><a href="{{  post.url }}" title="{{ post.title }}">{{ post.title }}</a></td>
			<td>{{ post.date | date: "%Y-%m-%d" }}</td>
			<td>
			{% for tag in post.tags %}
			<a href="/tag/{{ tag }}/" title="{{ tag }}">{{ tag }}</a>
			{% endfor %}
			</td>
		</tr>
	{% endfor %}
	</table>
</div>
<script src="/assets/js/001.js"></script>