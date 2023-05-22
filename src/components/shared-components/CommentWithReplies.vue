<template>
  <div>
    <div class="comments__item-replies" v-for="(item, key) in childList" :key="key">
      <BlockWrap
        width-auto=""
        offset-x="10"
        offset-y="10"
        class="align-center mb-10"
      >

        <div class="author__photo xs">
          <img :src="item.userPhoto ? baseURL + '' + item.userPhoto : '/images/author.jpg'" alt="">
        </div>

        <div class="author__content">
          <AppText
            size="14"
            line-height="16"
          >
            {{ item.userName }}
          </AppText>
        </div>
        <div class="d-flex align-center"
        >
          <img src="/icons/answered.svg"
               class="mr-5"
               alt="">
          <AppText
            size="12"
            line-height="16"
            weight="500"
            class="color-text"
          >
            {{ parentComment.userName }}
          </AppText>


        </div>
        <AppText
          size="12"
          line-height="16"
          class="color-text"
        >
          {{ $moment(item.commentDate).format('YYYY-MM-DD HH:ss') }}
        </AppText>

      </BlockWrap>
      <AppText size="14" line-height="24" class="mb-10">
        {{ item.comment }}
      </AppText>
      <button class="d-flex align-center mb-20" @click="reply(item.id)">
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
      <comment-with-replies :comment-child-prop="item.commentChilds" v-if="item.commentChilds" :parent-comment-prop="item"></comment-with-replies>
    </div>
  </div>
</template>

<script>
import BlockWrap from "./BlockWrap";
import AppButton from "../shared-components/AppButton";
import AppText from "./AppText";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CommentWithReplies",
  components: {BlockWrap, AppButton, AppText},
  props: {
    commentChildProp: Array,
    parentCommentProp: Object
  },
  data() {
    return {
      childList: [],
      parentComment: {},
      parentCommentId: null,
      comment: {
        id: 0,
        contentId: this.contentId,
        comment: "",
        parentId: null,
      },
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
    this.childList = this.commentChildProp;
    this.parentComment = this.parentCommentProp;
  },
  watch: {
    commentChildProp() {
      this.childList = this.commentChildProp;
      this.parentComment = this.parentCommentProp;
    }
  }
}
</script>

<style scoped>

</style>
