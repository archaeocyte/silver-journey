<template>
    <div id='detail-film'>
    </div>
</template>

<script>


module.exports = {
    name: 'detail-film',
    created: function() {
    	var id = this.$route.params.id;
    	console.log(id);
    	this.fetchFilm(id);
    },
    methods: {
    	fetchFilm(id) {
    		$.ajax({
    			url: "/api/film/detail/" + id,
    			type: "GET",
    			success: function(result) {
    				console.log(result);
    			}
    		});
    	}
    }
}
</script>

<style lang="less" scoped>

</style>
