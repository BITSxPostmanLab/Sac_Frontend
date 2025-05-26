"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlogPostType } from "@/types";
import { CommentsSection } from "@/components/blogs/comments/comment-section";
import DOMPurify from 'dompurify'
interface PageProps {

  params: Promise<{
    blogId: string
  }>
}


const htmlContent = `
  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome file</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="welcome-to-stackedit">Welcome to StackEdit!</h1>
<p>Hi! I’m your first Markdown file in <strong>StackEdit</strong>. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the <strong>file explorer</strong> on the left corner of the navigation bar.</p>
<h1 id="files">Files</h1>
<p>StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible <strong>offline!</strong></p>
<h2 id="create-files-and-folders">Create files and folders</h2>
<p>The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the <strong>New file</strong> button in the file explorer. You can also create folders by clicking the <strong>New folder</strong> button.</p>
<h2 id="switch-to-another-file">Switch to another file</h2>
<p>All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.</p>
<h2 id="rename-a-file">Rename a file</h2>
<p>You can rename the current file by clicking the file name in the navigation bar or by clicking the <strong>Rename</strong> button in the file explorer.</p>
<h2 id="delete-a-file">Delete a file</h2>
<p>You can delete the current file by clicking the <strong>Remove</strong> button in the file explorer. The file will be moved into the <strong>Trash</strong> folder and automatically deleted after 7 days of inactivity.</p>
<h2 id="export-a-file">Export a file</h2>
<p>You can export the current file by clicking <strong>Export to disk</strong> in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.</p>
<h1 id="synchronization">Synchronization</h1>
<p>Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your <strong>Google Drive</strong>, your <strong>Dropbox</strong> and your <strong>GitHub</strong> accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow… The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.</p>
<p>There are two types of synchronization and they can complement each other:</p>
<ul>
<li>
<p>The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.</p>
<blockquote>
<p>To start syncing your workspace, just sign in with Google in the menu.</p>
</blockquote>
</li>
<li>
<p>The file synchronization will keep one file of the workspace synced with one or multiple files in <strong>Google Drive</strong>, <strong>Dropbox</strong> or <strong>GitHub</strong>.</p>
<blockquote>
<p>Before starting to sync files, you must link an account in the <strong>Synchronize</strong> sub-menu.</p>
</blockquote>
</li>
</ul>
<h2 id="open-a-file">Open a file</h2>
<p>You can open a file from <strong>Google Drive</strong>, <strong>Dropbox</strong> or <strong>GitHub</strong> by opening the <strong>Synchronize</strong> sub-menu and clicking <strong>Open from</strong>. Once opened in the workspace, any modification in the file will be automatically synced.</p>
<h2 id="save-a-file">Save a file</h2>
<p>You can save any file of the workspace to <strong>Google Drive</strong>, <strong>Dropbox</strong> or <strong>GitHub</strong> by opening the <strong>Synchronize</strong> sub-menu and clicking <strong>Save on</strong>. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.</p>
<h2 id="synchronize-a-file">Synchronize a file</h2>
<p>Once your file is linked to a synchronized liojawefwefocation, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.</p>
<p>If you just have modified your file and you want to force syncing, click the <strong>Synchronize now</strong> button in the navigation bar.</p>
<blockquote>
<p><strong>Note:</strong> The <strong>Synchronize now</strong> button is disabled if you have no file to synchronize.</p>
</blockquote>
<h2 id="manage-file-synchronization">Manage file synchronization</h2>
<p>Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking <strong>File synchronization</strong> in the <strong>Synchronize</strong> sub-menu. This allows you to list and remove synchronized locations that are linked to your file.</p>
<h1 id="publication">Publication</h1>
<p>Publishing in StackEdit makes it simple for you to publish online your files. Once you’re happy with a file, you can publish it to different hosting platforms like <strong>Blogger</strong>, <strong>Dropbox</strong>, <strong>Gist</strong>, <strong>GitHub</strong>, <strong>Google Drive</strong>, <strong>WordPress</strong> and <strong>Zendesk</strong>. With <a href="http://handlebarsjs.com/">Handlebars templates</a>, you have full control over what you export.</p>
<blockquote>
<p>Before starting to publish, you must link an account in the <strong>Publish</strong> sub-menu.</p>
</blockquote>
<h2 id="publish-a-file">Publish a File</h2>
<p>You can publish your file by opening the <strong>Publish</strong> sub-menu and by clicking <strong>Publish to</strong>. For some locations, you can choose between the following formats:</p>
<ul>
<li>Markdown: publish the Markdown text on a website that can interpret it (<strong>GitHub</strong> for instance),</li>
<li>HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).</li>
</ul>
<h2 id="update-a-publication">Update a publication</h2>
<p>After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the <strong>Publish now</strong> button in the navigation bar.</p>
<blockquote>
<p><strong>Note:</strong> The <strong>Publish now</strong> button is disabled if your file has not been published yet.</p>
</blockquote>
<h2 id="manage-file-publication">Manage file publication</h2>
<p>Since one file can be published to multiple locations, you can list and manage publish locations by clicking <strong>File publication</strong> in the <strong>Publish</strong> sub-menu. This allows you to list and remove publication locations that are linked to your file.</p>
<h1 id="markdown-extensions">Markdown extensions</h1>
<p>StackEdit extends the standard Markdown syntax by adding extra <strong>Markdown extensions</strong>, providing you with some nice features.</p>
<blockquote>
<p><strong>ProTip:</strong> You can disable any <strong>Markdown extension</strong> in the <strong>File properties</strong> dialog.</p>
</blockquote>
<h2 id="smartypants">SmartyPants</h2>
<p>SmartyPants converts ASCII punctuation characters into “smart” typographic punctuation HTML entities. For example:</p>

<table>
<thead>
<tr>
<th></th>
<th>ASCII</th>
<th>HTML</th>
</tr>
</thead>
<tbody>
<tr>
<td>Single backticks</td>
<td><code>'Isn't this fun?'</code></td>
<td>‘Isn’t this fun?’</td>
</tr>
<tr>
<td>Quotes</td>
<td><code>"Isn't this fun?"</code></td>
<td>“Isn’t this fun?”</td>
</tr>
<tr>
<td>Dashes</td>
<td><code>-- is en-dash, --- is em-dash</code></td>
<td>– is en-dash, — is em-dash</td>
</tr>
</tbody>
</table><h2 id="katex">KaTeX</h2>
<p>You can render LaTeX mathematical expressions using <a href="https://khan.github.io/KaTeX/">KaTeX</a>:</p>
<p>The <em>Gamma function</em> satisfying <span class="katex--inline"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Γ</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">!</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mi>n</mi><mo>∈</mo><mi mathvariant="double-struck">N</mi></mrow><annotation encoding="application/x-tex">\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">Γ</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">1</span><span class="mclose">)!</span><span class="mspace" style="margin-right: 1em;"></span><span class="mord">∀</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.68889em; vertical-align: 0em;"></span><span class="mord mathbb">N</span></span></span></span></span> is via the Euler integral</p>
<p><span class="katex--display"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">Γ</mi><mo stretchy="false">(</mo><mi>z</mi><mo stretchy="false">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi mathvariant="normal">∞</mi></msubsup><msup><mi>t</mi><mrow><mi>z</mi><mo>−</mo><mn>1</mn></mrow></msup><msup><mi>e</mi><mrow><mo>−</mo><mi>t</mi></mrow></msup><mi>d</mi><mi>t</mi> <mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">Γ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.04398em;">z</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 2.32624em; vertical-align: -0.91195em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right: 0.44445em; position: relative; top: -0.001125em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.41429em;"><span class="" style="top: -1.78805em; margin-left: -0.44445em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span><span class="" style="top: -3.8129em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">∞</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.91195em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.864108em;"><span class="" style="top: -3.113em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.04398em;">z</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.843556em;"><span class="" style="top: -3.113em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">.</span></span></span></span></span></span></p>
<blockquote>
<p>You can find more information about <strong>LaTeX</strong> mathematical expressions <a href="http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference">here</a>.</p>
</blockquote>
<h2 id="uml-diagrams">UML diagrams</h2>
<p>You can render UML diagrams using <a href="https://mermaidjs.github.io/">Mermaid</a>. For example, this will produce a sequence diagram:</p>
<pre class=" language-mermaid"><svg id="mermaid-svg-yN2fXk63AYVMg3z8" width="100%" xmlns="http://www.w3.org/2000/svg" height="519" style="max-width: 819px;" viewBox="-50 -10 819 519"><style>#mermaid-svg-yN2fXk63AYVMg3z8{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#000000;}#mermaid-svg-yN2fXk63AYVMg3z8 .error-icon{fill:#552222;}#mermaid-svg-yN2fXk63AYVMg3z8 .error-text{fill:#552222;stroke:#552222;}#mermaid-svg-yN2fXk63AYVMg3z8 .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-yN2fXk63AYVMg3z8 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-yN2fXk63AYVMg3z8 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-yN2fXk63AYVMg3z8 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-yN2fXk63AYVMg3z8 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-yN2fXk63AYVMg3z8 .marker{fill:#666;stroke:#666;}#mermaid-svg-yN2fXk63AYVMg3z8 .marker.cross{stroke:#666;}#mermaid-svg-yN2fXk63AYVMg3z8 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-yN2fXk63AYVMg3z8 .actor{stroke:hsl(0,0%,83%);fill:#eee;}#mermaid-svg-yN2fXk63AYVMg3z8 text.actor > tspan{fill:#333;stroke:none;}#mermaid-svg-yN2fXk63AYVMg3z8 .actor-line{stroke:#666;}#mermaid-svg-yN2fXk63AYVMg3z8 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333;}#mermaid-svg-yN2fXk63AYVMg3z8 .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:#333;}#mermaid-svg-yN2fXk63AYVMg3z8 #arrowhead path{fill:#333;stroke:#333;}#mermaid-svg-yN2fXk63AYVMg3z8 .sequenceNumber{fill:white;}#mermaid-svg-yN2fXk63AYVMg3z8 #sequencenumber{fill:#333;}#mermaid-svg-yN2fXk63AYVMg3z8 #crosshead path{fill:#333;stroke:#333;}#mermaid-svg-yN2fXk63AYVMg3z8 .messageText{fill:#333;stroke:#333;}#mermaid-svg-yN2fXk63AYVMg3z8 .labelBox{stroke:hsl(0,0%,83%);fill:#eee;}#mermaid-svg-yN2fXk63AYVMg3z8 .labelText,#mermaid-svg-yN2fXk63AYVMg3z8 .labelText > tspan{fill:#333;stroke:none;}#mermaid-svg-yN2fXk63AYVMg3z8 .loopText,#mermaid-svg-yN2fXk63AYVMg3z8 .loopText > tspan{fill:#333;stroke:none;}#mermaid-svg-yN2fXk63AYVMg3z8 .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:hsl(0,0%,83%);fill:hsl(0,0%,83%);}#mermaid-svg-yN2fXk63AYVMg3z8 .note{stroke:hsl(60,100%,23.3333333333%);fill:#ffa;}#mermaid-svg-yN2fXk63AYVMg3z8 .noteText,#mermaid-svg-yN2fXk63AYVMg3z8 .noteText > tspan{fill:#333;stroke:none;}#mermaid-svg-yN2fXk63AYVMg3z8 .activation0{fill:#f4f4f4;stroke:#666;}#mermaid-svg-yN2fXk63AYVMg3z8 .activation1{fill:#f4f4f4;stroke:#666;}#mermaid-svg-yN2fXk63AYVMg3z8 .activation2{fill:#f4f4f4;stroke:#666;}#mermaid-svg-yN2fXk63AYVMg3z8:root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-svg-yN2fXk63AYVMg3z8 sequence{fill:apa;}</style><g></g><g><line id="actor6" x1="75" y1="5" x2="75" y2="508" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="0" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="75" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, &quot;sans-serif&quot;;"><tspan x="75" dy="0">Alice</tspan></text></g><g><line id="actor7" x1="319" y1="5" x2="319" y2="508" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="244" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="319" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, &quot;sans-serif&quot;;"><tspan x="319" dy="0">Bob</tspan></text></g><g><line id="actor8" x1="544" y1="5" x2="544" y2="508" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="469" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="544" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, &quot;sans-serif&quot;;"><tspan x="544" dy="0">John</tspan></text></g><defs><marker id="arrowhead" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs><defs><marker id="crosshead" markerWidth="15" markerHeight="8" orient="auto" refX="16" refY="4"><path fill="black" stroke="#000000" stroke-width="1px" d="M 9,2 V 6 L16,4 Z" style="stroke-dasharray: 0, 0;"></path><path fill="none" stroke="#000000" stroke-width="1px" d="M 0,1 L 6,7 M 6,1 L 0,7" style="stroke-dasharray: 0, 0;"></path></marker></defs><defs><marker id="filled-head" refX="18" refY="7" markerWidth="20" markerHeight="28" orient="auto"><path d="M 18,7 L9,13 L14,7 L9,1 Z"></path></marker></defs><defs><marker id="sequencenumber" refX="15" refY="15" markerWidth="60" markerHeight="40" orient="auto"><circle cx="15" cy="15" r="6"></circle></marker></defs><text x="197" y="80" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 16px; font-weight: 400;">Hello Bob, how are you?</text><line x1="75" y1="109" x2="319" y2="109" class="messageLine0" stroke-width="2" stroke="none" marker-end="url(#arrowhead)" style="fill: none;"></line><text x="432" y="124" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 16px; font-weight: 400;">How about you John?</text><line x1="319" y1="153" x2="544" y2="153" class="messageLine1" stroke-width="2" stroke="none" marker-end="url(#arrowhead)" style="stroke-dasharray: 3, 3; fill: none;"></line><text x="197" y="168" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 16px; font-weight: 400;">I am good thanks!</text><line x1="319" y1="197" x2="75" y2="197" class="messageLine1" stroke-width="2" stroke="none" marker-end="url(#crosshead)" style="stroke-dasharray: 3, 3; fill: none;"></line><text x="432" y="212" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 16px; font-weight: 400;">I am good thanks!</text><line x1="319" y1="241" x2="544" y2="241" class="messageLine0" stroke-width="2" stroke="none" marker-end="url(#crosshead)" style="fill: none;"></line><g><rect x="569" y="251" fill="#EDF2AE" stroke="#666" width="150" height="84" rx="0" ry="0" class="note"></rect><text x="644" y="256" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="noteText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 14px; font-weight: 400;"><tspan x="644">Bob thinks a long</tspan></text><text x="644" y="272" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="noteText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 14px; font-weight: 400;"><tspan x="644">long time, so long</tspan></text><text x="644" y="288" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="noteText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 14px; font-weight: 400;"><tspan x="644">that the text does</tspan></text><text x="644" y="304" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="noteText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 14px; font-weight: 400;"><tspan x="644">not fit on a row.</tspan></text></g><text x="197" y="350" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 16px; font-weight: 400;">Checking with John...</text><line x1="319" y1="379" x2="75" y2="379" class="messageLine1" stroke-width="2" stroke="none" style="stroke-dasharray: 3, 3; fill: none;"></line><text x="310" y="394" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif; font-size: 16px; font-weight: 400;">Yes... John, how are you?</text><line x1="75" y1="423" x2="544" y2="423" class="messageLine0" stroke-width="2" stroke="none" style="fill: none;"></line><g><rect x="0" y="443" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="75" y="475.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, &quot;sans-serif&quot;;"><tspan x="75" dy="0">Alice</tspan></text></g><g><rect x="244" y="443" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="319" y="475.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, &quot;sans-serif&quot;;"><tspan x="319" dy="0">Bob</tspan></text></g><g><rect x="469" y="443" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="544" y="475.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, &quot;sans-serif&quot;;"><tspan x="544" dy="0">John</tspan></text></g></svg></pre>
<p>And this will produce a flow chart:</p>
<pre class=" language-mermaid"><svg id="mermaid-svg-C9934GyLckszbkmQ" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="173.609375" style="max-width: 510.71405029296875px;" viewBox="0 0 510.71405029296875 173.609375"><style>#mermaid-svg-C9934GyLckszbkmQ{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#000000;}#mermaid-svg-C9934GyLckszbkmQ .error-icon{fill:#552222;}#mermaid-svg-C9934GyLckszbkmQ .error-text{fill:#552222;stroke:#552222;}#mermaid-svg-C9934GyLckszbkmQ .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-C9934GyLckszbkmQ .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-C9934GyLckszbkmQ .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-C9934GyLckszbkmQ .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-C9934GyLckszbkmQ .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-C9934GyLckszbkmQ .marker{fill:#666;stroke:#666;}#mermaid-svg-C9934GyLckszbkmQ .marker.cross{stroke:#666;}#mermaid-svg-C9934GyLckszbkmQ svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-C9934GyLckszbkmQ .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#000000;}#mermaid-svg-C9934GyLckszbkmQ .cluster-label text{fill:#333;}#mermaid-svg-C9934GyLckszbkmQ .cluster-label span{color:#333;}#mermaid-svg-C9934GyLckszbkmQ .label text,#mermaid-svg-C9934GyLckszbkmQ span{fill:#000000;color:#000000;}#mermaid-svg-C9934GyLckszbkmQ .node rect,#mermaid-svg-C9934GyLckszbkmQ .node circle,#mermaid-svg-C9934GyLckszbkmQ .node ellipse,#mermaid-svg-C9934GyLckszbkmQ .node polygon,#mermaid-svg-C9934GyLckszbkmQ .node path{fill:#eee;stroke:#999;stroke-width:1px;}#mermaid-svg-C9934GyLckszbkmQ .node .label{text-align:center;}#mermaid-svg-C9934GyLckszbkmQ .node.clickable{cursor:pointer;}#mermaid-svg-C9934GyLckszbkmQ .arrowheadPath{fill:#333333;}#mermaid-svg-C9934GyLckszbkmQ .edgePath .path{stroke:#666;stroke-width:1.5px;}#mermaid-svg-C9934GyLckszbkmQ .flowchart-link{stroke:#666;fill:none;}#mermaid-svg-C9934GyLckszbkmQ .edgeLabel{background-color:white;text-align:center;}#mermaid-svg-C9934GyLckszbkmQ .edgeLabel rect{opacity:0.5;background-color:white;fill:white;}#mermaid-svg-C9934GyLckszbkmQ .cluster rect{fill:hsl(210,66.6666666667%,95%);stroke:#26a;stroke-width:1px;}#mermaid-svg-C9934GyLckszbkmQ .cluster text{fill:#333;}#mermaid-svg-C9934GyLckszbkmQ .cluster span{color:#333;}#mermaid-svg-C9934GyLckszbkmQ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(-160,0%,93.3333333333%);border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-svg-C9934GyLckszbkmQ:root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-svg-C9934GyLckszbkmQ flowchart{fill:apa;}</style><g><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath LS-A LE-B" style="opacity: 1;" id="L-A-B"><path class="path" d="M111.64527122375253,66.98828125L171.734375,38.4453125L248.3359375,38.4453125" marker-end="url(https://stackedit.io/app#arrowhead9)" style="fill:none"></path><defs><marker id="arrowhead9" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-A LE-C" style="opacity: 1;" id="L-A-C"><path class="path" d="M111.64527122375253,113.70703125L171.734375,142.25L226.53125,142.25" marker-end="url(https://stackedit.io/app#arrowhead10)" style="fill:none"></path><defs><marker id="arrowhead10" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-B LE-D" style="opacity: 1;" id="L-B-D"><path class="path" d="M309.2265625,38.4453125L356.03125,38.4453125L404.45651154292176,67.92239318119938" marker-end="url(https://stackedit.io/app#arrowhead11)" style="fill:none"></path><defs><marker id="arrowhead11" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-C LE-D" style="opacity: 1;" id="L-C-D"><path class="path" d="M331.03125,142.25L356.03125,142.25L404.45651344476613,113.77291816888726" marker-end="url(https://stackedit.io/app#arrowhead12)" style="fill:none"></path><defs><marker id="arrowhead12" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" style="opacity: 1;" transform="translate(171.734375,38.4453125)"><g transform="translate(-29.796875,-13.359375)" class="label"><rect rx="0" ry="0" width="59.59375" height="26.71875"></rect><foreignObject width="59.59375" height="26.71875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span id="L-L-A-B" class="edgeLabel L-LS-A' L-LE-B">Link text</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span id="L-L-A-C" class="edgeLabel L-LS-A' L-LE-C"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span id="L-L-B-D" class="edgeLabel L-LS-B' L-LE-D"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span id="L-L-C-D" class="edgeLabel L-LS-C' L-LE-D"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node default" style="opacity: 1;" id="flowchart-A-40" transform="translate(62.46875,90.34765625)"><rect rx="0" ry="0" x="-54.46875" y="-23.359375" width="108.9375" height="46.71875" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-44.46875,-13.359375)"><foreignObject width="88.9375" height="26.71875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Square Rect</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B-41" transform="translate(278.78125,38.4453125)"><circle x="-30.4453125" y="-23.359375" r="30.4453125" class="label-container"></circle><g class="label" transform="translate(0,0)"><g transform="translate(-20.4453125,-13.359375)"><foreignObject width="40.890625" height="26.71875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Circle</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-C-43" transform="translate(278.78125,142.25)"><rect rx="5" ry="5" x="-52.25" y="-23.359375" width="104.5" height="46.71875" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-42.25,-13.359375)"><foreignObject width="84.5" height="26.71875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Round Rect</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-D-45" transform="translate(441.8726577758789,90.34765625)"><polygon points="60.84140625,0 121.6828125,-60.84140625 60.84140625,-121.6828125 0,-60.84140625" transform="translate(-60.84140625,60.84140625)" class="label-container"></polygon><g class="label" transform="translate(0,0)"><g transform="translate(-34.2421875,-13.359375)"><foreignObject width="68.484375" height="26.71875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Rhombus</div></foreignObject></g></g></g></g></g></g></svg></pre>
</div>
</body>

</html><!DOCTYPE html>

`;

const SingleResourcePage = ({ params }: PageProps) => {
  // Unwrap the params Promise using React.use()
  const resolvedParams = React.use(params);
  const { blogId } = resolvedParams;

  const [currentBlogPost, setCurrentBlogPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/getsingleblogpost", {
          params: { blogId }
        });

        setCurrentBlogPost(response.data as BlogPostType);
      } catch (e) {
        console.log("There was some error", e);
      }
    };

    getData();
  }, [blogId]);

  if (!currentBlogPost) {
    return (
      <div className="w-full flex justify-center min-h-screen">
        <div className="min-h-full mt-10 max-w-[1000px] px-3">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full justify-center min-h-full">
      <div className="bg-blue-50 h-1/2 w-full flex justify-center">
        <div className="container py-12 md:py-20 px-10 max-w-[1440px] flex justify-center">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">1
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{currentBlogPost.title}</h1>
              <p className="text-gray-500">

              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              {/* <Image src={'/resources/chronicles1.jpg'} alt="chronicles" height={1000} width={500} className='h-[400px] w-auto ml-auto' /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="container py-12 md:py-20 px-10 max-w-[1440px] flex justify-center  text-md">
        <div
      className=" prose w-full mr-auto"
      // dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentBlogPost.content) }}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
         />
  
        </div>

      </div>
      <div className="mt-8 px-10 pb-40">
        {currentBlogPost.comments_enabled && currentBlogPost.comments && (
          <CommentsSection postId={Number(blogId)} />
        )}
      </div>

    </div>
  );

};

export default SingleResourcePage;

