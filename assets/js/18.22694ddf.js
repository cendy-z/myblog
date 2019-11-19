(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{298:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"生成ssh公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh公钥"}},[s._v("#")]),s._v(" 生成SSH公钥")]),s._v(" "),a("p",[s._v("首先，你需要确认自己是否已经拥有密钥。 默认情况下，用户的 SSH 密钥存储在其 ~/.ssh 目录下。 进入该目录并列出其中内容，你便可以快速确认自己是否已拥有密钥：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh\n$ ls\nauthorized_keys2  id_dsa       known_hosts\nconfig            id_dsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pub\n")])])]),a("p",[s._v("我们需要寻找一对以 id_dsa 或 id_rsa 命名的文件，其中一个带有 .pub 扩展名。 .pub 文件是你的公钥，另一个则是私钥。 如果找不到这样的文件（或者根本没有 .ssh 目录），你可以通过运行 ssh-keygen 程序来创建它们。在 Linux/Mac 系统中，ssh-keygen 随 SSH 软件包提供；在 Windows 上，该程序包含于 MSysGit 软件包中。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keygen\nGenerating "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" rsa key pair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nEnter file "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" which to save the "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schacon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\nCreated directory "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/schacon/.ssh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passphrase")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\nEnter same passphrase again"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schacon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nYour "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schacon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nThe key fingerprint is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\nd0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("82")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("d7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("bb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("da"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("e3 schacon@mylaptop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("local\n")])])]),a("p",[s._v("首先 ssh-keygen 会确认密钥的存储位置（默认是 .ssh/id_rsa），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空即可。\n公钥看起来是这样的：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pub\nssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BWDSU")]),s._v("\nGPl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3\nPbv7kOdJ"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("MTyBlWXFCR"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("XA\nt3FaoJoAsncM1Q9x5"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("V0Ww68"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Pb0rwert"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("En\nmZ"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("AW4OZPnTPI89ZPmVMLuayrD2cE86Z"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("il8b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("gw3r3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("nKatmIkjn2so1d01QraTlMqVSsbx\nNrRFi9wrf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("M7Q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" schacon@mylaptop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("local\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);