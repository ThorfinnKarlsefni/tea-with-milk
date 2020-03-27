<template>
  <div class="home">
    <div class="home-title" style="justify-content: center;">
      <!-- <img src="data:image/png;base64,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" alt @click="goBack()" /> -->
      <span>菜鸟开店｜品牌菜单</span>
      <img class="hide" src alt />
    </div>
    <div class="goods-list">
      <goods-type-card
        :card="card"
        :cardIndex="index"
        v-for="(card , index) in cards"
        :key="index"
        @goList="chooseTypeCard(index)"
      ></goods-type-card>
    </div>
  </div>
</template>

<script>
import goodsTypeCard from '../../components/goodsTypeCard/goodsTypeCard'
import { cards } from '../../model/localData'
import { getTicket } from '../../model/getTicket'
export default {
  name: 'home',
  data () {
    return {
      cards: cards,
      getTicket: getTicket
    }
  },
  components: {
    goodsTypeCard: goodsTypeCard
  },
  methods: {
    chooseTypeCard (index) {
      this.$router.push({
        path: 'goods',
        query: {
          index: index
        }
      })
    },
    // goBack () {
    //   // window.history.back();
    //   // window.location.href = 'https://es.eyoule.com'
    // },
    wx () {
      let url = encodeURIComponent(location.href.split('#')[0])

      this.getTicket(url).then(res => {
        let data = res.data.msg
        this.$wxShare(data, {
          title: '又乐商城',
          content: '开店必备细分菜单解决方案',
          img: require('../../assets/img/icon/eyoule.png')
        })
      })
    }
  },
  created () {},
  mounted () {
    this.wx()
    console.log(process.env.VUE_APP_URL)
  }
}
</script>
