<template>
  <div class="goodsTypeCard" @click="goList()">
    <div class="goods-img-part">
      <img v-lazy="card.img" alt="image">
    </div>
    <div class="goods-info">
      <div class="text">
        <h3 class="goods-text-title">{{card.title}}</h3>
        <span class="goods-text-info">{{card.des}}</span>
      </div>
      <div class="icon">
        <span class="icon-text text1">{{goodsCount}}种</span>
        <span class="text2">方案</span>
      </div>
    </div>
  </div>
</template>
<script>
import { goods } from '../../model/localData'
export default {
  data () {
    return {
      goods: goods,
      goodsCount: 0
    }
  },
  props: {
    card: {
      type: Object,
      default: {}
    },
    cardIndex: Number
  },
  methods: {
    goList () {
      this.$emit('goList')
    },
    getGoodsCount () {
      let list = this.goods[this.cardIndex].list
      let count = 0
      list.map(item => {
        if (item.type === 'food') {
          count += item.goods.length
        }
      })
      this.goodsCount = count
    }
  },
  created () {
    this.getGoodsCount()
  },
  mounted () {}
}
</script>
