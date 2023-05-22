<template>
  <div class="comments" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
    <AppText
      size="18"
      line-height="21"
      weight="700"
      class="mb-20"
    >
      {{ commentsList && commentsList.length > 0 ? commentsList.length + ' izohlar' : 'Hozircha izohlar qoldirilmadi' }}
    </AppText>
    <div class="bordered radius pa-20 mb-30">
                <textarea name="comment"
                          class="mb-10 comments__textarea"
                          placeholder="Izoh qoldiring..."
                          cols="10"
                          rows="4"
                          v-model="comment.comment"
                ></textarea>
      <div class="d-flex justify-space-between align-center">
        <button class="upload__img mr-30" style="visibility: hidden">
          <img src="/icons/img-upload.svg" alt="">
        </button>
        <AppButton @click="storeComment"
                   theme="main"
                   sides="50">
          Yuborish
        </AppButton>
      </div>
    </div>
    <div class="comments__wrap" v-if="commentsList && commentsList.length > 0">
      <div class="comments__item" v-for="(item, key) in commentsList" :key="key">
        <div class="comments__item-main mb-20">
          <BlockWrap
            width-auto=""
            count="2"
            class="mb-10"
          >
            <div class="author__photo sm">
              <img :src="item.userPhoto ? baseURL + '' + item.userPhoto : '/images/author.jpg'" alt="">
            </div>

            <div class="author__content">
              <AppText
                weight="700"
                size="14"
                line-height="20"
              >
                {{ item.userName }}
              </AppText>

              <AppText
                weight="400"
                size="12"
                class="color-text"
                line-height="16"
              >
                {{ $moment(item.commentDate).format('YYYY-MM-DD HH:ss') }}
              </AppText>

            </div>

          </BlockWrap>
          <AppText
            size="14"
            line-height="24"
            class="mb-10"
          >
            {{ item.comment }}
          </AppText>
          <button class="d-flex align-center" @click="reply(item.id)">
            <img src="/icons/reply.svg" style="margin-right: 5px;" alt="">
            <AppText size="12" line-height="14" class="color-text reply_comment_button">
              Javob yozish
            </AppText>
          </button>
          <div class="bordered radius pa-20 mb-30" style="margin-top: 20px" v-if="parentCommentId === item.id">
                <textarea name="comment"
                          class="mb-10 comments__textarea"
                          placeholder="Izoh qoldiring..."
                          cols="10"
                          rows="4"
                          v-model="comment.comment"
                ></textarea>
            <div class="d-flex justify-space-between align-center">
              <button class="upload__img mr-30" style="visibility: hidden">
                <img src="/icons/img-upload.svg" alt="">
              </button>
              <AppButton @click="storeComment" theme="main" sides="50">
                Yuborish
              </AppButton>
            </div>
          </div>
        </div>
        <comment-with-replies :comment-child-prop="item.commentChilds" v-if="item.commentChilds" :parent-comment-prop="item"></comment-with-replies>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../shared-components/AppButton";
import AppText from "./AppText"
import {mapActions, mapGetters} from "vuex";
import CommentWithReplies from "./CommentWithReplies";
import BlockWrap from "./BlockWrap";

export default {
  name: "Comments",
  components: {
    CommentWithReplies,
    AppButton,
    BlockWrap,
    AppText
  },
  props: {
    commentsProp: Array,
  },
  data() {
    return {
      commentsList: [],
      comment: {
        id: 0,
        contentId: this.courseContentId,
        comment: "",
        parentId: null,
      },
      parentCommentId: null,
    }
  },
  computed: {
    ...mapGetters(['courseContentId']),
  },
  methods: {
    ...mapActions(['getContentComments']),
    reply(commentId) {
      if (this.parentCommentId === commentId) {
        this.parentCommentId = null;
        return false;
      }
      this.parentCommentId = commentId;
      this.comment.parentId = commentId;
    },
    storeComment() {
      this.comment.contentId = this.courseContentId;
      try {
        this.$api.post('Main/ContentComment/insert', this.comment).then(res => {
          if (!res.error) {
            this.resetModel();
            this.getContentComments(this.courseContentId);
          }
        });
      } catch (e) {
        //
      }
    },
    resetModel() {
      this.comment.id = null;
      this.comment.contentId = this.courseContentId;
      this.comment.comment = null;
      this.comment.parentId = null;
      this.parentCommentId = null;
    }
  },
  created() {
    this.commentsList = this.commentsProp;
  },
  watch: {
    commentsProp() {
      this.commentsList = this.commentsProp;
    },
  }
}
</script>

<style scoped>

</style>
<style>
.reply_comment_button:hover {
  color: #0099fe;
}
</style>
