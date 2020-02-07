<template>
  <div id="uploaddialogue">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Upload Image</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span
              class="badge badge-primary"
              v-bind:key="index"
              v-for="{ index, picture } in pictures"
              >{{ picture.name }} {{ picture.size }}bytes
              <span @click="removeOne(picture)" class="clear"> &times;</span
              ><br
            /></span>
            <form method="post" enctype="multipart/form-data">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="customFile"
                  accept="image/*"
                  multiple
                  @change="addPictures($event)"
                />
                <label class="custom-file-label" for="customFile"
                  >Choose file</label
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="submitForm">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Catalogue from '@/components/Catalogue';
import bus from '@/components/bus';
import axios from 'axios';

export default {
  name: 'UploadDialogue',
  data() {
    return {
      pictures: [],
    };
  },
  components: {
    Catalogue,
  },
  methods: {
    addPictures(event) {
      let files = [];
      let i = 0;
      console.log('this is file oo: ', event.target.files[0]);
      // for (let file of event.target.files) {
      //   const pictureObj = {
      //     index: i,
      //     picture: file,
      //   };
      //   files.push(pictureObj);
      //   i = i + 1;
      // }
      this.pictures = event.target.files[0];
    },
    removeOne(param) {
      const freshPictureArray = this.pictures.filter(
        picture => picture.picture.name !== param.name,
      );
      this.pictures.splice(0, this.pictures.length, ...freshPictureArray);
    },
    uploadFiles(data) {
      console.log('this is data: ', data);
      // const formData = new FormData();
      // for (let file in this.pictures) {
      //   formData.append('file', file[0]);
      //   formData.append('upload_preset', 'unsigned_uploads');
      //   // For debug purpose only
      //   // Inspects the content of formData
      //   for (var pair of formData.entries()) {
      //     console.log(pair);
      //   }
      //   axios
      //     .post('https://api.cloudinary.com/v1_1/kent2cky/upload', formData)
      //     .then(res => console.log(res))
      //     .catch(err => console.log('this is error', err));
      // }
    },
    submitForm() {
      if (this.pictures.length === 0) return 0;
      // take no action if user doesn't select a picture to upload
      // console.log(this.pictures);
      // for (var i = 0; i <= this.pictures.length; i++) {
      console.log(this.pictures);

      const fileReader = new FileReader();
      fileReader.onload = this.uploadFiles(fileReader.result);
      fileReader.readAsDataURL(this.pictures[0]);
      // }
    },
  },
};
</script>

<style scoped>
/* .card{
    display: flex;

} */

#modal {
  position: fixed;
  background: transparent;
  width: 100%;
  height: 100vh;
  z-index: 500000;
  top: 0px;
  overflow: scroll;
  display: block;
  padding: 5vh 1vh;
}
p {
  background: red;
}

.badge {
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
}

.clear {
  margin-left: 10px;
  cursor: pointer;
  font-size: 17px;
  color: #e64337f6;
}
</style>
