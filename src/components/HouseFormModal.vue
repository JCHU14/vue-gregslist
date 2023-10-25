<template>
    <div class="modal fade" id="houseFormModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form @submit.prevent="handleForm()">
                        <div class="mb-3">
                            <label for="year" class="form-label">Year</label>
                            <input v-model="editable.year" type="number" class="form-control" id="year" required
                                maxlength="4">
                        </div>

                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input v-model="editable.price" type="number" class="form-control" id="price" required
                                maxlength="100">
                        </div>

                        <div class="mb-3">
                            <label for="imgUrl" class="form-label">ImgUrl</label>
                            <input v-model="editable.imgUrl" type="url" class="form-control" id="imgUrl" required
                                maxlength="500">
                        </div>

                        <div class="mb-3">
                            <label for="bathrooms" class="form-label">Bathrooms</label>
                            <input v-model="editable.bathrooms" type="number" class="form-control" id="bathrooms" required>
                        </div>

                        <div class="mb-3">
                            <label for="bedrooms" class="form-label">Bedrooms</label>
                            <input v-model="editable.bedrooms" type="number" class="form-control" id="bedrooms" required>
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea v-model="editable.description" maxlength="500" class="form-control" id="description"
                                rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="levels" class="form-label">Levels</label>
                            <input v-model="editable.levels" type="number" class="form-control" id="levels" required>
                        </div>

                        <div class="text-end">
                            <button class="btn btn-success" type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { housesService } from '../services/HousesService';
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop.js';


export default {
    setup() {
        const editable = ref({})

        return {
            editable,
            handleForm() {
                this.createHouse()
            },
            async createHouse() {
                try {
                    const houseData = editable.value
                    await housesService.createHouse(houseData)

                    editable.value = {}

                    Modal.getOrCreateInstance('#houseFormModal').hide()
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>