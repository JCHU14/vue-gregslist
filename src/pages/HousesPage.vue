<template>
    <div class="container-fluid background text-center">
        <div class="text-center fs-1 underline ">🏠Welcome to the Houses Page!🏠</div>

        <h1>
            <button class="btn shadow box m-5 fs-3" v-if="account.id" type="button" title="Open House Form"
                data-bs-toggle="modal" data-bs-target="#houseFormModal">Post House</button>
        </h1>


        <div class="row justify-content-center">
            <div v-for="house in houses" :key="house.id" class="col-5 text-center box m-5">
                <img class="m-5" :src="house.imgUrl" alt="">
                <div>
                    <p class="fs-3 outline"> Year: {{ house.year }}</p>
                    <p class="fs-3">${{ house.price }}</p>
                    <p class="fs-3">Stories: {{ house.levels }}</p>
                    <p class="fs-3">Bedrooms: {{ house.bedrooms }}</p>
                    <p class="fs-3">Bathrooms: {{ house.bathrooms }}</p>
                    <p class="fs-3">Description: {{ house.description }}</p>
                    <p class="fs-3">Created Date: {{ house.createdAt }}</p>
                </div>
            </div>

        </div>

    </div>

    <HouseFormModal />
</template>


<script>
import { AppState } from '../AppState.js';
import HouseFormModal from '../components/HouseFormModal.vue';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';
import { computed, onMounted } from 'vue';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses),
            account: computed(() => AppState.account)
        };
    },
    components: { HouseFormModal }
}
</script>


<style lang="scss" scoped>
img {
    height: 60vh;
    width: 60vh;
    object-fit: cover;
}

.box {
    border: 10px solid brown;
    background-color: chocolate;
}

.background {
    background-color: tan;
}

.underline {
    text-decoration: underline 5px black;
}
</style>