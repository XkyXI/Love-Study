(function () {
  require.config({
    baseUrl: './js/',
    paths: {
      'typing': 'typing'
    }
  })

  require(['typing'], function (typing) {
    var banners = [
      {
        pinyin: 'wo ai xuexi ， xuexi shi wo kuaile',
        value: '我 爱 学习 ， 学习 使 我 快乐',
        delete: {}
      },
      {
        pinyin: 'youxiu shi yizhong xiguan',
        value: '优秀 是 一种 习惯',
        delete: {}
      },
      {
        pinyin: 'wo changyang zai zhishi de haiyang li',
        value: '我 徜徉 在 知识 的 海洋 里',
        delete: {}
      },
      {
        pinyin: 'shunxi zhe zhishi de yulu',
        value: '吮吸 着 知识 的 雨露',
        delete: {}
      },
      {
        pinyin: 'mama jiaowo chifan ， wo chongerbuwen',
        value: '妈妈 叫我 吃饭 ， 我 充耳不闻',
        delete: {}
      },
      {
        pinyin: 'baba hanwo heshui ， wo wudongyuzhong',
        value: '爸爸 喊我 喝水 ， 我 无动于衷',
        delete: {}
      },
      {
        pinyin: 'nainai hanwo shuijiao ， wo baibantuici',
        value: '奶奶 喊我 睡觉 ， 我 百般推辞',
        delete: {}
      },
      {
        pinyin: 'shijieshang zhiyou yizhong wenzhuan bupei de touzi ，\n na jiushi xuexi',
        value: '世界上 只有 一种 稳赚 不赔 的 投资 ，\n 那 就是 学习',
        delete: {}
      },
      {
        pinyin: 'wo zhixiang gaosu nimen',
        value: '我 只想 告诉 你们',
        delete: {}
      },
      {
        pinyin: 'yan keyi chou ， jiu keyi he' + 
                '\n rong keyi zheng ， jia keyi da' + 
                '\n pao keyi yue ， bi keyi zhuang',
        value: '烟 可以 抽 ， 酒 可以 喝' + 
               '\n 容 可以 整 ， 架 可以 打' + 
               '\n 炮 可以 约 ， 逼 可以 装',
        delete: {}
      },
      {
        pinyin: 'dan ni yaoshi buai xuexi',
        value: '但 你 要是 不爱 学习',
        delete: {}
      },
      {
        pinyin: 'duibuqi',
        value: '对不起',
        delete: {}
      },
      {
        pinyin: 'women zuobuliao pengyou ！',
        value: '我们 做不了 朋友 ！',
        delete: {}
      },
      {
        pinyin: 'wo ai xuexi ， xuexi shi wo kuaile',
        value: '我 爱 学习 ， 学习 使 我 快乐',
        delete: {}
      },
      {
        pinyin: 'xu ! ni chaodaowo xuexi le',
        value: '嘘 ！ 你 吵到我 学习 了',
        delete: {}
      }
    ]

    function copy(arr) {
      arr = arr ? arr : []
      var rst = []
      for (var i = 0; i < arr.length; i++) {
        rst.push(arr[i])
      }
      return rst
    }

    function print (index) {
      document.getElementById('context').innerText = ''
      var text = document.getElementById('container').innerText.split('') || []
      var interval = setInterval(function () {
        document.querySelector('.cursor').classList.remove('blink')
        text.pop()
        var tempArr = copy(text)
        document.getElementById('container').innerText = tempArr.join('')
        if (document.getElementById('container').innerText.trim() == '') {
          clearInterval(interval)
          document.querySelector('.cursor').classList.add('blink')
          setTimeout(_print, 1000, index);
        }
      }, 100)
    }

    function _print (index) {
      // randomly select a banner from the list
      // var index = Math.floor((Math.random() * banners.length))

      typing.init({
        target: '#container',
        output: '#context',
        context: banners[index]
      })
      console.log(banners[index].value.replace(/ /g, ''))
      document.querySelector('.cursor').classList.remove('blink')
      typing.start(function () {
        document.querySelector('.cursor').classList.add('blink')
        setTimeout(print, 2000, (index + 1) % banners.length) // increment and reset
        // setTimeout(print, 4000)
      })
    }
    // always start from the first banner
    print(0)
    
  })
})()
