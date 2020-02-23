<template>
  <div id="uploaddialogue">
    <b-modal
      v-model="modal"
      title="Add Stock"
      content-class="shadow"
      id="my-modal"
      hide-backdrop
    >
      <template v-slot:default>
        <form
          ref="form"
          class="needs-validation"
          method="post"
          enctype="multipart/form-data"
        >
          <div class="form-group has-feedback">
            <input
              type="text"
              ref="nameInput"
              class="form-control"
              placeholder="Name of Stock..."
              v-model="newStock.Name"
              required
            />
            <span
              v-if="
                newStock.Name &&
                  !/^[A-Za-z0-9]+([\w -]*[a-zA-Z0-9])?$/.test(newStock.Name)
              "
              class="error"
              >name must be alphanumeric, no special characters except "-" and
              "_"</span
            >
          </div>
          <div class="form-group">
            <input
              type="text"
              ref="priceInput"
              class="form-control"
              placeholder="Price..."
              v-model="newStock.Price"
              required
            />
            <span
              v-if="
                newStock.Price &&
                  !/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(newStock.Price)
              "
              class="error"
              >Please enter a valid data!</span
            >
          </div>
          <div class="form-group">
            <input
              ref="qntyInput"
              class="form-control"
              placeholder="Quantity..."
              v-model="newStock.Quantity"
              required
            />
            <span
              v-if="newStock.Quantity && !/^[0-9]+$/.test(newStock.Quantity)"
              class="error"
              >Please enter a valid data!</span
            >
          </div>
          <div class="form-group">
            <select
              ref="catIdInput"
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              v-model="newStock.CategoryId"
              required
              @change="showCatError = false"
            >
              <option disabled selected>Choose a category...</option>
              <option
                v-bind:key="cat.id"
                v-for="cat in categories"
                :value="cat.id"
                >{{ cat.name }}</option
              >
            </select>
            <span v-if="showCatError" class="error"
              >You must select a category!</span
            >
          </div>

          <div class="form-group">
            <textarea
              v-model="newStock.Description"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Describe the product..."
            ></textarea>
          </div>

          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="customFile"
              accept="image/*"
              multiple
              @change="addPictures($event)"
              required
            />
            <label ref="fileInput" class="custom-file-label" for="customFile"
              ><span v-if="pictures">{{ pictures.name }} </span>
              <span v-else>Add picture... </span>
            </label>
          </div>
        </form>
      </template>

      <template v-slot:modal-footer>
        <button
          class="btn btn-secondary"
          data-dismiss="modal"
          @click="resetForm"
        >
          Close
        </button>
        <button
          :class="{ disabled: uploading }"
          class="btn btn-primary"
          @click="submitForm"
        >
          <span v-if="uploading">
            <span
              :class="{
                'spinner-border spinner-border-sm disabled': uploading,
              }"
            >
            </span>
            Submitting...
          </span>
          <span v-if="!uploading">Submit</span>
        </button>
      </template>
    </b-modal>
  </div>
  <!-- </div> -->
</template>

<script>
import Catalogue from '@/components/Catalogue';
import bus from '@/components/bus';
import axios from 'axios';
import { BModal } from 'bootstrap-vue';
import { BButton } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);

export default {
  name: 'UploadDialogue',
  data() {
    return {
      newStock: {
        Name: '',
        PictureUrl: '',
        Quantity: '',
        Price: '',
        CategoryId: 'Choose a category...',
        Category: null,
        Description: '',
        EntityState: 0,
      },
      uploading: false,
      pictures: undefined,
      formData: undefined,
      fileContents: undefined,
      preset: 'unsigned_uploads',
      results: undefined,
      errors: [],
      abbatechUrl: 'https://localhost:5001/availablestocks',
      modal: false,
      showCatError: false,
    };
  },
  components: {
    Catalogue,
    BModal,
    BButton,
    FontAwesomeIcon,
  },
  computed: {
    categories: function() {
      return this.$store.getters.getCategories.filter(cat => cat.id !== 0);
    },
  },
  methods: {
    addPictures(event) {
      this.pictures = event.target.files[0];
    },
    resetForm() {
      this.pictures = undefined;
      this.modal = !this.modal;
      this.newStock.Name = '';
      this.newStock.Quantity = '';
      this.newStock.Price = '';
      this.newStock.CategoryId = 'Choose a category...';
      this.newStock.Description = '';
      this.showCatError = false;
      this.$refs.form.reset();
    },
    prepareFormData() {
      this.formData = new FormData();
      this.formData.append('upload_preset', this.preset);
      this.formData.append('file', this.fileContents);
    },
    validateInputs() {
      console.log(
        !/^[A-Za-z0-9]+([\w -]*[a-zA-Z0-9])?$/.test(this.newStock.Name),
      );
      if (!/^[A-Za-z0-9]+([\w -]*[a-zA-Z0-9])?$/.test(this.newStock.Name))
        return this.$refs.nameInput.focus();
      else if (!/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(this.newStock.Price))
        return this.$refs.priceInput.focus();
      else if (!/^[0-9]+$/.test(this.newStock.Quantity))
        return this.$refs.qntyInput.focus();
      else if (!/^[0-9]$/.test(this.newStock.CategoryId)) {
        this.showCatError = true;
        return this.$refs.catIdInput.focus();
      } else if (!this.pictures) return this.$refs.fileInput.focus();
      else return true;
    },
    submitForm() {
      if (this.validateInputs() !== true) return 0;
      // take no action if user doesn't select a picture to upload
      this.uploading = !this.uploading; // indicate that the data is uploading
      let reader = new FileReader();
      reader.addEventListener(
        'load',
        function() {
          this.fileContents = reader.result;
          this.prepareFormData();
          let cloudinaryUploadUrl =
            'https://api.cloudinary.com/v1_1/kent2cky/upload';
          let requestObj = {
            url: cloudinaryUploadUrl,
            method: 'POST',
            data: this.formData,
          };
          axios(requestObj)
            .then(res => {
              this.results = res.data;
              this.newStock.PictureUrl = this.results.public_id;
              this.newStock.Quantity = parseInt(this.newStock.Quantity); // convert to integer
              this.newStock.Price = parseFloat(this.newStock.Price); // convert to float
              let stockArr = [this.newStock]; // endpoint accepts only an array of stocks
              stockArr = JSON.stringify(stockArr);

              let requestObj = {
                url: this.abbatechUrl,
                method: 'POST',
                data: stockArr,
                headers: {
                  'Content-Type': 'application/json',
                },
              };
              axios(requestObj)
                .then(res => {
                  console.log('success');
                  console.log('this is res', res);
                  bus.$emit('showMsgBox', { msg: 'Data stored successfully!' });
                })
                .catch(err => {
                  // console.log('error');
                  // console.log('this is res', err);
                  // bus.$emit('showMsgBox', { msg: 'Error storing data!' });

                  bus.$emit('showMsgBox', {
                    msg: `
              Something went wrong 
              while trying to add stock.              
              `,
                    title: 'Error!',
                  });
                });
            })
            .catch(err => {
              this.errors.push(err);
              bus.$emit('showMsgBox', {
                msg: `
              Something went wrong 
              while trying to add stock. 
              Please check your network 
              and try again.
              `,
                title: 'Error!',
              });
            })
            .finally(() => {
              setTimeout(
                function() {
                  console.log('timeout ran out');
                  this.uploading = !this.uploading;
                  this.resetForm();
                }.bind(this),
                1000,
              );
            });
        }.bind(this),
        false,
      );
      if (this.pictures && this.pictures.name) {
        reader.readAsDataURL(this.pictures);
      }
    },
  },
  mounted() {
    bus.$on('showModal', () => {
      this.modal = !this.modal;
    });
  },
  beforeDestroy() {
    bus.$off('showModal');
  },
};
</script>

<style scoped>
/* .card{
    display: flex;

} */

.btn-primary {
  transition: all 0.9s;
}
.error {
  color: #e01f1f;
}
/* input {
  border-color: #e01f1f;
  border-color: #e4606d;
  background-color: #e4606d;
} */
</style>
