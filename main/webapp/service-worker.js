if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"d7d61edbd5b77fffb1f3157c35b46524"},{url:"js/extensions.min.js",revision:"d4461c9165f71fb0ca97761b7791f8b0"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"0b9c52d405743d3a633e15346ccb5ca7"},{url:"js/shapes-14-6-5.min.js",revision:"95f54e7999c9fba2a1d65b4fe4f634f3"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"3c7cce1e3f501d95fbcda58d570b8144"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"c80c6d3bdaa85e0fbc9d9b174ef763f4"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"c27806c16512b7dd20ee329e5d12c58a"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"958e141b0c7d9bccf663edb6054b9255"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"53e59b93d7e3dd107e2410aa1db57e5f"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"f52c89f8606ea566fa33599cb2d1f182"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"315dd64c85e841fd8c42b012edec43bb"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"91c04e236ba9dbdb26d8565b3354e00a"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"78100a4afaf9c1bab8fcf0e5d5ec848a"},{url:"connect/new_common/cac.js",revision:"6d666b6789b51dabc5a1af53a9db5d3d"},{url:"connect/gdrive_common/gac.js",revision:"f492afcba45c5b665b2902ad12d7cd44"},{url:"connect/onedrive_common/ac.js",revision:"92253afeb110d233eefa8d5d6072fa59"},{url:"connect/confluence/viewer-init.js",revision:"8aa8d02147def4535563bc65632a3e6d"},{url:"connect/confluence/viewer.js",revision:"cdf3ecca10c4f9034845ea5efbe8c9ba"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c14807286438f2236b44c9fb78eb4bb3"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"daa2dad307b432bd9b3e48fa99898d9e"},{url:"connect/confluence/includeDiagram.html",revision:"1f2e4d088a8a1525ba047239643f3f4f"},{url:"connect/confluence/macro-editor.js",revision:"792d44b551d4a77a581388280dc3f1b1"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"71563d7c66db16183265f8abe72319b6"},{url:"resources/dia_am.txt",revision:"7b1bb41b86b41713e1f2f40d42fda4f6"},{url:"resources/dia_ar.txt",revision:"70d01d05ae748b0fd7f36da493d42db6"},{url:"resources/dia_bg.txt",revision:"e19725237958947e7a2d0c5b1de9c27f"},{url:"resources/dia_bn.txt",revision:"5a9a25f6765e81a7e21b037da7e9dd03"},{url:"resources/dia_bs.txt",revision:"df9d71c4e48f76858dfe55865171ecde"},{url:"resources/dia_ca.txt",revision:"8d94576a0ebdbeb2028500e5e2e591a6"},{url:"resources/dia_cs.txt",revision:"17af0dd474a79c343d9647eefa43fce8"},{url:"resources/dia_da.txt",revision:"eb051045d91732dcbdf472cbc2fe20df"},{url:"resources/dia_de.txt",revision:"93f8b9e816cc9a26fcb033a9f5bb9f79"},{url:"resources/dia_el.txt",revision:"98dc2a154e554abc6e45ff2c66ec335a"},{url:"resources/dia_eo.txt",revision:"694b9d3074512aba604c598a22ea5d0b"},{url:"resources/dia_es.txt",revision:"8ef2cad242060848d30990f021f38567"},{url:"resources/dia_et.txt",revision:"66de9f5076099c58bbfc04aa4af3fddd"},{url:"resources/dia_eu.txt",revision:"ba6e241165ea2f5cf72350fe7e27b204"},{url:"resources/dia_fa.txt",revision:"dfcc960fd64e43958ed5055a820234ef"},{url:"resources/dia_fi.txt",revision:"0a4c28a1e23b087214abfc8bcc41a8b1"},{url:"resources/dia_fil.txt",revision:"b5a08017a7a582c2dbdd6a18611625f0"},{url:"resources/dia_fr.txt",revision:"a3e1c2d228f25d6662a38b64f8e522eb"},{url:"resources/dia_gl.txt",revision:"fa0b442be53045e7476723c205c6ff37"},{url:"resources/dia_gu.txt",revision:"cb34de04c5af95a2f4ff1d71164ff78b"},{url:"resources/dia_he.txt",revision:"228bd71d9b5e86188780385b4ff86355"},{url:"resources/dia_hi.txt",revision:"8b8b9cef127fbd71710f1caec782bcb3"},{url:"resources/dia_hr.txt",revision:"9ecd541b1f9cb8dc65099be2c32dbbf6"},{url:"resources/dia_hu.txt",revision:"69ce5e8147b3dcede94161d6494a8da8"},{url:"resources/dia_id.txt",revision:"7d573c0fa64898b51c7d92b4aabfbfcd"},{url:"resources/dia_it.txt",revision:"0316d45f39e9a8e0213713117962b0ba"},{url:"resources/dia_ja.txt",revision:"b5cdc990f107f905eb295bf6feab9a48"},{url:"resources/dia_kn.txt",revision:"7cdc93c19e319f989da252453ad86104"},{url:"resources/dia_ko.txt",revision:"23bdd7c4f0b07574072ae484c4763867"},{url:"resources/dia_lt.txt",revision:"9f731bf0669c958c005d173a0b0c9fab"},{url:"resources/dia_lv.txt",revision:"fac8a5152ccae9658a11c183a1d6e994"},{url:"resources/dia_ml.txt",revision:"37e223f2e241648c3ca0d875999f581d"},{url:"resources/dia_mr.txt",revision:"dfc63d292e889d853687e7bf61ba880a"},{url:"resources/dia_ms.txt",revision:"7629781b9bcf0db5bbec977e4f485232"},{url:"resources/dia_my.txt",revision:"71563d7c66db16183265f8abe72319b6"},{url:"resources/dia_nl.txt",revision:"f9c9d9bc65c8190b4e2adf7fc33ef5cb"},{url:"resources/dia_no.txt",revision:"29c81446057ffedc29977eae505738df"},{url:"resources/dia_pl.txt",revision:"0b72640b152d5924020ec18f323b2d22"},{url:"resources/dia_pt-br.txt",revision:"9b7032e5f3e1554d951bacf7b923dae5"},{url:"resources/dia_pt.txt",revision:"0bfde94b3056c6d916acc7bbf06ec87c"},{url:"resources/dia_ro.txt",revision:"665d873238432ca75506e7178aed8084"},{url:"resources/dia_ru.txt",revision:"37f9ca379419e7ce3e1e597d2e697913"},{url:"resources/dia_si.txt",revision:"71563d7c66db16183265f8abe72319b6"},{url:"resources/dia_sk.txt",revision:"c81e53b51defecd20d83abe0db5489ab"},{url:"resources/dia_sl.txt",revision:"73cd1db29a0ae129d6f3f8fdb82f63f5"},{url:"resources/dia_sr.txt",revision:"0bf60c60653fee93c15068ce2baa46e7"},{url:"resources/dia_sv.txt",revision:"4519bd37691e8838223372cf8901047d"},{url:"resources/dia_sw.txt",revision:"fadb317257b02a3a792de4d7df41d1d4"},{url:"resources/dia_ta.txt",revision:"b2b84973593803e74bc2a7f693f4d27f"},{url:"resources/dia_te.txt",revision:"2925f4be62d157f25edd07ae60d61c32"},{url:"resources/dia_th.txt",revision:"da1cb0c43398490619de02746aef0302"},{url:"resources/dia_tr.txt",revision:"934d38e3968944ad8f4879463819148b"},{url:"resources/dia_uk.txt",revision:"6c26c0170f30e1f37d55ec6653e336ce"},{url:"resources/dia_vi.txt",revision:"9f36f6e83935555a10de87b957d71363"},{url:"resources/dia_zh-tw.txt",revision:"448fe0d9567326d735edf8efc6523ec6"},{url:"resources/dia_zh.txt",revision:"2944b723428d34c121fc4a568db2ed0a"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"618b42f0bde0c7685e04811c25dc2b3e"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
