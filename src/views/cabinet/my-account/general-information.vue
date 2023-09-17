<template>
  <div class="general-information pa-10">
    <AppText size="16" line-height="20" weight="700" class="color-main mb-20">
      Asosiy malumotlar
    </AppText>
    {{ districtsId }}{{ schoolId }}{{ regionId }}
    <div class="cabinet__content">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(updateProfile)">
          <div class="grid-block mb-10">
            <div class="cabinet__content-item">
              <BaseInput
                label="Telefon raqam"
                v-model="user.phone"
                type="text"
                vid="phone"
                rules="required|min:9"
                v-mask="'#########'"
                :prepend="true"
              >
                <template #prepend> +998 </template>
              </BaseInput>
            </div>
            <div class="cabinet__content-item">
              <BaseInput
                label="Ism"
                v-model="user.first_name"
                type="text"
                vid="name"
                rules="required"
              />
            </div>
            <div class="cabinet__content-item">
              <BaseInput
                label="Familiya"
                v-model="user.last_name"
                type="text"
                vid="last_name"
                rules="required"
              />
            </div>
            <div class="cabinet__content-item">
              <BaseInput
                label="Otasining ismi"
                v-model="user.father_name"
                type="text"
                vid="father_name"
                rules="required"
              />
            </div>
            <div class="cabinet__content-item">
              <BaseInput
                label="Email"
                type="text"
                vid="email"
                rules="required|email"
                v-model="user.email"
              />
            </div>
            <!-- <div class="cabinet__content-item">
              <BaseInput
                label="Tug'ilgan kun"
                type="date"
                placeholder="DD-MM-YYYY"
                v-model="user.birth_date"
                @change="formattedDate"
              />
            </div> -->
            <div class="cabinet__content-item">
              <base-select
                label="Viloyat"
                type="text"
                vid="Fakultet"
                placeholder="Viloyatni tanlang"
                :optionsProp="regions"
                v-model="user.region"
                @itemSelected="regionsId"
                :append="true"
              >
                <template #append>
                  <svg
                    class="Dropdown_self__FtxaI"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="height: 1rem; width: 1rem"
                  >
                    <path
                      d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668"
                      stroke="rgb(51, 54, 57)"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </template>
              </base-select>
            </div>
            <div class="cabinet__content-item">
              <base-select
                label="Tuman"
                type="text"
                vid="Fakultet"
                placeholder="Tumanni tanlang"
                v-model="user.district"
                :optionsProp="districts"
                :append="true"
                :disabled="districts_select"
                @itemSelected="filterDistrictId"
              >
                <template #append>
                  <svg
                    class="Dropdown_self__FtxaI"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="height: 1rem; width: 1rem"
                  >
                    <path
                      d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668"
                      stroke="rgb(51, 54, 57)"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </template>
              </base-select>
            </div>
            <div class="cabinet__content-item">
              <base-select
                label="Maktab"
                type="text"
                vid="Fakultet"
                placeholder="Maktabni tanlang"
                :optionsProp="schools"
                v-model="user.school.number"
                :append="true"
                :disabled="school_select"
                @itemSelected="filterSchoolId"
                selectType="school"
              >
                <template #append>
                  <svg
                    class="Dropdown_self__FtxaI"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="height: 1rem; width: 1rem"
                  >
                    <path
                      d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668"
                      stroke="rgb(51, 54, 57)"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </template>
              </base-select>
            </div>
          </div>
          <AppButton
            theme="main"
            radius="10"
            :font-size="16"
            :sides="20"
            :height="45"
            weight="500"
            type="submit"
          >
            O'zgarishlarni saqlash
          </AppButton>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import BaseInput from "../../../components/shared-components/BaseInput";
import AppButton from "../../../components/shared-components/AppButton";
import { mapGetters } from "vuex";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";

export default {
  name: "general-information",
  components: { AppButton, BaseInput, ValidationObserver, BaseSelect },
  data() {
    return {
      login: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      newPassword: "",
      region: "",
      regions: [],
      districts: [],
      schools: [],
      regionId: null,
      districtsId: null,
      schoolId: null,
      districts_select: true,
      school_select: true,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    getRegions() {
      this.$http.get("common/regions").then((response) => {
        if (response) {
          this.regions = response;
        } else {
          console.error("Xatolik: Serverdan ma'lumotlar topilmadi");
        }
      });
    },
    getDistricts(region_id) {
      this.$http
        .get(`common/districts/?region_id=${region_id}`)
        .then((response) => {
          if (response) {
            this.districts = response;
          } else {
            console.error("Xatolik: Serverdan ma'lumotlar topilmadi");
          }
        });
    },
    getSchools(district_id) {
      this.$http
        .get(`common/schools/?district_id=${district_id}`)
        .then((response) => {
          if (response) {
            this.schools = response;
          } else {
            console.error("Xatolik: Serverdan ma'lumotlar topilmadi");
          }
        });
    },
    async regionsId(region_item) {
      this.regionId = region_item.id;
      await this.getDistricts(region_item.id);
      this.districts_select = false;
    },
    async filterDistrictId(districtsId) {
      this.districtsId = districtsId.id;
      await this.getSchools(districtsId.id);
      this.school_select = false;
    },
    filterSchoolId(item) {
      this.schoolId = item.id;
    },
    formattedDate() {
      this.user.birth_date = this.$moment(this.user.birth_date).format(
        "DD-MM-YYYY"
      );
      console.log("asas");
    },
    updateProfile() {
      this.$http
        .patch("users/profile/", {
          phone: this.user.phone,
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          father_name: this.user.father_name,
          email: this.user.email,
          district: this.districtsId,
          school: this.schoolId,
        })
        .then((res) => {
          if (!res.error) {
            this.successNotification("Saqlandi");
          } else {
            this.errorNotification("Ma'lumotlar yangilashda xatolik yuz berdi");
          }
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            this.errorNotification(error.response.data.message);
          } else {
            this.errorNotification("Xatolik yuz berdi");
          }
        });
    },
  },
  mounted() {
    this.getRegions();
  },
  watch: {
    user() {},
  },
};
</script>

<style lang="scss" scoped></style>
