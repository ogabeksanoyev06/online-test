<template>
    <div class="search__container">
    
        <form method="get" action="/search">
            <input type="search" :style="inputStyle" 
                :placeholder="placeholder" name="value" class="search inline" v-model="URLvalue" />
            <button class="inline search__button" type="submit" :style="buttonStyle">
                <img class="search__button-image" src="/icons/search.svg" :style="imageStyle"/>
            </button>
        </form>
        <div class="input__block-append">
            <slot name="append"></slot>
        </div>
    </div>
</template>

<script>
import "../../assets/styles/components/base-search.scss";

export default {
    name: "BaseSearch",
    components: {},
    data() {
        return {
            URLvalue: null,
        }
    },
    props: {
        searchData: String,
        placeholder: String,
        navBar: Boolean,
        navbarType: String,
        inputStyle: String,
        buttonStyle: String,
        imageStyle: String,
    },
}
</script>

<style>

</style>