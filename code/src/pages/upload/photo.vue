<template>
    <div id="upload-photo">
        <!-- action="http://localhost:3000/api/cos/upload/photo" -->
        <!-- action="javascript: void 0;" -->
        <form
            id="upload-photo-form"
            @submit="_submitEvent($event)"
            action="javascript: void 0;"
            enctype="multipart/form-data"
            method="POST"
        >
            <input type="file" name="filefield">
            <input type="text" name="dir_path" v-model="model_dir_path">
            <input type="submit">
        </form>
    </div>
</template>

<script>

module.exports = {
    name: 'upload-photo',
    data() {
        return {
            $form: null,
            model_dir_path: ""
        };
    },
    mounted() {
        this.$form = document.getElementById("upload-photo-form");
        console.log({f: this.$form});
    },
    methods: {
        _submitEvent(e) {
            var vm = this;
            var fd = new FormData(this.$form);
            var ContentLength = this.$form.children[0].files[0].size;
            fd.append("ContentLength", ContentLength);
            console.log(fd);
            var dir_path = vm.model_dir_path || "";
            var url = `
                /api/cos/upload/photo?ContentLength=${ContentLength}&dir_path=${dir_path}
            `;
            $.ajax({
                url: url,
                type: "POST",
                data: fd,
                processData: false,
                cache: false,
                contentType: false,
                success: function(result) {
                    console.log(result);
                },
                complete: function() {
                    
                }
            });
            e.preventDefault();
            return false;
        }
    }
}
</script>

<style lang="less" scoped>

</style>
