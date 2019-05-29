<template>
    <section  id="content-counter">

			<div class="content-wrap">

				<div class="container clearfix">

					<div class="col_one_fourth nobottommargin center">
						<i class="i-plain i-xlarge divcenter nobottommargin fa fa-child"></i>
						<div class="counter counter-large" style="color: #1abc9c;"><span data-from="0" data-to="623" data-refresh-interval="50" data-speed="2000"></span></div>
						<h5>Aktif Öğrenci</h5>
					</div>

					<div class="col_one_fourth nobottommargin center">
						<i class="i-plain i-xlarge divcenter nobottommargin icon-calendar"></i>
						<div class="counter counter-large" style="color: #e74c3c;"><span data-from="0" data-to="7" data-refresh-interval="50" data-speed="2500"></span></div>
						<h5>Etkinlik</h5>
					</div>
					<div  v-for="kapak in kapaklar" :key="kapak.id"  class="col_one_fourth nobottommargin center">
						<i class="i-plain i-xlarge divcenter nobottommargin fa fa-trophy "></i>
						<div class="counter counter-large" style="color: #3498db;">{{kapak.sayi}}<span  data-from='0' :data-to="kapak.sayi" data-refresh-interval="30" data-speed="2700"></span></div>
						<h5>MAVİ KAPAK</h5>
					</div>

					<div class="col_one_fourth nobottommargin center col_last">
						<i class="i-plain i-xlarge divcenter nobottommargin fas fa-comments"></i>
						<div  class="counter counter-large" style="color: #9b59b6;"><span data-from="0" data-to="3" data-refresh-interval="30" data-speed="2700"></span></div>
						<h5>Seminer</h5>
					</div>

				</div>

			</div>

		</section>
</template>

<script>
    export default {
        data() {
            return {
                editmode: false,
				kapaklar: [],
						
            }
        },
        methods: {
            loadKapak(){
				 axios.get("api/kapak").then(({ data }) => (this.kapaklar = data.data))
					x:this.kapaklar.sayi
			},

        },
        created() {
           this.loadKapak();
		   
           // setInterval(() => this.loadKapak(), 3000);
        }
    }
</script>